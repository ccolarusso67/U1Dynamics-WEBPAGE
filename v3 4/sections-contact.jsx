/* U1DYNAMICS · v3 — Contact (richer fidelity) */

function Contact() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);
  const [program, setProgram] = useState("");
  const [volume, setVolume] = useState("");
  const [pkg, setPkg] = useState([]);
  const [timeline, setTimeline] = useState("");

  function togglePkg(p) {
    setPkg(pkg.includes(p) ? pkg.filter(x => x !== p) : [...pkg, p]);
  }

  async function submit(e) {
    e.preventDefault();
    setBusy(true); setError("");
    const fd = new FormData(e.target);
    fd.append('program', program);
    fd.append('volume', volume);
    fd.append('packaging', pkg.join(', '));
    fd.append('timeline', timeline);
    fd.append('_subject', `RFQ · ${fd.get('name') || 'New'} · ${fd.get('company') || 'N/A'} · ${program || 'general'}`);

    const cfg = (window.__U1_CFG || {});
    const id = cfg.FORMSPREE_ID || 'FORMSPREE_FORM_ID';
    const endpoint = `https://formspree.io/f/${id}`;

    // Fallback to mailto if Formspree ID isn't wired yet
    if (/FORMSPREE_FORM_ID/.test(id)) {
      const subject = encodeURIComponent(`RFQ · ${fd.get('name')} · ${fd.get('company') || 'N/A'} · ${program || 'general'}`);
      const body = encodeURIComponent(
        `Name: ${fd.get('name')}\nEmail: ${fd.get('email')}\nCompany: ${fd.get('company')}\nRole: ${fd.get('role')}\n\n` +
        `Program: ${program}\nVolume: ${volume}\nPackaging: ${pkg.join(', ')}\nTimeline: ${timeline}\n\n` +
        `Brief:\n${fd.get('message')}`
      );
      window.location.href = `mailto:info@u1dynamics.com?subject=${subject}&body=${body}`;
      if (window.gtag) window.gtag('event', 'generate_lead', { method: 'mailto_fallback', program, value: 1 });
      setSent(true); setBusy(false);
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: fd
      });
      if (!res.ok) throw new Error('Submission failed (' + res.status + ')');
      if (window.gtag) window.gtag('event', 'generate_lead', { method: 'formspree', program, volume, timeline, value: 1 });
      setSent(true);
    } catch (err) {
      setError("We couldn't transmit that. Email us directly at info@u1dynamics.com.");
    } finally {
      setBusy(false);
    }
  }

  const programs = ["Contract blending", "Private label", "DEF / coolant", "Custom formulation", "Specialty / food-grade"];
  const volumes  = ["1–10 pallets", "1 container", "1 truckload", "Bulk · monthly"];
  const pkgs     = ["Quart", "Gallon", "5-gal pail", "55-gal drum", "275-gal IBC", "Bulk tanker"];
  const timelines = ["ASAP · rush", "4–8 weeks", "Q3 / Q4", "Exploring"];

  return (
    <section className="contact" id="contact">
      <div className="contact-bg-img reveal">
        <img src={FAC + "aerial-hero.jpg"} alt="" loading="lazy" />
      </div>
      <div className="contact-bg-grad" />
      <div className="contact-grid">
        <div className="reveal">
          <span className="spec-eyebrow">§ 11 · Contact</span>
          <h2>Let's <em>build</em> something together.</h2>
          <p>Whether you need a contract blender, a private label partner, or a specialty formulation — our team is ready to scope the program.</p>
          <div className="contact-cards">
            <div className="contact-card"><h5>Plant</h5><p>4468 Genoa Red Bluff Rd<br/>Pasadena, TX 77505</p></div>
            <div className="contact-card"><h5>Corporate HQ</h5><p>1600 Ponce De Leon Blvd<br/>Coral Gables, FL</p></div>
            <div className="contact-card"><h5>Direct line</h5><p><a href="tel:+18886878521">+1 (888) 687-8521</a></p></div>
            <div className="contact-card"><h5>Email</h5><p><a href="mailto:info@u1dynamics.com">info@u1dynamics.com</a></p></div>
            <div className="contact-card"><h5>Procurement</h5><p><a href="mailto:procurement@u1dynamics.com">procurement@u1dynamics.com</a></p></div>
            <div className="contact-card"><h5>Hours</h5><p>Mon–Fri · 08–17 CST<br/>Plant tours by appointment</p></div>
          </div>
        </div>
        <form className="cform" onSubmit={submit}>
          <div className="cform-head">
            <span>RFQ · NEW · STEP {step} / 2</span>
            <span><b>{program || "Select program"}</b></span>
          </div>
          {sent ? (
            <div style={{padding:"60px 0", textAlign:"center"}}>
              <p className="spec-eyebrow">✓ Transmitted</p>
              <h3 style={{fontFamily:"var(--font-display)", fontSize:32, marginTop:12}}>Brief received.</h3>
              <p style={{color:"var(--paper-dim)", marginTop:12, fontSize:14}}>We reply within one business day. A copy was sent to {`{your inbox}`}.</p>
            </div>
          ) : step === 1 ? (
            <>
              <div className="cform-section">
                <div className="cform-section-label">01 · Program</div>
                <div className="cform-chips">
                  {programs.map(p => (
                    <button type="button" key={p} className={"cform-chip" + (program === p ? " is-on" : "")} onClick={() => setProgram(p)}>{p}</button>
                  ))}
                </div>
              </div>
              <div className="cform-section">
                <div className="cform-section-label">02 · Target volume · year one</div>
                <div className="cform-chips">
                  {volumes.map(v => (
                    <button type="button" key={v} className={"cform-chip" + (volume === v ? " is-on" : "")} onClick={() => setVolume(v)}>{v}</button>
                  ))}
                </div>
              </div>
              <div className="cform-section">
                <div className="cform-section-label">03 · Packaging · select all</div>
                <div className="cform-chips">
                  {pkgs.map(p => (
                    <button type="button" key={p} className={"cform-chip" + (pkg.includes(p) ? " is-on" : "")} onClick={() => togglePkg(p)}>{p}</button>
                  ))}
                </div>
              </div>
              <div className="cform-section">
                <div className="cform-section-label">04 · Timeline</div>
                <div className="cform-chips">
                  {timelines.map(t => (
                    <button type="button" key={t} className={"cform-chip" + (timeline === t ? " is-on" : "")} onClick={() => setTimeline(t)}>{t}</button>
                  ))}
                </div>
              </div>
              <button type="button" className="cform-submit" onClick={() => setStep(2)} disabled={!program}>Next · contact details →</button>
            </>
          ) : (
            <>
              <div className="cform-section">
                <div className="cform-section-label">05 · Who you are</div>
                <div className="cform-row">
                  <div className="cform-field"><label>Full name *</label><input name="name" required /></div>
                  <div className="cform-field"><label>Email *</label><input name="email" type="email" required /></div>
                </div>
                <div className="cform-row">
                  <div className="cform-field"><label>Company</label><input name="company" /></div>
                  <div className="cform-field"><label>Role</label><input name="role" placeholder="Procurement / Brand / Eng" /></div>
                </div>
              </div>
              <div className="cform-section">
                <div className="cform-section-label">06 · Project brief</div>
                <div className="cform-field">
                  <textarea name="message" rows="5" required placeholder="Volume, packaging, target spec, OEM approvals, distribution plan, anything we should know…" />
                </div>
              </div>
              <div className="cform-summary">
                <div><span>Program</span><b>{program || "—"}</b></div>
                <div><span>Volume</span><b>{volume || "—"}</b></div>
                <div><span>Packaging</span><b>{pkg.length ? pkg.join(", ") : "—"}</b></div>
                <div><span>Timeline</span><b>{timeline || "—"}</b></div>
              </div>
              <div className="cform-actions">
                <button type="button" className="cform-back" onClick={() => setStep(1)}>← Back</button>
                <button type="submit" className="cform-submit" disabled={busy}>{busy ? "Sending…" : "Send RFQ →"}</button>
              </div>
              {error ? <p style={{color:"#c66a55", fontSize:13, marginTop:10}}>{error}</p> : null}
            </>
          )}
        </form>
      </div>
    </section>
  );
}

Object.assign(window, { Contact });
