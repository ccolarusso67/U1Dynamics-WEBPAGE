/* U1DYNAMICS — Editorial rebuild */
const { useState, useEffect, useRef } = React;

const DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "dark",
  "palette": "steel",
  "showTweaks": true
}/*EDITMODE-END*/;

const IMG = "public/images/facility/";

function Chrome() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={"chrome" + (scrolled ? " is-scrolled" : "")} role="banner">
      <a href="#top" className="wordmark" aria-label="U1Dynamics home">
        <span className="wordmark-mark" aria-hidden="true" />
        <span>U1DYNAMICS<span className="wm-slash">/</span><span className="wm-sub">MFG</span></span>
      </a>
      <nav className="chrome-nav" aria-label="Primary">
        <a href="#manifesto">About</a>
        <a href="#capabilities">Capabilities</a>
        <a href="#products">Products</a>
        <a href="#facility">Facility</a>
        <a href="#industries">Industries</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="chrome-cta">
        <a className="chrome-phone" href="tel:+18886878521">+1 888 687 8521</a>
        <a className="chrome-btn" href="#contact">
          Start a program <span className="btn-arrow" aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  // Live-feel pseudo readouts (purely decorative — refresh on interval)
  const [tick, setTick] = React.useState(0);
  const [tourOpen, setTourOpen] = React.useState(false);
  React.useEffect(() => {
    function onKey(e){ if(e.key === "Escape") setTourOpen(false); }
    if(tourOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [tourOpen]);
  React.useEffect(() => {
    const i = setInterval(() => setTick(t => t + 1), 1800);
    return () => clearInterval(i);
  }, []);
  const fill = 58 + ((tick * 3) % 14); // oscillating 58-72
  const rpm = 1180 + ((tick * 17) % 80);
  const visc = (47.2 + ((tick % 7) * 0.15)).toFixed(1);
  const temp = 72 + ((tick % 5));

  return (
    <section className="hero" id="top" aria-labelledby="hero-h">
      {/* Background image — clipped right slab only */}
      <div className="hero-slab" aria-hidden="true">
        <video className="hero-video" autoPlay muted loop playsInline poster={IMG + "drums-usa-workers.jpg"}>
          <source src="public/videos/facility-hero.mp4" type="video/mp4" />
          <source src="public/videos/facility-hero.webm" type="video/webm" />
        </video>
        <img src={IMG + "drums-usa-workers.jpg"} alt="" className="hero-video-fallback" />
        <div className="hero-slab-grid" />
      </div>

      {/* Massive outline display word behind everything */}
      <div className="hero-mega" aria-hidden="true">
        <span>FLUID</span>
        <span className="hero-mega-fill">FLUID</span>
      </div>

      {/* Corner brackets — industrial frame */}
      <span className="hero-bracket tl" aria-hidden="true" />
      <span className="hero-bracket tr" aria-hidden="true" />
      <span className="hero-bracket bl" aria-hidden="true" />
      <span className="hero-bracket br" aria-hidden="true" />

      {/* Top meta strip */}
      <div className="hero-meta-top" aria-hidden="true">
        <span className="live"><span className="live-dot" /> PLANT LIVE · BATCH #U1-2486</span>
        <span className="hmt-divider">/</span>
        <span>{temp}°F · RH 41 · SHIFT 2</span>
        <span className="hmt-divider">/</span>
        <span>29.63°N · 95.16°W</span>
      </div>

      {/* Main content grid */}
      <div className="hero-inner">
        <div className="hero-head">
          <span className="hero-idx">§ 00 / INDEX</span>
          <p className="hero-eyebrow">
            LUBRICANT BLENDING <span className="he-sep">·</span> CONTRACT MFG <span className="he-sep">·</span> EST. 2022
          </p>
          <h1 id="hero-h" className="hero-headline">
            <span className="hh-line"><span className="hh-num">01</span> Built for</span>
            <span className="hh-line">the machines</span>
            <span className="hh-line hh-accent-line">
              <span className="he-accent">that don&rsquo;t stop.</span>
            </span>
          </h1>
        </div>

        {/* Control-panel column */}
        <aside className="hero-panel" aria-hidden="true">
          <div className="hp-head">
            <span className="hp-label">BLEND CONTROL</span>
            <span className="hp-id">PNL-02 / TX</span>
          </div>

          <div className="hp-gauge">
            <div className="hp-gauge-lbl">
              <span>BATCH FILL</span>
              <span className="hp-gauge-val">{fill}%</span>
            </div>
            <div className="hp-bar">
              <div className="hp-bar-fill" style={{width: fill + "%"}} />
              <div className="hp-bar-target" style={{left: "72%"}} />
            </div>
            <div className="hp-gauge-foot">TGT 72% · EST 04:18</div>
          </div>

          <div className="hp-rows">
            <div className="hp-row"><span>VISC</span><b>{visc}</b><i>cSt @ 100°C</i></div>
            <div className="hp-row"><span>AGIT</span><b>{rpm}</b><i>RPM</i></div>
            <div className="hp-row"><span>LINE</span><b>03/04</b><i>ACTIVE</i></div>
            <div className="hp-row"><span>QA</span><b className="hp-ok">PASS</b><i>04:12</i></div>
          </div>

          <div className="hp-foot">
            <span className="hp-dot" /> STREAM · {String(tick).padStart(3,"0")}
          </div>
        </aside>

        <div className="hero-sub">
          <p>
            A 95,000&nbsp;sq&nbsp;ft lubricant blending and contract filling platform in Pasadena, Texas &mdash; producing Ultra1Plus and partner brands across 38+ export markets. Engine oils, DEF, coolants, and specialty fluids, under your spec.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#capabilities">
              <span>View capabilities</span>
              <span className="btn-arrow" aria-hidden>→</span>
            </a>
            <a className="btn btn-ghost" href="#contact">Request a quote</a>
            <button type="button" className="btn btn-tour" onClick={() => setTourOpen(true)} aria-label="Play facility tour video">
              <span className="btn-tour-play" aria-hidden>⏵</span>
              <span>Facility tour</span>
              <span className="btn-tour-dur">1:42</span>
            </button>
          </div>
        </div>
      </div>

      {/* Vertical side ticker */}
      <div className="hero-side" aria-hidden="true">
        <span>PASADENA · TX</span>
        <span className="hs-dot">✺</span>
        <span>BATCH #U1-2486</span>
        <span className="hs-dot">✺</span>
        <span>SHIFT 2 · LINE 03</span>
        <span className="hs-dot">✺</span>
        <span>VISC {visc} cSt</span>
      </div>

      {/* Bottom stat row */}
      <div className="hero-corner" aria-hidden="true">
        <div className="hc-block">
          <span className="hc-lbl">MFG · PLANT</span>
          <span className="hc-val">Pasadena · TX</span>
        </div>
        <div className="hc-block">
          <span className="hc-lbl">HQ</span>
          <span className="hc-val">Coral Gables · FL</span>
        </div>
        <div className="hc-block">
          <span className="hc-lbl">CAP</span>
          <span className="hc-val">8,000 gal/batch</span>
        </div>
        <div className="hc-block">
          <span className="hc-lbl">MKTS</span>
          <span className="hc-val">38+ countries</span>
        </div>
      </div>

      {/* Facility tour modal */}
      {tourOpen && (
        <div className="tour-modal" role="dialog" aria-modal="true" aria-labelledby="tour-title" onClick={(e) => { if(e.target === e.currentTarget) setTourOpen(false); }}>
          <div className="tour-modal-inner">
            <header className="tour-modal-head">
              <div>
                <span className="tour-modal-kicker">FACILITY · TOUR</span>
                <h3 id="tour-title">Inside Pasadena, Texas</h3>
              </div>
              <button type="button" className="tour-close" onClick={() => setTourOpen(false)} aria-label="Close">✕</button>
            </header>
            <div className="tour-modal-video">
              <video controls autoPlay playsInline poster={IMG + "aerial.jpg"}>
                <source src="public/videos/facility-tour.mp4" type="video/mp4" />
                <source src="public/videos/facility-tour.webm" type="video/webm" />
              </video>
              <div className="tour-modal-fallback">
                <img src={IMG + "aerial.jpg"} alt="Aerial view of U1Dynamics Pasadena, Texas facility" />
                <div className="tour-modal-fallback-txt">
                  <span className="tour-modal-kicker">PREVIEW UNAVAILABLE</span>
                  <p>Facility tour video not yet uploaded. Contact us for a virtual walkthrough or to schedule an on-site visit.</p>
                  <a className="btn btn-primary" href="#contact" onClick={() => setTourOpen(false)}>
                    <span>Request a tour</span>
                    <span className="btn-arrow" aria-hidden>→</span>
                  </a>
                </div>
              </div>
            </div>
            <footer className="tour-modal-foot">
              <span>95,000 SQ FT · 4 FILL LINES · 38 EXPORT MKTS</span>
              <span>ESC TO CLOSE</span>
            </footer>
          </div>
        </div>
      )}
    </section>
  );
}

function Ticker() {
  const items = [
    ["95,000", "SQ FT BLENDING FLOOR"],
    ["1,000+", "ACTIVE SKUS"],
    ["38", "EXPORT MARKETS"],
    ["ISO 22241", "DEF COMPLIANT"],
    ["ULTRA1PLUS", "FLAGSHIP BRAND"],
    ["MADE IN USA", "PASADENA · TX"],
    ["8,000 GAL", "MAX BATCH SIZE"],
    ["4–8 WK", "TYPICAL FIRST PROD"],
  ];
  const row = [...items, ...items];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {row.map((it, i) => (
          <span className="ticker-item" key={i}><b>{it[0]}</b>{it[1]}</span>
        ))}
      </div>
    </div>
  );
}

