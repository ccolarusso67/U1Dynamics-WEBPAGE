/* U1DYNAMICS · v3 — Case study, Founder, News, Careers, FAQ */

function CaseStudy() {
  return (
    <section className="case" id="case">
      <div className="case-inner">
        <div className="case-img reveal">
          <img src={FAC + "drums-usa-workers.jpg"} alt="Drums on the outbound floor" loading="lazy" />
          <span className="case-tag">Case · <b>2024</b></span>
        </div>
        <div className="case-text reveal">
          <span className="spec-eyebrow">§ A · Case study</span>
          <p className="case-quote">We came to U1 with a six-week launch window and a private-label spec that nobody else would touch under thirty thousand units. They blended, filled, labeled, and had the first container at the Port of Houston in five.</p>
          <div className="case-attr">
            <div>
              <div className="case-attr-name">North-American Fleet Services</div>
              <div className="case-attr-role">VP, Procurement</div>
            </div>
          </div>
          <div className="case-stats">
            <div className="case-stat"><span className="case-stat-n">5 wks</span><span className="case-stat-lbl">Brief to first container</span></div>
            <div className="case-stat"><span className="case-stat-n">28k</span><span className="case-stat-lbl">Units · first run</span></div>
            <div className="case-stat"><span className="case-stat-n">12</span><span className="case-stat-lbl">SKUs scaled · year one</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section className="founder" id="founder">
      <div className="founder-inner">
        <div className="founder-portrait reveal">
          <img src={FAC + "bottling-line-worker.jpg"} alt="Plant operator" loading="lazy" />
        </div>
        <div className="founder-text reveal">
          <span className="spec-eyebrow">§ B · From the operator</span>
          <div className="founder-body">
            <p>We started U1Dynamics because the lubricant industry had stopped <em>caring</em>. Long lead times, opaque specs, and partners who treated contract blending like a commodity.</p>
            <p>So we built ninety-five thousand square feet in Pasadena and ran it the way a customer would — every batch ticketed, every spec documented, every program scoped to the buyer in the room. Premium is not a finish; <em>it is how we operate</em>.</p>
          </div>
          <div className="founder-sig">
            <div><div className="founder-sig-name">— The U1 team</div></div>
            <div style={{marginLeft: "auto"}}>Pasadena · Texas · 2022 →</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function News() {
  const items = [
    { date:"2026.04.18", tag:"Press", img:U1P+"u1p-blog-aapex.jpg", title:"Ultra1Plus expands HD diesel line at AAPEX", body:"Three new CK-4 SKUs join the rack — built for last-mile and regional fleet duty cycles." },
    { date:"2026.03.02", tag:"Plant", img:FAC+"interior-wide.jpg", title:"Bay 02 doubles fill capacity to 60 BPM", body:"Second quart line commissioned. Combined throughput now 120 bottles per minute, lot-coded." },
    { date:"2026.01.14", tag:"Export", img:FAC+"branded-truck.jpg", title:"Two new export markets · Vietnam, Kenya", body:"Reach grows to 38. First containers scheduled out of Port HOU in February." },
    { date:"2025.11.07", tag:"Award", img:U1P+"u1p-blog-gear.jpg", title:"Ultra1Plus 75W-90 named Lubes'N'Greases pick", body:"Recognition for long-drain HD gear oil program — full PAO base, OEM-approved spec." },
  ];
  return (
    <section className="news" id="news">
      <div className="container">
        <SecHead idx="C" idxOf="11" kicker="News" title="From the {em}<br/>and the floor." em="press room" aside="What's shipping, what's scaling, what we're proud of." />
        <div className="news-grid reveal">
          {items.map(n => (
            <article className="news-card" key={n.date}>
              <div className="news-card-img"><img src={n.img} alt={n.title} loading="lazy" /></div>
              <div className="news-card-body">
                <div className="news-card-meta">
                  <span>{n.date}</span>
                  <span className="news-card-tag">· {n.tag}</span>
                </div>
                <h4>{n.title}</h4>
                <p>{n.body}</p>
                <span className="news-card-cta">Read note →</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Careers() {
  const roles = [
    { dept:"Operations", title:"Plant Production Manager", loc:"Pasadena, TX · On-site", type:"Full-time" },
    { dept:"Quality",    title:"QC Chemist · Lubricants",   loc:"Pasadena, TX · On-site", type:"Full-time" },
    { dept:"Sales",      title:"Account Director · Fleet",  loc:"Houston / Remote",       type:"Full-time" },
    { dept:"Logistics",  title:"Export Operations Lead",    loc:"Pasadena, TX · On-site", type:"Full-time" },
    { dept:"Engineering",title:"Process Engineer",          loc:"Pasadena, TX · On-site", type:"Full-time" },
  ];
  return (
    <section className="careers" id="careers">
      <div className="careers-grid reveal">
        <div className="careers-img">
          <img src={FAC + "team-packing.jpg"} alt="The U1 team" loading="lazy" />
          <span className="careers-img-tag">PL.TEAM · <b>2026 hiring</b></span>
        </div>
        <div className="careers-text">
          <span className="spec-eyebrow">§ D · Careers</span>
          <h3>Build the <em>plant</em> with us.</h3>
          <p>We're a small, ambitious team in Pasadena. We over-hire on judgment, give people real ownership, and pay for the difficulty of doing it right.</p>
          <ul className="careers-list">
            {roles.map(r => (
              <li className="careers-row" key={r.title}>
                <span className="careers-dept">{r.dept}</span>
                <span className="careers-title">{r.title}</span>
                <span className="careers-loc">{r.loc}</span>
                <span className="careers-type">{r.type}</span>
                <span className="careers-arrow">→</span>
              </li>
            ))}
          </ul>
          <a href="mailto:careers@u1dynamics.com" className="careers-cta">Send a résumé · careers@u1dynamics.com →</a>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const qs = [
    { q:"What is the minimum order quantity for a private-label program?", a:"One pallet (48 cases of quarts, or equivalent) for SKUs already in our 1,000-SKU library. Net-new formulations typically start at one 500-gal pilot batch, then scale on approval." },
    { q:"How fast can you produce the first container after a brief?", a:"Typical: 4–8 weeks from signed brief to outbound. The driver is usually packaging artwork sign-off and base-oil staging, not blending. Rush programs documented case-by-case." },
    { q:"Do you offer formulation work, or only contract filling?", a:"Both. We have an in-house formulation chemist and a 200ml-to-5gal lab capability. We can match a competitor spec, build to a target performance category, or develop a clean-sheet additive package." },
    { q:"What approvals do you carry on engine and gear oils?", a:"API SP, ILSAC GF-6A on PCMO; API CK-4 / CJ-4 / SN on HD diesel; API GL-4 on gear; multi-vehicle on ATF; NMMA FC-W on marine; JASO MA2 on motorcycle. Full list and license numbers on request." },
    { q:"Can you ship internationally? What incoterms?", a:"Yes — 38 export markets currently. We typically transact FOB Houston or CIF destination port. Container loading and documentation handled in-house by our DOT-certified shippers." },
    { q:"Do you provide a Certificate of Analysis with each batch?", a:"Yes. Every batch ships with a per-pallet COA tied to the lot number and a retain sample held in our QC lab for seven years from production." },
    { q:"Do you do DEF and coolant in addition to lubricants?", a:"Yes. Full ISO 22241 DEF program — bulk, tote, drum, jug, retail. Heavy-duty and light-duty coolant programs in OAT, HOAT, and conventional formulations." },
    { q:"Where is the plant, and what's the Port HOU lead time?", a:"4468 Genoa Red Bluff, Pasadena, TX 77505 — eight miles to Port of Houston container terminals. Drayage typically same-day; ocean booking lead times set by the carrier." },
    { q:"How do you handle pricing and lock?", a:"Pricing tied to a published base-oil index plus formulation premium. Quarterly resets are standard; longer locks available on volume programs. Transparent pass-through on raw materials." },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section className="faq" id="faq">
      <div className="container">
        <SecHead idx="E" idxOf="11" kicker="FAQ" title="Procurement asks.<br/>{em} answers." em="Honest" aside="Lifted straight from buyer calls. If yours isn't here, it's the next email we owe you." />
        <div className="faq-list reveal">
          {qs.map((q, i) => (
            <div className={"faq-row" + (open === i ? " is-open" : "")} key={i} onClick={() => setOpen(open === i ? -1 : i)}>
              <div className="faq-row-head">
                <span className="faq-row-num">Q.{String(i+1).padStart(2,'0')}</span>
                <h4>{q.q}</h4>
                <span className="faq-row-toggle">{open === i ? "−" : "+"}</span>
              </div>
              <div className="faq-row-body"><p>{q.a}</p></div>
            </div>
          ))}
        </div>
        <div className="faq-foot">
          <span>Procurement contact · <a href="mailto:procurement@u1dynamics.com">procurement@u1dynamics.com</a></span>
          <span>Response window · <b>1 business day</b></span>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { CaseStudy, Founder, News, Careers, FAQ });
