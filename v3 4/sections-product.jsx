/* U1DYNAMICS · v3 — Catalog rack (filterable), Spec sheet, Comparison table */

const BOTTLES_ALL = [
  {img:"u1p-5w30-synthetic.jpg",   n:"SAE 5W-30 Full Synthetic",     s:"API SP · ILSAC GF-6A",  cat:"Engine",     vol:"1 qt → 55 gal", base:"Group III"},
  {img:"u1p-0w20-synthetic.jpg",   n:"SAE 0W-20 Full Synthetic",     s:"API SP · ILSAC GF-6A",  cat:"Engine",     vol:"1 qt → 55 gal", base:"Group III + PAO"},
  {img:"u1p-15w40-hd.jpg",         n:"SAE 15W-40 HD Synthetic",      s:"API CK-4 / SN",         cat:"Heavy Duty", vol:"1 gal → IBC",   base:"Group II+"},
  {img:"u1p-dexron-vi.jpg",        n:"ATF Dexron-VI Full Synthetic", s:"Multi-vehicle ATF",     cat:"Trans",      vol:"1 qt → 55 gal", base:"Group III"},
  {img:"u1p-75w90-gear.jpg",       n:"SAE 75W-90 Synthetic Gear",    s:"API GL-4",              cat:"Gear",       vol:"1 qt → 55 gal", base:"Group IV (PAO)"},
  {img:"u1p-iso32-hydraulic.jpg",  n:"AW ISO 32 Hydraulic",          s:"5,000-hour service",    cat:"Hydraulic",  vol:"5 gal → IBC",   base:"Group II"},
  {img:"u1p-marine-10w30.jpg",     n:"SAE 10W-30 4T Marine",         s:"NMMA FC-W",             cat:"Specialty",  vol:"1 qt → 5 gal",  base:"Group III"},
  {img:"u1p-bike-10w40.jpg",       n:"SAE 10W-40 Synthetic 4T",      s:"API SN · JASO MA2",     cat:"Specialty",  vol:"1 qt → 5 gal",  base:"Group III + Ester"},
  {img:"u1p-vtwin-20w50.jpg",      n:"SAE 20W-50 V-Twin Synthetic",  s:"API SJ · V-Twin",       cat:"Specialty",  vol:"1 qt → 5 gal",  base:"Group III + PAO"},
];
const RACK_CATS = ["All", "Engine", "Heavy Duty", "Trans", "Gear", "Hydraulic", "Specialty"];

function Rack() {
  const [cat, setCat] = useState("All");
  const trackRef = useRef(null);
  const fillRef = useRef(null);
  const bottles = useMemo(() => cat === "All" ? BOTTLES_ALL : BOTTLES_ALL.filter(b => b.cat === cat), [cat]);

  useEffect(() => {
    const el = trackRef.current; if (!el) return;
    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      const pct = max > 0 ? el.scrollLeft / max : 0;
      if (fillRef.current) fillRef.current.style.transform = `scaleX(${pct})`;
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener('scroll', onScroll);
  }, [bottles.length]);

  return (
    <section className="rack prose" id="rack">
      <div className="container">
        <SecHead idx="05" idxOf="11" kicker="Catalog" title="The <em>Ultra1Plus</em><br/>rack." em="Ultra1Plus" aside="Our flagship line — sold in 32+ countries and through Amazon, AutoZone, Walmart, Tractor Supply, Northern Tool. Every SKU blended in Pasadena." />

        <div className="rack-filter reveal">
          <div className="rack-filter-bar">
            {RACK_CATS.map(c => (
              <button key={c} className={"rack-filter-btn" + (cat === c ? " is-on" : "")} onClick={() => setCat(c)}>
                {c}
                <span>{c === "All" ? BOTTLES_ALL.length : BOTTLES_ALL.filter(b => b.cat === c).length}</span>
              </button>
            ))}
          </div>
          <div className="rack-filter-meta">
            <span><b>{bottles.length}</b> showing</span>
            <span>of <b>1,000+</b> active SKUs</span>
          </div>
        </div>
      </div>
      <div className="rack-track-wrap">
        <div className="rack-track" ref={trackRef}>
          {bottles.map((b, i) => (
            <article className="rack-bottle" key={b.img}>
              <span className="rack-bottle-num">{String(i+1).padStart(2,'0')} / {bottles.length}</span>
              <div className="rack-bottle-img"><img src={U1P + b.img} alt={b.n} loading="lazy" /></div>
              <div className="rack-bottle-name">{b.n}</div>
              <div className="rack-bottle-spec">{b.s}</div>
              <div className="rack-bottle-meta">
                <span><b>BASE</b> {b.base}</span>
                <span><b>VOL</b> {b.vol}</span>
              </div>
            </article>
          ))}
        </div>
        <div className="rack-progress"><div className="rack-progress-fill" ref={fillRef} /></div>
        <div className="rack-hint">
          <span>← Drag · scroll →</span>
          <span>Filter active: <b>{cat}</b></span>
        </div>
      </div>
    </section>
  );
}

