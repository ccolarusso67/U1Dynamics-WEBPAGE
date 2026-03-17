using System.Collections.Concurrent;

namespace U1PFinanceSync.Services;

/// <summary>
/// Implements the QBWC SOAP interface. Manages sync sessions and queues
/// qbXML requests/responses for each sync job.
/// </summary>
public class QBWebConnectorService : IQBWebConnectorService
{
    private readonly ILogger<QBWebConnectorService> _logger;
    private readonly IConfiguration _config;
    private readonly SyncJobManager _jobManager;

    // Active sessions keyed by ticket
    private readonly ConcurrentDictionary<string, SyncSession> _sessions = new();

    public QBWebConnectorService(
        ILogger<QBWebConnectorService> logger,
        IConfiguration config,
        SyncJobManager jobManager)
    {
        _logger = logger;
        _config = config;
        _jobManager = jobManager;
    }

    public string serverVersion() => "1.0.0";

    public string clientVersion(string strVersion)
    {
        // Return empty string = supported, "W:" = warning, "E:" = error
        return "";
    }

    public string[] authenticate(string strUserName, string strPassword)
    {
        var expectedUser = _config["WebConnector:Username"];
        var expectedPass = _config["WebConnector:Password"];

        if (strUserName != expectedUser || strPassword != expectedPass)
        {
            _logger.LogWarning("Authentication failed for user: {User}", strUserName);
            return new[] { "", "nvu" };
        }

        var ticket = Guid.NewGuid().ToString();
        var companyFile = _config["QuickBooks:CompanyFile"] ?? "";

        // Get pending sync jobs
        var pendingJobs = _jobManager.GetPendingJobs();
        if (!pendingJobs.Any())
        {
            _logger.LogInformation("No pending sync jobs.");
            return new[] { ticket, "none" };
        }

        var session = new SyncSession(ticket, pendingJobs, _logger);
        _sessions[ticket] = session;

        _logger.LogInformation(
            "Authenticated. Ticket: {Ticket}, Jobs: {Jobs}",
            ticket, string.Join(", ", pendingJobs.Select(j => j.Name)));

        return new[] { ticket, companyFile };
    }

    public string sendRequestXML(
        string ticket, string strHCPResponse, string strCompanyFileName,
        string qbXMLCountry, int qbXMLMajorVers, int qbXMLMinorVers)
    {
        if (!_sessions.TryGetValue(ticket, out var session))
        {
            _logger.LogWarning("Unknown ticket: {Ticket}", ticket);
            return "";
        }

        var request = session.GetNextRequest();
        if (request == null)
        {
            _logger.LogInformation("Session {Ticket}: No more requests.", ticket);
            return "";
        }

        _logger.LogInformation(
            "Session {Ticket}: Sending request for job {Job} (request {Idx}/{Total})",
            ticket, session.CurrentJob?.Name, session.CurrentRequestIndex + 1, session.CurrentRequestCount);

        return request;
    }

    public int receiveResponseXML(string ticket, string response, string hresult, string message)
    {
        if (!_sessions.TryGetValue(ticket, out var session))
        {
            _logger.LogWarning("Unknown ticket on response: {Ticket}", ticket);
            return -1;
        }

        if (!string.IsNullOrEmpty(hresult) && hresult != "0")
        {
            _logger.LogError(
                "QB error for ticket {Ticket}: {HResult} - {Message}",
                ticket, hresult, message);
            session.MarkCurrentJobError(message);
        }
        else
        {
            // Process the response SYNCHRONOUSLY — QBWC expects processing to
            // complete before the next sendRequestXML call
            try
            {
                session.ProcessResponse(response).GetAwaiter().GetResult();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error processing response for job {Job}",
                    session.CurrentJob?.Name);
                session.MarkCurrentJobError(ex.Message);
            }
        }

