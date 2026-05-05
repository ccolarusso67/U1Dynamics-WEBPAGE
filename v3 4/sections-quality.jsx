/* U1DYNAMICS · v3 — Quality / certifications, Industries, Sustainability */

function Quality() {
  const certs = [
    { code:"ISO 9001:2015", name:"Quality Management System", status:"Maintained", body:"Plant-wide audited QMS — every process documented, every batch ticketed, every nonconformance closed." },
    { code:"ISO 22241", name:"Diesel Exhaust Fluid", status:"Certified", body:"Full DEF program: API-licensed, ISO 22241-compliant urea solution. Bulk to retail." },
    { code:"API Licensed", name:"SP · CK-4 · CJ-4 · GL-4", status:"Active", body:"Licensed engine, gear, and HD oil categories — formulations carry the donut." },
    { code:"ILSAC GF-6A", name:"PCMO performance", status:"Active", body:"Latest passenger-car motor oil performance category — fuel economy and LSPI protection." },
    { code:"DOT registered", name:"49 CFR · hazmat shipping", status:"Active", body:"In-house DOT-certified shipper. Domestic LTL, FTL, and ocean container documentation." },
    { code:"USDA H1 / H2", name:"Food-grade program", status:"Available", body:"H1 incidental-contact lubricants for food, beverage, and pharma processing on demand." },
    { code:"NMMA FC-W", name:"Marine 4T", status:"Active", body:"Outboard and inboard 4-stroke marine performance — saltwater corrosion and water rejection tested." },
    { code:"JASO MA2", name:"Motorcycle 4T", status:"Active", body:"Wet-clutch friction performance for street and off-road motorcycle applications." },
  ];
  return (
    <section className="quality" id="quality">
      <div className="container">
        <SecHead idx="08" idxOf="11" kicker="Quality" title="Eight standards.<br/>One {em} system." em="quality" aside="The certifications that give procurement teams a clean answer when the auditor asks." />

        <div className="cert-grid reveal">
          {certs.map(c => (
            <article className="cert-cell" key={c.code}>
              <div className="cert-cell-top">
                <span className="cert-cell-code">{c.code}</span>
                <span className={"cert-cell-status " + (c.status === "Available" ? "is-avail" : "is-on")}>● {c.status}</span>
              </div>
              <h4>{c.name}</h4>
              <p>{c.body}</p>
              <span className="cert-cell-stamp">Q.A · 2026</span>
            </article>
          ))}
        </div>

        <div className="quality-foot reveal">
          <div className="qf-img">
            <img src={FAC + "lab-testing.jpg"} alt="In-house QC lab" loading="lazy" />
            <span className="qf-tag">PL.LAB · <b>QC retain</b></span>
          </div>
          <div className="qf-text">
            <h3>Every batch retains a sample. Every sample lives <em>seven years</em>.</h3>
            <p>If a customer-side failure ever occurs, we pull the retain, run it on the same instruments, and produce a defendable answer in 48 hours. That is what a quality system is for.</p>
            <div className="qf-stats">
              <div><b>7 yr</b><span>retain sample window</span></div>
              <div><b>48 hr</b><span>incident response</span></div>
              <div><b>100%</b><span>batch COA coverage</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Industries() {
  const inds = [
    { code:"01", name:"Fleet & Trucking", img:FAC+"branded-truck.jpg", body:"Class 8 OTR, last-mile delivery, regional LTL. HD diesel oils, gear, ATF, coolant — drum to bulk.", clients:"Continental fleets · 3PLs · brokerages" },
    { code:"02", name:"Mining & Construction", img:FAC+"drums-closeup.jpg", body:"Off-highway haul, drilling, earthmoving. EP gear oils, hydraulic, transmission, grease.", clients:"Quarry · aggregate · pit ops" },
    { code:"03", name:"Marine", img:FAC+"ibc-tank.jpg", body:"Outboard 4T, inboard, transom service. NMMA FC-W certified. Saltwater corrosion package.", clients:"OEM rebrands · marina chains" },
    { code:"04", name:"Agriculture", img:FAC+"forklift-warehouse.jpg", body:"Tractor hydraulic fluid, gear, transmission, UTTO. Multi-OEM compatibility.", clients:"Co-ops · regional dealers" },
    { code:"05", name:"Power Generation", img:FAC+"raw-material-storage.jpg", body:"Gas turbine, diesel genset, compressor. Long-drain synthetic, anti-foam, demulsibility-led.", clients:"Datacenter · standby · utility" },
    { code:"06", name:"Industrial MRO", img:FAC+"interior-wide.jpg", body:"Plant hydraulic, gear, way oil, compressor, cutting fluid. Drum and tote programs.", clients:"Mfg plants · OEM service depts" },
    { code:"07", name:"Retail & Auto Parts", img:FAC+"pails-gear-oil.jpg", body:"Private-label PCMO and ATF for big-box and parts chains. Quart and gallon, in-line labeled.", clients:"Walmart · AutoZone · Tractor Supply" },
    { code:"08", name:"Export Distribution", img:FAC+"drums-usa-flag.jpg", body:"Container-ready, multi-language label art, region-specific specs. Eight miles to Port HOU.", clients:"38 markets · LATAM · MENA · APAC" },
  ];
  return (
    <section className="industries" id="industries">
      <div className="container">
        <SecHead idx="09" idxOf="11" kicker="Industries" title="Eight markets.<br/>One {em} floor." em="blending" aside="Same plant, same QC, same project manager — calibrated to the duty cycle of your industry." />

        <div className="ind-grid reveal">
          {inds.map(i => (
            <article className="ind-cell" key={i.code}>
              <div className="ind-cell-img">
                <img src={i.img} alt={i.name} loading="lazy" />
                <span className="ind-cell-code">{i.code}</span>
              </div>
              <div className="ind-cell-body">
                <h4>{i.name}</h4>
                <p>{i.body}</p>
                <span className="ind-cell-clients">{i.clients}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sustainability() {
  return (
    <section className="sus" id="sustainability">
      <div className="sus-grid reveal">
        <div className="sus-text">
          <span className="spec-eyebrow">§ 10 · Sustainability</span>
          <h3>Long-drain. Re-refined. <em>Recyclable</em> at the bottle.</h3>
          <p>The greenest gallon of oil is the one a customer doesn't have to change. Our synthetics are formulated for extended drain — fewer service intervals, less waste oil, less packaging.</p>
          <p>Where it makes sense for the spec, we blend with API Group II+ re-refined base oil. Our quart and gallon bottles run on rPET when the customer requests it.</p>
          <div className="sus-rows">
            <div className="sus-row">
              <span className="sus-row-n">2.4×</span>
              <div>
                <span className="sus-row-k">Avg drain extension</span>
                <span className="sus-row-v">vs. conventional baseline · HD diesel program</span>
              </div>
            </div>
            <div className="sus-row">
              <span className="sus-row-n">38%</span>
              <div>
                <span className="sus-row-k">Re-refined base oil</span>
                <span className="sus-row-v">on opt-in formulations · Group II+ stream</span>
              </div>
            </div>
            <div className="sus-row">
              <span className="sus-row-n">100%</span>
              <div>
                <span className="sus-row-k">rPET available</span>
                <span className="sus-row-v">quart and gallon bottles · on customer request</span>
              </div>
            </div>
            <div className="sus-row">
              <span className="sus-row-n">0</span>
              <div>
                <span className="sus-row-k">Landfill, used drum</span>
                <span className="sus-row-v">closed-loop reconditioning with regional vendor</span>
              </div>
            </div>
          </div>
        </div>
        <div className="sus-img">
          <img src={FAC + "raw-material-storage.jpg"} alt="Raw material storage" loading="lazy" />
          <span className="sus-img-tag">PL.SUS · <b>Group II+ feedstock</b></span>
          <div className="sus-img-readout">
            <span>Stream · re-refined</span>
            <span><b>● 38%</b> · 2026 YTD</span>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Quality, Industries, Sustainability });