function SpecSheet() {
  return (
    <section className="spec-doc reveal" id="spec">
      <div className="container">
        <SecHead idx="06" idxOf="11" kicker="Spec sheet" title="Sample {em}<br/>data sheet." em="product" aside="Every SKU ships with a full COA. Below is a reference sheet — yours will carry your label, lot, and signoff." />

        <div className="spec-doc-frame">
          <div className="spec-doc-head">
            <div>
              <span className="spec-doc-label">PRODUCT DATA SHEET / U1P-DUTY-15W40</span>
              <h3>Ultra1Plus <em>Heavy-Duty</em> 15W-40 Synthetic Blend</h3>
              <span className="spec-doc-sub">Premium API CK-4 / SN performance · Pasadena Bay 03 · Lot pending</span>
            </div>
            <div className="spec-doc-stamp">
              <div><b>REV</b><span>2026.04.17</span></div>
              <div><b>DOC</b><span>U1-PDS-15W40</span></div>
              <div><b>QC</b><span>● APPROVED</span></div>
            </div>
          </div>

          <div className="spec-doc-grid">
            <div className="spec-doc-col">
              <h5>Approvals</h5>
              <ul>
                <li><span>API</span><b>CK-4 · CJ-4 · SN</b></li>
                <li><span>ACEA</span><b>E9 · E7</b></li>
                <li><span>Cummins</span><b>CES 20086</b></li>
                <li><span>Detroit Diesel</span><b>DFS 93K222</b></li>
                <li><span>Volvo</span><b>VDS-4.5</b></li>
                <li><span>Mack</span><b>EOS-4.5</b></li>
              </ul>
            </div>
            <div className="spec-doc-col">
              <h5>Physical</h5>
              <ul>
                <li><span>Visc · 40°C</span><b>116.0 cSt</b></li>
                <li><span>Visc · 100°C</span><b>15.4 cSt</b></li>
                <li><span>Visc index</span><b>140</b></li>
                <li><span>Flash · COC</span><b>228 °C</b></li>
                <li><span>Pour point</span><b>−39 °C</b></li>
                <li><span>Density · 15°C</span><b>0.872 g/mL</b></li>
              </ul>
            </div>
            <div className="spec-doc-col">
              <h5>Chemistry</h5>
              <ul>
                <li><span>TBN</span><b>11.2 mg KOH/g</b></li>
                <li><span>Sulfated ash</span><b>1.0 %wt</b></li>
                <li><span>Phosphorus</span><b>1,200 ppm</b></li>
                <li><span>Zinc</span><b>1,400 ppm</b></li>
                <li><span>Calcium</span><b>2,300 ppm</b></li>
                <li><span>Sulfur</span><b>0.40 %wt</b></li>
              </ul>
            </div>
            <div className="spec-doc-col">
              <h5>Packaging</h5>
              <ul>
                <li><span>Quart</span><b>12/case · 96/pallet</b></li>
                <li><span>Gallon</span><b>4/case · 48/pallet</b></li>
                <li><span>5 gal pail</span><b>36/pallet</b></li>
                <li><span>55 gal drum</span><b>4/pallet</b></li>
                <li><span>275 gal IBC</span><b>1/pallet</b></li>
                <li><span>Bulk</span><b>4,500–6,500 gal tanker</b></li>
              </ul>
            </div>
          </div>

          <div className="spec-doc-foot">
            <span>Test methods · ASTM D445 / D92 / D97 / D2896 / ICP-OES</span>
            <span><b>● APPROVED</b> · QA · A. Reyes</span>
            <span>Page 1 / 1</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Compare() {
  const rows = [
    { k:"Min order", u1:"1 pallet (48 cs)", typ:"30,000 units", note:"We treat the small program like the big one." },
    { k:"First production", u1:"4–8 weeks", typ:"12–18 weeks", note:"Owned floor, owned QC, no co-pack queue." },
    { k:"Spec library", u1:"1,000+ SKUs", typ:"200–400 SKUs", note:"Ready formulations across PCMO, HD, gear, hydraulic, specialty." },
    { k:"Batch traceability", u1:"Per-pallet COA", typ:"Per-batch COA", note:"Each pallet ties back to a retain sample." },
    { k:"Custom formulation", u1:"In-house chemist", typ:"Outsourced", note:"Bench → 5-gal trial → floor, all under one roof." },
    { k:"Export reach", u1:"38 markets · Port HOU", typ:"5–10 markets", note:"Eight miles from the dock." },
    { k:"DEF / coolant", u1:"ISO 22241 program", typ:"Outsourced or unavailable", note:"Bulk, tote, drum, jug, retail." },
  ];
  return (
    <section className="compare" id="compare">
      <div className="container">
        <SecHead idx="07" idxOf="11" kicker="vs. industry" title="What partners get at U1<br/>{em} elsewhere." em="vs." aside="Honest, side-by-side. Numbers from public RFPs, our own ops, and partner conversations." />
        <div className="compare-table reveal">
          <div className="compare-row compare-head">
            <span>Capability</span>
            <span><b>U1Dynamics</b></span>
            <span>Typical contract blender</span>
            <span>Note</span>
          </div>
          {rows.map(r => (
            <div className="compare-row" key={r.k}>
              <span className="compare-k">{r.k}</span>
              <span className="compare-u1"><b>{r.u1}</b></span>
              <span className="compare-typ">{r.typ}</span>
              <span className="compare-note">{r.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Rack, SpecSheet, Compare });
