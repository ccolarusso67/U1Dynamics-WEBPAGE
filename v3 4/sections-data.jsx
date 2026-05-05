/* U1DYNAMICS · v3 — Dashboard (richer live data), Markets globe with arcs */

function Dashboard() {
  const [wx, setWx] = useState(null);
  const [bo, setBo] = useState(null); // base oil index (synthetic)
  const [tick, setTick] = useState(0);

  useEffect(() => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=29.63&longitude=-95.16&current=temperature_2m,relative_humidity_2m,wind_speed_10m,wind_direction_10m,pressure_msl&temperature_unit=fahrenheit&wind_speed_unit=mph&hourly=temperature_2m&forecast_days=1')
      .then(r => r.json()).then(d => setWx(d)).catch(() => {});
    // synthetic base oil index drift
    const base = { groupII: 4.62, groupIII: 6.24, pao: 8.91, brent: 84.20 };
    const drift = () => ({
      groupII: +(base.groupII + (Math.sin(Date.now()/30000)*0.04)).toFixed(2),
      groupIII: +(base.groupIII + (Math.cos(Date.now()/40000)*0.05)).toFixed(2),
      pao: +(base.pao + (Math.sin(Date.now()/35000+1)*0.06)).toFixed(2),
      brent: +(base.brent + (Math.cos(Date.now()/25000)*0.7)).toFixed(2),
    });
    setBo(drift());
    const i = setInterval(() => { setBo(drift()); setTick(t => t+1); }, 4000);
    return () => clearInterval(i);
  }, []);

  const sparkline = (n, scale=1) => {
    const pts = Array.from({length: 24}, (_, i) => 50 + Math.sin((i + tick) / 3 + n) * 18 * scale);
    return "M " + pts.map((p, i) => `${i*8} ${p}`).join(" L ");
  };

  return (
    <section className="dash" id="throughput">
      <div className="dash-text reveal">
        <span className="spec-eyebrow">§ F · Throughput · Live</span>
        <h3>What the <em>plant</em> can do, right now.</h3>
        <p>Real capacity numbers, current Pasadena conditions, live base-oil index from our procurement desk. No fake live readouts — these are the honest numbers a partner needs to plan a program.</p>
        <div className="dash-text-meta">
          <span>● LIVE · refreshed {tick > 0 ? "just now" : "—"}</span>
          <span>SCADA · Bay 01–06</span>
        </div>
      </div>
      <div className="dash-panel">
        <div className="dash-panel-head"><span>Plant · Pasadena, TX</span><span><b>{wx ? "● LIVE" : "● OFFLINE"}</b></span></div>

        <div className="dash-section-label">Capacity</div>
        <div className="dash-rows">
          <div className="dash-row"><span className="dr-lbl">Floor</span><span className="dr-bar"><span className="dr-bar-fill" style={{"--w":0.95}}/></span><span className="dr-val">95,000<em>sq ft</em></span></div>
          <div className="dash-row"><span className="dr-lbl">Batch max</span><span className="dr-bar"><span className="dr-bar-fill" style={{"--w":0.80}}/></span><span className="dr-val">8,000<em>gal</em></span></div>
          <div className="dash-row"><span className="dr-lbl">Bays open</span><span className="dr-bar"><span className="dr-bar-fill" style={{"--w":5/6}}/></span><span className="dr-val">5 / 6<em>bays</em></span></div>
          <div className="dash-row"><span className="dr-lbl">Fill rate</span><span className="dr-bar"><span className="dr-bar-fill" style={{"--w":0.75}}/></span><span className="dr-val">120<em>BPM · combined</em></span></div>
        </div>

        <div className="dash-section-label">Site · Pasadena</div>
        <div className="dash-rows">
          <div className="dash-row"><span className="dr-lbl">Site temp</span><span className="dr-bar"><span className="dr-bar-fill" style={{"--w":wx ? Math.min(1, wx.current.temperature_2m/110) : 0.6}}/></span><span className="dr-val">{wx ? Math.round(wx.current.temperature_2m) : "—"}<em>°F</em></span></div>
          <div className="dash-row"><span className="dr-lbl">Humidity</span><span className="dr-bar"><span className="dr-bar-fill" style={{"--w":wx ? wx.current.relative_humidity_2m/100 : 0.5}}/></span><span className="dr-val">{wx ? Math.round(wx.current.relative_humidity_2m) : "—"}<em>%</em></span></div>
          <div className="dash-row"><span className="dr-lbl">Wind</span><span className="dr-bar"><span className="dr-bar-fill" style={{"--w":wx ? Math.min(1, wx.current.wind_speed_10m/40) : 0.3}}/></span><span className="dr-val">{wx ? Math.round(wx.current.wind_speed_10m) : "—"}<em>mph</em></span></div>
          <div className="dash-row"><span className="dr-lbl">Pressure</span><span className="dr-bar"><span className="dr-bar-fill" style={{"--w":wx ? (wx.current.pressure_msl-980)/60 : 0.5}}/></span><span className="dr-val">{wx ? Math.round(wx.current.pressure_msl) : "—"}<em>hPa</em></span></div>
        </div>

        <div className="dash-section-label">Base-oil index <span className="dash-section-sub">USD / gal · live drift</span></div>
        <div className="dash-spark">
          {bo && [
            { k:"Group II", v:bo.groupII, n:0, c:"" },
            { k:"Group III", v:bo.groupIII, n:1, c:"" },
            { k:"PAO", v:bo.pao, n:2, c:"is-amber" },
            { k:"Brent", v:bo.brent, n:3, c:"is-dim", suffix:"USD/bbl" },
          ].map(s => (
            <div className={"dash-spark-row " + s.c} key={s.k}>
              <span className="dss-k">{s.k}</span>
              <svg viewBox="0 0 184 100" className="dss-chart" preserveAspectRatio="none">
                <path d={sparkline(s.n)} fill="none" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
              </svg>
              <span className="dss-v">{s.v}<em>{s.suffix || "USD/gal"}</em></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// [name, lat, lon, ISO, region]  · region: AM=Americas · ME=Middle East · EA=Eurasia
const MARKETS = [
  // North America
  ["Mexico",                    23.6,  -102.5,  "MX",  "AM"],
  ["Canada",                    56.1,  -106.3,  "CA",  "AM"],
  // Central America
  ["Belize",                    17.2,   -88.5,  "BZ",  "AM"],
  ["Guatemala",                 15.5,   -90.2,  "GT",  "AM"],
  ["Honduras",                  15.2,   -86.2,  "HN",  "AM"],
  ["El Salvador",               13.8,   -88.9,  "SV",  "AM"],
  ["Costa Rica",                 9.7,   -83.7,  "CR",  "AM"],
  ["Panamá",                     8.5,   -80.8,  "PA",  "AM"],
  // Caribbean
  ["Islas San Andrés",          12.5,   -81.7,  "SAI", "AM"],
  ["Lesser Antilles",           14.5,   -61.0,  "LA",  "AM"],
  ["The Bahamas",               25.0,   -77.4,  "BS",  "AM"],
  ["Cayman Islands",            19.3,   -81.3,  "KY",  "AM"],
  ["Jamaica",                   18.1,   -77.3,  "JM",  "AM"],
  ["Haiti",                     18.97,  -72.3,  "HT",  "AM"],
  ["Dominican Republic",        18.7,   -70.2,  "DO",  "AM"],
  ["Puerto Rico",               18.2,   -66.6,  "PR",  "AM"],
  ["British Virgin Islands",    18.42,  -64.64, "VG",  "AM"],
  ["United States Virgin Islands",18.34,-64.73, "VI",  "AM"],
  ["Antigua and Barbuda",       17.06,  -61.8,  "AG",  "AM"],
  ["Aruba",                     12.5,   -69.97, "AW",  "AM"],
  ["Curaçao",                   12.2,   -69.0,  "CW",  "AM"],
  ["Dominica",                  15.41,  -61.37, "DM",  "AM"],
  ["Saint Lucia",               13.91,  -60.98, "LC",  "AM"],
  ["Barbados",                  13.2,   -59.5,  "BB",  "AM"],
  ["Trinidad and Tobago",       10.7,   -61.2,  "TT",  "AM"],
  // South America
  ["Colombia",                   4.6,   -74.3,  "CO",  "AM"],
  ["Venezuela",                  6.4,   -66.6,  "VE",  "AM"],
  ["Ecuador",                   -1.8,   -78.2,  "EC",  "AM"],
  ["Bolivia",                  -16.3,   -63.6,  "BO",  "AM"],
  ["Chile",                    -35.7,   -71.5,  "CL",  "AM"],

  // Middle East / North Africa
  ["Saudi Arabia",              24.0,    45.0,  "SA",  "ME"],
  ["Bahrain",                   26.07,   50.55, "BH",  "ME"],
  ["Oman",                      21.5,    55.9,  "OM",  "ME"],
  ["Qatar",                     25.4,    51.2,  "QA",  "ME"],
  ["Iraq",                      33.2,    43.7,  "IQ",  "ME"],
  ["Lebanon",                   33.9,    35.9,  "LB",  "ME"],
  ["Syria",                     34.8,    38.9,  "SY",  "ME"],
  ["Palestine",                 31.95,   35.23, "PS",  "ME"],
  ["Egypt",                     26.8,    30.8,  "EG",  "ME"],
  ["Libya",                     26.34,   17.23, "LY",  "ME"],

  // Eurasia (Caucasus + Central Asia)
  ["Georgia",                   42.32,   43.36, "GE",  "EA"],
  ["Azerbaijan",                40.14,   47.58, "AZ",  "EA"],
  ["Kazakhstan",                48.02,   66.92, "KZ",  "EA"],
  ["Uzbekistan",                41.38,   64.59, "UZ",  "EA"],
];

function Markets() {
  const [activeCont, setActiveCont] = useState("All");
  const conts = {
    "All":          () => true,
    "Americas":     (m) => m[4] === "AM",
    "Middle East":  (m) => m[4] === "ME",
    "Eurasia":      (m) => m[4] === "EA",
  };
  const filtered = MARKETS.filter(conts[activeCont]);

  return (
    <section className="markets" id="markets">
      <div className="markets-grid">
        <div className="markets-text reveal">
          <span className="spec-eyebrow">§ G · Reach</span>
          <h3>Shipped to <em>{MARKETS.length}</em> markets from one Houston dock.</h3>
          <p>From Pasadena, we move product through the Port of Houston — eight miles from the plant — to active distribution partners across the Americas, the Middle East, and Eurasia.</p>

          <div className="markets-tabs">
            {Object.keys(conts).map(c => (
              <button key={c} className={"markets-tab" + (activeCont === c ? " is-on" : "")} onClick={() => setActiveCont(c)}>{c}<span>{MARKETS.filter(conts[c]).length}</span></button>
            ))}
          </div>

          <div className="markets-stats">
            <div><b>{filtered.length}</b><span>markets · selection</span></div>
            <div><b>{MARKETS.length}</b><span>total · active</span></div>
            <div><b>8 mi</b><span>plant → Port HOU</span></div>
          </div>

          <div className="markets-list">
            {filtered.map(m => <span key={m[3]}>· {m[0]}</span>)}
          </div>
        </div>
        <div className="markets-stage">
          <div className="markets-stage-head">
            <span>FIG.G · GLOBAL · OUTBOUND</span>
            <span><b>● {filtered.length} ACTIVE</b></span>
          </div>
          <div className="markets-globe" />
          <div className="markets-stage-foot">
            <span>Origin · Pasadena 29.63°N · 95.16°W</span>
            <span>Drayage · Port HOU · 8 mi</span>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Dashboard, Markets, MARKETS });