        // Return percentage complete (0-100). -1 = error.
        return session.PercentComplete;
    }

    public string connectionError(string ticket, string hresult, string message)
    {
        _logger.LogError("Connection error for {Ticket}: {HResult} - {Message}",
            ticket, hresult, message);

        if (_sessions.TryRemove(ticket, out var session))
        {
            session.LastError = $"{hresult} - {message}";
        }

        return "done";
    }

    public string closeConnection(string ticket)
    {
        _sessions.TryRemove(ticket, out var session);
        _logger.LogInformation("Session {Ticket} closed.", ticket);
        return "OK";
    }

    public string getLastError(string ticket)
    {
        if (_sessions.TryGetValue(ticket, out var session))
            return session.LastError ?? "No error";
        return "No active session";
    }
}

/// <summary>
/// Tracks the state of a single QBWC sync session.
/// The QBWC protocol is strictly sequential:
///   1. sendRequestXML → returns qbXML request N
///   2. QB processes request N → returns response N
///   3. receiveResponseXML → processes response N, advances to N+1
///   4. Repeat from step 1
/// </summary>
public class SyncSession
{
    public string Ticket { get; }
    public ISyncJob? CurrentJob => _jobIndex < _jobs.Count ? _jobs[_jobIndex] : null;
    public string? LastError { get; set; }
    public int CurrentRequestIndex => _requestIndex;
    public int CurrentRequestCount => CurrentJob?.GetQbXmlRequests().Count ?? 0;

    public int PercentComplete
    {
        get
        {
            if (_totalRequests == 0) return 100;
            return (int)((double)_completedRequests / _totalRequests * 100);
        }
    }

    private readonly List<ISyncJob> _jobs;
    private readonly ILogger _logger;
    private int _jobIndex;
    private int _requestIndex;
    private int _completedRequests;
    private readonly int _totalRequests;
    private bool _waitingForResponse;

    public SyncSession(string ticket, List<ISyncJob> jobs, ILogger logger)
    {
        Ticket = ticket;
        _jobs = jobs;
        _logger = logger;

        // Pre-calculate total request count for accurate progress
        _totalRequests = jobs.Sum(j => j.GetQbXmlRequests().Count);
    }

    /// <summary>
    /// Called by sendRequestXML. Returns the next qbXML request to send to QB.
    /// Returns null when all jobs are complete.
    /// </summary>
    public string? GetNextRequest()
    {
        // Safety: if we're still waiting for a response, don't advance
        if (_waitingForResponse)
        {
            _logger.LogWarning("GetNextRequest called while still waiting for response");
        }

        while (_jobIndex < _jobs.Count)
        {
            var job = _jobs[_jobIndex];
            var requests = job.GetQbXmlRequests();

            if (_requestIndex < requests.Count)
            {
                _waitingForResponse = true;
                return requests[_requestIndex];
            }

            // Current job has no more requests — move to next job
            _jobIndex++;
            _requestIndex = 0;
        }
        return null;
    }

    /// <summary>
    /// Called by receiveResponseXML SYNCHRONOUSLY. Processes the QB response
    /// and advances the request index for the next sendRequestXML call.
    /// </summary>
    public async Task ProcessResponse(string responseXml)
    {
        if (CurrentJob != null)
        {
            await CurrentJob.ProcessResponseAsync(responseXml);
            _requestIndex++;
            _completedRequests++;
            _waitingForResponse = false;

            _logger.LogInformation("Job {Job}: processed response {Idx}",
                CurrentJob?.Name ?? "(done)", _requestIndex);
        }
    }

    public void MarkCurrentJobError(string error)
    {
        LastError = error;
        _logger.LogWarning("Job {Job} failed: {Error}. Skipping to next job.",
            CurrentJob?.Name, error);

        // Skip remaining requests for this job
        var remaining = CurrentJob?.GetQbXmlRequests().Count ?? 0;
        _completedRequests += remaining - _requestIndex;

        _jobIndex++;
        _requestIndex = 0;
        _waitingForResponse = false;
    }
}