function Manifesto() {
  return (
    <section className="manifesto" id="manifesto" aria-labelledby="man-h">
      <div className="manifesto-grid">
        <div className="manifesto-image">
          <img src={IMG + "oil-pouring.jpg"} alt="Lubricant blending at U1Dynamics — golden oil into stainless drum, Pasadena TX" loading="lazy" />
          <div className="manifesto-caption">
            <span className="mc-num">FIG.01</span>
            <span className="mc-txt">Blending floor · batch transfer · shift 2</span>
          </div>
        </div>
        <div className="manifesto-text">
          <p className="m-eyebrow"><span className="eb-bar"/> OPERATING PRINCIPLE</p>
          <blockquote id="man-h">
            Behind every trusted fluid brand, there&rsquo;s a place where <em>performance is built</em> &mdash; batch by batch, drum by drum, ship by ship.
          </blockquote>
          <div className="m-stats">
            <div><b>95,000</b><span>sq ft floor</span></div>
            <div><b>8,000</b><span>gal / batch</span></div>
            <div><b>38+</b><span>export markets</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  const caps = [
    {
      n: "CAP/01",
      t: "Contract Manufacturing",
      d: "Formulation blending, production scale-up, quality control, packaging, filling, and logistics coordination under your spec.",
      items: ["Blending 500–8,000 gal", "QC chemistry in-house", "Pallet-to-container"],
      icon: (
        <svg viewBox="0 0 48 48" className="cap-cell-icon"><path d="M8 14h32M8 24h32M8 34h32M14 8v32M24 8v32M34 8v32"/></svg>
      )
    },
    {
      n: "CAP/02",
      t: "Private Label Lubricants",
      d: "Engine oils, gear oils, transmission fluids, hydraulic oils, and specialty lubricants — under your brand, your label, your spec.",
      items: ["Full SKU library", "Custom label art", "MOQ 1 pallet"],
      icon: (
        <svg viewBox="0 0 48 48" className="cap-cell-icon"><rect x="14" y="8" width="20" height="32" rx="2"/><path d="M18 16h12M18 22h12M18 28h8"/></svg>
      )
    },
    {
      n: "CAP/03",
      t: "DEF Manufacturing",
      d: "ISO 22241 compliant Diesel Exhaust Fluid in bulk, tote, drum, 2.5 gal jug, and retail formats.",
      items: ["API certified", "Bulk / tote / drum", "Direct-to-retail"],
      icon: (
        <svg viewBox="0 0 48 48" className="cap-cell-icon"><path d="M24 6l10 14a10 10 0 11-20 0L24 6z"/><path d="M24 28v8"/></svg>
      )
    },
    {
      n: "CAP/04",
      t: "Coolant & Antifreeze",
      d: "Extended life coolants, heavy-duty antifreeze, universal coolant technologies, and specialty thermal fluids.",
      items: ["ELC / HD / UCT", "Color-coded", "OEM approvals"],
      icon: (
        <svg viewBox="0 0 48 48" className="cap-cell-icon"><path d="M24 6v36M10 14l28 20M10 34l28-20"/><circle cx="24" cy="24" r="4"/></svg>
      )
    },
  ];
  return (
    <section className="prose" id="capabilities" aria-labelledby="cap-h">
      <div className="container">
        <header className="sec-head">
          <div className="sec-idx">§ 01 / 06<br/>CAPABILITIES</div>
          <h2 id="cap-h">What we <em>manufacture</em>.</h2>
          <aside className="sec-head-aside">
            Four core programs, one platform. Blending, filling, labeling, and logistics run under a single quality system — so your product ships with the same fingerprint every time.
          </aside>
        </header>
      </div>
      <div className="cap-matrix">
        {caps.map(c => (
          <article className="cap-cell" key={c.n}>
            <div className="cap-cell-head">
              <span className="cap-cell-num">{c.n}</span>
              {c.icon}
            </div>
            <div>
              <h3>{c.t}</h3>
              <p>{c.d}</p>
              <ul className="cap-cell-list">
                {c.items.map(i => <li key={i}>{i}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SpecSheet() {
  const specs = [
    { v: "95", sup: "K", unit: "sq ft", lbl: "Plant footprint" },
    { v: "8,000", unit: "gal", lbl: "Max batch size" },
    { v: "1,000", sup: "+", lbl: "Active SKUs" },
    { v: "38", sup: "+", lbl: "Export markets" },
    { v: "4–8", unit: "wk", lbl: "First production" },
    { v: "6", lbl: "Packaging formats" },
    { v: "ISO", sup: "22241", lbl: "DEF compliant" },
    { v: "24", unit: "/5", lbl: "Production hours" },
  ];
  return (
    <section className="spec-sheet" aria-label="Plant spec sheet">
      <div className="spec-head">
        <span><b>PLANT — PASADENA, TX</b> · SPEC SHEET</span>
        <span style={{textAlign:"center"}}>DOC U1-MFG-0012 / REV.07</span>
        <span>UPDATED 2026.04</span>
      </div>
      <div className="spec-rows">
        {specs.map((s, i) => (
          <div className="spec-row" key={i}>
            <span className="spec-row-num">{String(i+1).padStart(2,"0")} / 08</span>
            <div className="spec-row-value">
              {s.v}{s.sup && <sup>{s.sup}</sup>}{s.unit && <span className="unit">{s.unit}</span>}
            </div>
            <div className="spec-row-label">{s.lbl}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "STEP/01", h: "Scope", p: "Intake call, formula review, target spec, volume, packaging and label art.", t: "DAY 1–3", icon: "M8 8h24v24H8z M14 14h12M14 20h12M14 26h8" },
    { n: "STEP/02", h: "Formulate", p: "Match existing product or develop new formulation in-house. QC chemistry in parallel.", t: "WK 1–3", icon: "M12 6v12l-6 12h28l-6-12V6M14 6h12" },
    { n: "STEP/03", h: "Blend", p: "Batch scheduled on production floor. Live QC at fill, pH, viscosity, and density checks.", t: "BATCH", icon: "M24 6a18 18 0 1 0 0 36 18 18 0 0 0 0-36z M24 12v12l8 8" },
    { n: "STEP/04", h: "Fill", p: "Multi-line fill: quart, gallon, 5-gal pail, 55-gal drum, 275-gal tote. Automated labeling.", t: "24HR CYCLE", icon: "M12 14h24v26H12z M18 14v-6h12v6 M18 22h12M18 30h8" },
    { n: "STEP/05", h: "Label", p: "Custom label art applied on-line. Lot codes, UPC, and country-of-origin compliant.", t: "INLINE", icon: "M10 14h28v20H10z M10 22h28 M16 30l4-4 4 4" },
    { n: "STEP/06", h: "Ship", p: "Consolidated at dock, palletized, loaded. Direct to port or distribution hub.", t: "SAME WK", icon: "M6 30V14h20v16M26 20h10l4 6v4H6 M12 34a4 4 0 1 0 0 8 4 4 0 0 0 0-8z M32 34a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" },
  ];
  return (
    <section className="prose" aria-labelledby="proc-h">
      <div className="container">
        <header className="sec-head">
          <div className="sec-idx">§ 02 / 06<br/>PROCESS</div>
          <h2 id="proc-h">From scope to <em>shipment</em>.</h2>
          <aside className="sec-head-aside">
            Every partnership moves through the same six-step cadence. Most programs ship first production in four to eight weeks.
          </aside>
        </header>
      </div>
      <div className="process">
        {steps.map(s => (
          <article className="proc-step" key={s.n} data-time={s.t}>
            <span className="proc-step-num">{s.n}</span>
            <svg viewBox="0 0 48 48" className="proc-step-icon" fill="none" stroke="currentColor" strokeWidth="1.4"><path d={s.icon} /></svg>
            <h4>{s.h}</h4>
            <p>{s.p}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Products() {
  const hero = { tag: "FLAGSHIP · ULTRA1PLUS", t: "Engine Oils", d: "Conventional, synthetic blend, and full synthetic formulations for passenger, heavy-duty, and performance applications. Our flagship category — what put U1Dynamics on the map.", img: "drums-closeup.jpg", specs: ["API SN/SP", "ILSAC GF-6", "0W-20 → 20W-50"] };
  const prods = [
    { n: "02", tag: "CORE", t: "DEF", d: "ISO 22241 compliant Diesel Exhaust Fluid. Bulk to retail.", img: "ibc-tank.jpg", hue: "210" },
    { n: "03", tag: "CORE", t: "Transmission Fluids", d: "ATF and manual fluids for modern drivetrains.", img: "filling-bottles.jpg", hue: "15" },
    { n: "04", tag: "CORE", t: "Hydraulic Oils", d: "Industrial & mobile hydraulic system fluids.", img: "blending-vortex.jpg", hue: "40" },
    { n: "05", tag: "CORE", t: "Gear Lubricants", d: "Industrial and automotive gear oils.", img: "pails-gear-oil.jpg", hue: "25" },
    { n: "06", tag: "SPECIALTY", t: "Greases", d: "Multi-purpose & specialty greases.", img: "oil-pouring.jpg", hue: "50" },
    { n: "07", tag: "THERMAL", t: "Antifreeze & Coolants", d: "Extended-life, heavy-duty, universal — OEM-approved.", img: "raw-material-storage.jpg", hue: "190" },
    { n: "08", tag: "INDUSTRIAL", t: "Industrial Fluids", d: "Cleaners, degreasers, custom formulations.", img: "lab-testing.jpg", hue: "0" },
  ];
  const pkg = [
    ["FMT/01", "Quart bottles", "32 oz · case of 12"],
    ["FMT/02", "Gallon bottles", "1 gal · case of 4"],
    ["FMT/03", "5-gallon pails", "Single trip · steel or HDPE"],
    ["FMT/04", "55-gallon drums", "Closed-head or open-top"],
    ["FMT/05", "275-gallon totes", "IBC · reusable"],
    ["FMT/06", "Bulk tanker", "On-site load-out"],
  ];
  return (
    <section className="prose" id="products" aria-labelledby="prod-h">
      <div className="container">
        <header className="sec-head">
          <div className="sec-idx">§ 03 / 06<br/>PORTFOLIO</div>
          <h2 id="prod-h">Full-spectrum <em>fluids</em>.</h2>
          <aside className="sec-head-aside">
            Every category below is blended and filled in Pasadena. Private-label or contract — your brand, our batch tickets.
          </aside>
        </header>

        {/* Hero product: image + copy side by side */}
        <article className="prod-hero-card">
          <div className="prod-hero-img">
            <img src={IMG + hero.img} alt={hero.t} loading="lazy" />
            <span className="prod-hero-badge">01 / FLAGSHIP</span>
          </div>
          <div className="prod-hero-body">
            <span className="prod-tag">{hero.tag}</span>
            <h3>{hero.t}</h3>
            <p>{hero.d}</p>
            <div className="prod-specs">
              {hero.specs.map(s => <span key={s}>{s}</span>)}
            </div>
          </div>
        </article>

        {/* Rest: photo-led product cards */}
        <ul className="prod-grid" role="list">
          {prods.map(p => (
            <li key={p.n} className="prod-item">
              <figure className="prod-item-img" style={{"--prod-hue": p.hue}}>
                <img src={IMG + p.img} alt="" loading="lazy" />
                <span className="prod-item-badge">{p.n}</span>
              </figure>
              <div className="prod-item-body">
                <span className="prod-item-tag">{p.tag}</span>
                <h4>{p.t}</h4>
                <p>{p.d}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="pkg-spread">
          <div>
            <p className="tag tag-volt">§ PACKAGING FORMATS</p>
            <h3 className="pkg-head">
              Six ways<br/>to <span className="pkg-accent">ship</span>.
            </h3>
            <ul className="pkg-list">
              {pkg.map(p => (
                <li key={p[0]}><b>{p[0]}</b><span>{p[1]}</span><i>{p[2]}</i></li>
              ))}
            </ul>
          </div>
          <div className="pkg-image">
            <img src={IMG + "filling-nozzles.jpg"} alt="Multiple filling nozzles for lubricant packaging" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Flagship() {
  const U1P = "public/images/ultra1plus/";
  const bottles = [
    { img: "u1p-5w30-synthetic.jpg",   name: "SAE 5W-30 Full Synthetic",          spec: "API SP · ILSAC GF-6A",   cat: "DRIVE" },
    { img: "u1p-0w20-synthetic.jpg",   name: "SAE 0W-20 Full Synthetic",          spec: "API SP · ILSAC GF-6A",   cat: "DRIVE" },
    { img: "u1p-15w40-hd.jpg",         name: "SAE 15W-40 Heavy-Duty Synthetic",   spec: "API CK-4 / SN",          cat: "DUTY"  },
    { img: "u1p-dexron-vi.jpg",        name: "ATF Dexron®-VI Full Synthetic",     spec: "Multi-vehicle",          cat: "DRIVE" },
    { img: "u1p-75w90-gear.jpg",       name: "SAE 75W-90 Synthetic Gear Oil",     spec: "API GL-4",               cat: "GEAR"  },
    { img: "u1p-iso32-hydraulic.jpg",  name: "AW ISO 32 Hydraulic Oil",           spec: "5,000-hour service",     cat: "DUTY"  },
    { img: "u1p-marine-10w30.jpg",     name: "SAE 10W-30 4T Marine Blend",        spec: "NMMA FC-W",              cat: "AQUA"  },
    { img: "u1p-bike-10w40.jpg",       name: "SAE 10W-40 Full Synthetic 4T",      spec: "API SN · JASO MA2",      cat: "RIDE"  },
    { img: "u1p-vtwin-20w50.jpg",      name: "SAE 20W-50 V-Twin Full Synthetic",  spec: "API SJ · V-Twin",        cat: "RIDE"  },
  ];
  return (
    <section className="prose flagship" id="flagship" aria-labelledby="flag-h">
      <div className="container">
        <header className="sec-head">
          <div className="sec-idx">§ 03.5<br/>FLAGSHIP</div>
          <h2 id="flag-h">The <em>Ultra1Plus</em> line.</h2>
          <aside className="sec-head-aside">
            Our flagship brand — sold in 32+ countries and through Amazon, AutoZone, Walmart, Tractor Supply, and Northern Tool. Every SKU blended and filled in Pasadena, TX.
          </aside>
        </header>

        <div className="flag-shelf">
          {bottles.map((b, i) => (
            <figure className="flag-bottle" key={b.img}>
              <div className="flag-bottle-img">
                <img src={U1P + b.img} alt={"Ultra1Plus " + b.name} loading="lazy" />
              </div>
              <figcaption>
                <span className="flag-cat">{b.cat}</span>
                <span className="flag-name">{b.name}</span>
                <span className="flag-spec">{b.spec}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="flag-retail">
          <span className="flag-retail-lbl">AVAILABLE THROUGH</span>
          <div className="flag-retail-logos">
            <span>AMAZON</span>
            <span>AUTOZONE</span>
            <span>WALMART</span>
            <span>TRACTOR SUPPLY</span>
            <span>NORTHERN TOOL</span>
            <span>EBAY</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FLUID — immersive editorial split with kinetic type
   ========================================================= */
function Fluid() {
  const [hot, setHot] = React.useState(false);
  React.useEffect(() => {
    const id = setInterval(() => setHot(h => !h), 2600);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="fluid" aria-labelledby="fluid-h">
      {/* Top spec bar */}
      <div className="fluid-bar" aria-hidden="true">
        <span>ISO 22241 · COMPLIANT</span>
        <span className="fd-dot">✺</span>
        <span>API CK-4 · SN</span>
        <span className="fd-dot">✺</span>
        <span>FLASH POINT · 228°C</span>
        <span className="fd-dot">✺</span>
        <span>POUR · −42°C</span>
        <span className="fd-dot">✺</span>
        <span>VISC · 47.2 cSt @ 40°C</span>
        <span className="fd-dot">✺</span>
        <span>BATCH · U1-2486-K</span>
      </div>

      <div className="fluid-stage">
        {/* Giant type plate */}
        <div className="fluid-type">
          <div className="fluid-eyebrow">
            <span className="fluid-eyebrow-bar" />
            <span>§ 03.75 · THE FLUID</span>
          </div>
          <h2 id="fluid-h" className="fluid-head">
            <span className="fh-line">ENGINEERED</span>
            <span className="fh-line fh-line-2">
              FOR <em>FRICTION</em>
              <span className="fh-strike" aria-hidden />
            </span>
            <span className="fh-line fh-line-3">WHERE OIL</span>
            <span className="fh-line fh-line-4">MEETS STEEL.</span>
          </h2>
          <p className="fluid-lede">
            Every base oil and additive package we blend is built to do one thing: survive the exact moment friction turns into failure. Shear stability under 10,000-hour duty cycles. Oxidation resistance at 120°C. Demulsibility that actually sheds water.
          </p>

          {/* Live meter */}
          <div className={"fluid-meter" + (hot ? " is-hot" : "")}>
            <div className="fm-scale">
              {Array.from({length: 32}).map((_, i) => (
                <span key={i} className={"fm-tick" + (i < 22 ? " on" : "")} />
              ))}
            </div>
            <div className="fm-legend">
              <span><b>TEMP</b> 82°C</span>
              <span><b>ΔP</b> 0.12 bar</span>
              <span><b>FLOW</b> <em>NOM</em></span>
              <span className="fm-alert">● LIVE</span>
            </div>
          </div>

          {/* Stat stack */}
          <div className="fluid-stats">
            <div className="fs-cell">
              <span className="fs-n">47.2</span>
              <span className="fs-sup">cSt</span>
              <span className="fs-lbl">Kinematic viscosity · 40°C</span>
            </div>
            <div className="fs-cell">
              <span className="fs-n">228</span>
              <span className="fs-sup">°C</span>
              <span className="fs-lbl">Flash point · COC</span>
            </div>
            <div className="fs-cell">
              <span className="fs-n">11.2</span>
              <span className="fs-sup">TBN</span>
              <span className="fs-lbl">Reserve alkalinity</span>
            </div>
          </div>
        </div>

        {/* Specimen window — the gears shot */}
        <div className="fluid-specimen">
          <div className="fs-frame">
            <div className="fs-crosshair fs-ch-tl" aria-hidden />
            <div className="fs-crosshair fs-ch-tr" aria-hidden />
            <div className="fs-crosshair fs-ch-bl" aria-hidden />
            <div className="fs-crosshair fs-ch-br" aria-hidden />

            <img src="public/images/ultra1plus/u1p-distributor.jpg" alt="High-viscosity lubricant cascading over precision gears and bearings" />

            {/* Amber annotations */}
            <div className="fs-anno fs-anno-a">
              <span className="fsa-dot" />
              <span className="fsa-line" />
              <span className="fsa-lbl">ZDDP + moly · anti-wear pack</span>
            </div>
            <div className="fs-anno fs-anno-b">
              <span className="fsa-dot" />
              <span className="fsa-line" />
              <span className="fsa-lbl">Calcium sulfonate detergent</span>
            </div>
            <div className="fs-anno fs-anno-c">
              <span className="fsa-dot" />
              <span className="fsa-line" />
              <span className="fsa-lbl">Group III / PAO base</span>
            </div>

            {/* Readout strip bottom */}
            <div className="fs-readout">
              <span>SPECIMEN / U1P-DUTY-15W40</span>
              <span className="fs-r-volt">● LIVE</span>
              <span>MAG · 2.4×</span>
            </div>
          </div>

          {/* Side caption */}
          <div className="fs-caption">
            <span className="fs-cap-n">FIG. 03.75</span>
            <span className="fs-cap-rule" />
            <span className="fs-cap-txt">Specimen captured at shear interface. Lubricant film maintains 2.1 μm minimum thickness across the load zone.</span>
          </div>
        </div>
      </div>

      {/* Bottom kinetic band */}
      <div className="fluid-band" aria-hidden="true">
        <div className="fb-track">
          {Array.from({length: 6}).map((_, i) => (
            <React.Fragment key={i}>
              <span>PRESSURE</span>
              <span className="fb-glyph">✕</span>
              <span>TEMPERATURE</span>
              <span className="fb-glyph">✕</span>
              <span className="fb-volt">SHEAR</span>
              <span className="fb-glyph">✕</span>
              <span>OXIDATION</span>
              <span className="fb-glyph">✕</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function Facility() {
  return (
    <section className="prose" id="facility" aria-labelledby="fac-h">
      <div className="container">
        <header className="sec-head">
          <div className="sec-idx">§ 04 / 06<br/>FACILITY</div>
          <h2 id="fac-h">95,000 sq ft of <em>precision</em>.</h2>
          <aside className="sec-head-aside">
            Flexible production lines, scalable throughput, zero shortcuts. Pasadena, Texas.
          </aside>
        </header>

        {/* HERO photo: one strong image, letter-box wide */}
        <figure className="fac-hero">
          <img src={IMG + "aerial-hero.jpg"} alt="Aerial view of U1Dynamics 95,000 sq ft lubricant blending and contract filling facility, Pasadena TX" loading="lazy" />
          <div className="fac-hero-readout" aria-hidden="true">
            <div className="fr-block">
              <span className="fr-lbl">SITE · PLAN</span>
              <span className="fr-val">FIG.04 / AERIAL</span>
              <span className="fr-lbl" style={{marginTop:4}}>BEARING</span>
              <span className="fr-val">N 12°W</span>
            </div>
            <div className="fr-block" style={{alignItems:"center"}}>
              <span className="fr-lbl">TARGET</span>
              <div className="fr-cross">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden>
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="0" x2="12" y2="24" />
                  <line x1="0" y1="12" x2="24" y2="12" />
                </svg>
              </div>
              <span className="fr-val fr-volt">95,000 SQ FT</span>
            </div>
            <div className="fr-block" style={{alignItems:"flex-end", textAlign:"right"}}>
              <span className="fr-lbl">LAT / LONG</span>
              <span className="fr-val">29.63°N</span>
              <span className="fr-val">95.16°W</span>
              <span className="fr-lbl" style={{marginTop:4}}>ALT · FT</span>
              <span className="fr-val">+39</span>
            </div>
          </div>
          <figcaption>
            <span>FIG.04 — PASADENA, TX · 29.63°N / 95.16°W</span>
            <span>95,000 SQ FT · EST. 2022</span>
          </figcaption>
        </figure>

        {/* 3 supporting tiles, equal weight */}
        <div className="fac-trio">
          <figure>
            <img src={IMG + "blending-vortex.jpg"} alt="Lubricant blending vortex in stainless tank at U1Dynamics" loading="lazy" />
            <figcaption>FIG.05 · BLENDING</figcaption>
          </figure>
          <figure>
            <img src={IMG + "bottling-line-worker.jpg"} alt="Operator on bottling line at U1Dynamics" loading="lazy" />
            <figcaption>FIG.06 · BOTTLING</figcaption>
          </figure>
          <figure>
            <img src={IMG + "branded-truck.jpg"} alt="Branded outbound truck leaving U1Dynamics" loading="lazy" />
            <figcaption>FIG.07 · OUTBOUND</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function Industries() {
  const rows = [
    { n: "01", name: "Automotive", d: "Engine oils, transmission fluids, coolants, and maintenance products for modern passenger and performance vehicles.", tags: ["PC", "LT", "HD"], img: "filling-bottles.jpg", hue: "20" },
    { n: "02", name: "Heavy Duty & Transport", d: "Performance fluids for trucking, logistics fleets, and commercial vehicles — over-the-road to last-mile.", tags: ["FLEET", "OTR", "LTL"], img: "branded-truck.jpg", hue: "0" },
    { n: "03", name: "Industrial Equipment", d: "Hydraulic oils and industrial lubricants for demanding mechanical environments — plant and production floor.", tags: ["HYD", "GEAR", "COMP"], img: "forklift-warehouse.jpg", hue: "40" },
    { n: "04", name: "Agriculture & Construction", d: "Durable fluids for heavy equipment, off-highway machinery, and ag operations in punishing conditions.", tags: ["OFF-HWY", "AG", "UTV"], img: "drums-closeup.jpg", hue: "55" },
    { n: "05", name: "Marine", d: "Specialty lubricants and fluids engineered for the corrosive, load-bearing reality of marine operations.", tags: ["2-CYCLE", "STERN", "BILGE"], img: "ibc-tank.jpg", hue: "200" },
  ];
  return (
    <section className="prose" id="industries" aria-labelledby="ind-h">
      <div className="container">
        <header className="sec-head">
          <div className="sec-idx">§ 05 / 06<br/>INDUSTRIES</div>
          <h2 id="ind-h">Partners across <em>every sector</em>.</h2>
          <aside className="sec-head-aside">
            From fleet-wide contracts to specialty off-highway programs, we build fluid strategies for the businesses that keep things moving.
          </aside>
        </header>
        <ul className="ind-list">
          {rows.map(r => (
            <li key={r.n}>
              <a href="#contact" className="ind-line" style={{"--ind-hue": r.hue}}>
                <span className="ind-line-n">{r.n}</span>
                <span className="ind-line-name">{r.name}</span>
                <span className="ind-line-rule" aria-hidden />
                <span className="ind-line-tags">{r.tags.join(" · ")}</span>
                <span className="ind-line-arrow" aria-hidden>→</span>
                <figure className="ind-line-thumb" aria-hidden>
                  <img src={IMG + r.img} alt="" loading="lazy" />
                </figure>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function USA() {
  return (
    <section className="prose" aria-labelledby="usa-h" style={{padding:0}}>
      <div className="container" style={{padding:"clamp(60px,8vw,120px) var(--gutter) 0"}}>
        <header className="sec-head">
          <div className="sec-idx">§ 06 / 06<br/>ORIGIN</div>
          <h2 id="usa-h">Made in the <em>United States</em>.</h2>
          <aside className="sec-head-aside">
            U.S.-based blending means tighter quality, shorter supply chains, and predictable logistics for every partner we serve.
          </aside>
        </header>
      </div>
      <div className="usa">
        <div className="usa-img">
          <img src={IMG + "drums-usa-flag.jpg"} alt="U1Dynamics drums with American flag" loading="lazy" />
        </div>
        <div className="usa-text">
          <div className="stars" aria-hidden="true">
            <span /><span /><span /><span /><span />
          </div>
          <h3>A <em>domestic platform</em> built for partners who can't afford to wait.</h3>
          <p>We proudly operate as a U.S.-based lubricant manufacturer, supporting both domestic and international partners who value quality, reliability, and strong supply chains.</p>
          <div className="usa-props">
            <div className="usa-prop">
              <h5>Reliability</h5>
              <p>Consistent manufacturing processes for long-term partnerships.</p>
            </div>
            <div className="usa-prop">
              <h5>Flexibility</h5>
              <p>Production capabilities that adapt as your brand grows.</p>
            </div>
            <div className="usa-prop">
              <h5>Speed to market</h5>
              <p>Efficient production systems — weeks, not quarters.</p>
            </div>
            <div className="usa-prop">
              <h5>Expertise</h5>
              <p>Decades of lubricant blending and fluid technology experience.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  function submit(e) {
    e.preventDefault();
    const d = new FormData(e.target);
    const subject = encodeURIComponent(`Website Inquiry from ${d.get("name")} · ${d.get("company") || "N/A"}`);
    const body = encodeURIComponent(
      `Name: ${d.get("name")}\nEmail: ${d.get("email")}\nPhone: ${d.get("phone")}\nCompany: ${d.get("company")}\nService: ${d.get("service")}\n\nMessage:\n${d.get("message")}`
    );
    if (window.gtag) window.gtag('event', 'generate_lead', { form_name: 'contact', value: 1 });
    window.location.href = `mailto:info@u1dynamics.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }
  return (
    <section className="contact" id="contact" aria-labelledby="c-h">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-left">
            <p className="tag tag-volt">§ 07 · CONTACT</p>
            <h2 id="c-h" style={{marginTop:20}}>Let's <em>build</em> something together.</h2>
            <p>
              Whether you need a reliable contract blender, a private label partner, or a specialty formulation developed from scratch — our team is ready to scope the program.
            </p>
            <div className="contact-cards">
              <div className="contact-card">
                <h4>Manufacturing Plant</h4>
                <p>4468 Genoa Red Bluff Rd<br/>Pasadena, TX 77505</p>
              </div>
              <div className="contact-card">
                <h4>Corporate HQ</h4>
                <p>1600 Ponce De Leon Blvd<br/>STE 1108 · Coral Gables, FL</p>
              </div>
              <div className="contact-card">
                <h4>Direct line</h4>
                <p><a href="tel:+18886878521">+1 (888) 687-8521</a></p>
              </div>
              <div className="contact-card">
                <h4>Email</h4>
                <p><a href="mailto:info@u1dynamics.com">info@u1dynamics.com</a></p>
              </div>
            </div>
          </div>
          <form className="c-form" onSubmit={submit}>
            <div className="c-form-head">
              <span>REQUEST FOR QUOTATION · <b>RFQ/NEW</b></span>
              <span>MON–FRI 08:00–17:00 CST</span>
            </div>
            {submitted ? (
              <div style={{padding:"40px 0", textAlign:"center"}}>
                <p className="tag tag-volt" style={{marginBottom:12}}>✓ TRANSMITTED</p>
                <h3 style={{fontFamily:"var(--font-display)", fontWeight:400, fontSize:"32px", letterSpacing:"-0.02em"}}>Message prepared.</h3>
                <p style={{color:"var(--paper-dim)", marginTop:12, fontSize:14}}>Your mail client should be open. We reply within one business day.</p>
              </div>
            ) : (
              <div className="c-form-grid">
                <div className="c-row">
                  <div className="c-field"><label>FULL NAME *</label><input name="name" required /></div>
                  <div className="c-field"><label>EMAIL *</label><input name="email" type="email" required /></div>
                </div>
                <div className="c-row">
                  <div className="c-field"><label>PHONE</label><input name="phone" type="tel" /></div>
                  <div className="c-field"><label>COMPANY</label><input name="company" /></div>
                </div>
                <div className="c-field">
                  <label>PROGRAM TYPE</label>
                  <select name="service" defaultValue="">
                    <option value="">Select…</option>
                    <option>Contract Lubricant Manufacturing</option>
                    <option>Private Label Lubricants</option>
                    <option>DEF Manufacturing</option>
                    <option>Coolant &amp; Antifreeze</option>
                    <option>Custom Formulation</option>
                    <option>Contract Filling &amp; Packaging</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="c-field">
                  <label>PROJECT BRIEF *</label>
                  <textarea name="message" rows="4" required placeholder="Volume, packaging, target spec, timeline…" />
                </div>
                <button className="c-submit" type="submit">SEND RFQ</button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-hero">
          Precision is <em>not optional</em>.<br/>
          It is the product.
        </div>
        <div className="footer-grid">
          <div className="footer-col">
            <h5>U1DYNAMICS MFG LLC</h5>
            <span style={{color:"var(--paper-dim)",fontSize:14,lineHeight:1.6}}>
              A U.S.-based lubricant blending and contract filling platform. Ultra1Plus flagship brand. Serving domestic &amp; international partners since 2022.
            </span>
            <div className="addr">
              MFG · 4468 Genoa Red Bluff Rd · Pasadena, TX 77505<br/>
              HQ · 1600 Ponce De Leon Blvd STE 1108 · Coral Gables, FL 33134
            </div>
          </div>
          <div className="footer-col">
            <h5>SITE</h5>
            <a href="#manifesto">Manifesto</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#products">Products</a>
            <a href="#facility">Facility</a>
            <a href="#industries">Industries</a>
          </div>
          <div className="footer-col">
            <h5>PROGRAMS</h5>
            <a href="#capabilities">Contract manufacturing</a>
            <a href="#capabilities">Private label</a>
            <a href="#capabilities">DEF manufacturing</a>
            <a href="#capabilities">Coolants &amp; antifreeze</a>
            <a href="#capabilities">Specialty formulation</a>
          </div>
          <div className="footer-col">
            <h5>CONTACT</h5>
            <a href="tel:+18886878521">+1 888 687 8521</a>
            <a href="mailto:info@u1dynamics.com">info@u1dynamics.com</a>
            <a href="https://www.ultra1plus.com" target="_blank" rel="noopener">Ultra1Plus.com ↗</a>
            <a href="https://www.linkedin.com/company/u1dynamics-manufacturing-llc" target="_blank" rel="noopener">LinkedIn ↗</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} U1Dynamics Manufacturing LLC · All rights reserved</span>
          <span>Made in the USA · Pasadena, TX</span>
          <span>DOC REV 2026.04 / v2</span>
        </div>
      </div>
    </footer>
  );
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function App() {
  const [values, setTweak] = useTweaks(DEFAULTS);
  useReveal();
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", values.theme);
    document.documentElement.setAttribute("data-palette", values.palette || "midnight");
    // Clear any legacy inline overrides so CSS tokens drive the palette.
    document.documentElement.style.removeProperty("--volt");
    document.documentElement.style.removeProperty("--volt-deep");
    document.documentElement.style.removeProperty("--volt-glow");
  }, [values]);

  return (
    <>
      <Chrome />
      <main id="main">
        <Hero />
        <Ticker />
        <Manifesto />
        <Capabilities />
        <SpecSheet />
        <Process />
        <Products />
        <Flagship />
        <Fluid />
        <Facility />
        <Industries />
        <USA />
        <Contact />
      </main>
      <Footer />
      <TweaksPanel title="Tweaks">
        <TweakSection label="Palette">
          <TweakRadio label="System" value={values.palette || "midnight"}
            onChange={v => setTweak("palette", v)}
            options={[
              { label: "Midnight · Volt", value: "midnight" },
              { label: "Steel · Ignition", value: "steel" },
              { label: "Carbon · Laser", value: "carbon" },
            ]} />
          <TweakRadio label="Mode" value={values.theme}
            onChange={v => setTweak("theme", v)}
            options={[{ label: "Dark", value: "dark" }, { label: "Light", value: "light" }]} />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
