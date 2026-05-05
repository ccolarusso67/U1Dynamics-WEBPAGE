/* U1DYNAMICS · v3 — Process timeline */

function Process() {
  const steps = [
    { n:"01", t:"Brief", img:FAC+"team-packing.jpg", body:"You bring a spec, a target market, and a timeline. We bring a formulation chemist, a production planner, and a packaging lead to the same call.", meta:["Day 0–3", "NDA · sample sign-off"] },
    { n:"02", t:"Formulate", img:FAC+"lab-testing.jpg", body:"In-house lab matches your spec to API/ILSAC/JASO/ISO standards. We pull base oils and additive packages from a 1,000-SKU library or build new.", meta:["Wk 1–2", "Lab · 200ml → 5gal trial"] },
    { n:"03", t:"Sample", img:FAC+"oil-pouring.jpg", body:"Pilot batch shipped overnight. You test in your application; we iterate on viscosity, color, additive level until first-time-right.", meta:["Wk 2–3", "FedEx priority"] },
    { n:"04", t:"Blend", img:FAC+"blending-vortex.jpg", body:"Approved spec moves to floor. 500 to 8,000-gal batch. Every batch ticketed with COA, lot number, and chain of custody back to base oil source.", meta:["Wk 3–5", "Bay 01 · 8,000 gal max"] },
    { n:"05", t:"Fill & label", img:FAC+"filling-nozzles.jpg", body:"Quart, gallon, 5-gal pail, drum, IBC, or bulk. In-line labeler runs your art at lot-coded speed. QA pulls retain samples every pallet.", meta:["Wk 4–6", "60 BPM · quart line"] },
    { n:"06", t:"Ship", img:FAC+"branded-truck.jpg", body:"Palletized for retail, container-ready for export. Eight miles to Port of Houston. Domestic LTL/FTL or sea container — your incoterm.", meta:["Wk 6–8", "Port HOU · 38 markets"] },
  ];
  return (
    <section className="process" id="process">
      <div className="container">
        <SecHead idx="04" idxOf="11" kicker="Process" title="Brief to first {em}<br/>in 4–8 weeks." em="container" aside="Six steps. Owned end-to-end. Every batch ticketed against your spec." />

        <div className="proc-stage reveal">
          <div className="proc-axis">
            <div className="proc-axis-line" />
            <div className="proc-axis-label">T+0</div>
            <div className="proc-axis-label" style={{left:"100%"}}>T+8 wk</div>
          </div>
          <div className="proc-grid">
            {steps.map((s, i) => (
              <article className="proc-step" key={s.n}>
                <div className="proc-step-img">
                  <img src={s.img} alt={s.t} loading="lazy" />
                  <span className="proc-step-num">{s.n}</span>
                </div>
                <div className="proc-step-body">
                  <h4>{s.t}</h4>
                  <p>{s.body}</p>
                  <div className="proc-step-meta">
                    {s.meta.map((m,j) => <span key={j}>{m}</span>)}
                  </div>
                </div>
                {i < steps.length - 1 ? <span className="proc-step-arrow">→</span> : null}
              </article>
            ))}
          </div>
        </div>

        <div className="proc-foot">
          <div><b>One project manager.</b> One QA lead. One shipping coordinator. Same three names from brief to last container.</div>
          <a href="#contact" className="proc-cta">Brief us → <span>Start a program</span></a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Process });
