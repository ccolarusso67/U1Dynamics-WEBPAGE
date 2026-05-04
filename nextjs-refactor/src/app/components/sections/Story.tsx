import Image from "next/image";

const IMG = "/images/facility/";

export function Ticker() {
  const items: [string, string][] = [
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
          <span className="ticker-item" key={i}>
            <b>{it[0]}</b>
            {it[1]}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Manifesto() {
  return (
    <section className="manifesto" id="manifesto" aria-labelledby="man-h">
      <div className="manifesto-grid">
        <div className="manifesto-image">
          <Image
            src={`${IMG}oil-pouring.jpg`}
            alt="Lubricant blending at U1Dynamics — golden oil into stainless drum, Pasadena TX"
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
            style={{ objectFit: "cover", objectPosition: "center 40%" }}
          />
          <span className="oil-flow" aria-hidden="true" />
          <div className="manifesto-caption">
            <span className="mc-num">FIG.01</span>
            <span>Blending floor · batch transfer · shift 2</span>
          </div>
        </div>
        <div className="manifesto-text">
          <p className="m-eyebrow">
            <span className="eb-bar" /> OPERATING PRINCIPLE
          </p>
          <blockquote id="man-h">
            Behind every trusted fluid brand, there&rsquo;s a place where <em>performance is built</em> &mdash; batch by batch, drum by drum, ship by ship.
          </blockquote>
          <div className="m-stats">
            <div>
              <b>95,000</b>
              <span>sq ft floor</span>
            </div>
            <div>
              <b>8,000</b>
              <span>gal / batch</span>
            </div>
            <div>
              <b>38+</b>
              <span>export markets</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Capabilities() {
  const caps = [
    {
      n: "CAP/01",
      t: "Contract Manufacturing",
      d: "Formulation blending, production scale-up, quality control, packaging, filling, and logistics coordination under your spec.",
      items: ["Blending 500–8,000 gal", "QC chemistry in-house", "Pallet-to-container"],
      icon: (
        <svg viewBox="0 0 48 48" className="cap-cell-icon">
          <path d="M8 14h32M8 24h32M8 34h32M14 8v32M24 8v32M34 8v32" />
        </svg>
      ),
    },
    {
      n: "CAP/02",
      t: "Private Label Lubricants",
      d: "Engine oils, gear oils, transmission fluids, hydraulic oils, and specialty lubricants — under your brand, your label, your spec.",
      items: ["Full SKU library", "Custom label art", "MOQ 1 pallet"],
      icon: (
        <svg viewBox="0 0 48 48" className="cap-cell-icon">
          <rect x="14" y="8" width="20" height="32" rx="2" />
          <path d="M18 16h12M18 22h12M18 28h8" />
        </svg>
      ),
    },
    {
      n: "CAP/03",
      t: "DEF Manufacturing",
      d: "ISO 22241 compliant Diesel Exhaust Fluid in bulk, tote, drum, 2.5 gal jug, and retail formats.",
      items: ["API certified", "Bulk / tote / drum", "Direct-to-retail"],
      icon: (
        <svg viewBox="0 0 48 48" className="cap-cell-icon">
          <path d="M24 6l10 14a10 10 0 11-20 0L24 6z" />
          <path d="M24 28v8" />
        </svg>
      ),
    },
    {
      n: "CAP/04",
      t: "Coolant & Antifreeze",
      d: "Extended life coolants, heavy-duty antifreeze, universal coolant technologies, and specialty thermal fluids.",
      items: ["ELC / HD / UCT", "Color-coded", "OEM approvals"],
      icon: (
        <svg viewBox="0 0 48 48" className="cap-cell-icon">
          <path d="M24 6v36M10 14l28 20M10 34l28-20" />
          <circle cx="24" cy="24" r="4" />
        </svg>
      ),
    },
  ];
  return (
    <section className="prose" id="capabilities" aria-labelledby="cap-h">
      <div className="container">
        <header className="sec-head">
          <div className="sec-idx">
            § 01 / 06<br />CAPABILITIES
          </div>
          <h2 id="cap-h">
            What we <em>manufacture</em>.
          </h2>
          <aside className="sec-head-aside">
            Four core programs, one platform. Blending, filling, labeling, and logistics run under a single quality system — so your product ships with the same fingerprint every time.
          </aside>
        </header>
      </div>
      <div className="cap-matrix">
        {caps.map((c) => (
          <article className="cap-cell" key={c.n}>
            <div className="cap-cell-head">
              <span className="cap-cell-num">{c.n}</span>
              {c.icon}
            </div>
            <div>
              <h3>{c.t}</h3>
              <p>{c.d}</p>
              <ul className="cap-cell-list">
                {c.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function SpecSheet() {
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
        <span>
          <b>PLANT — PASADENA, TX</b> · SPEC SHEET
        </span>
        <span style={{ textAlign: "center" }}>DOC U1-MFG-0012 / REV.07</span>
        <span>UPDATED 2026.04</span>
      </div>
      <div className="spec-rows">
        {specs.map((s, i) => (
          <div className="spec-row" key={i}>
            <span className="spec-row-num">{String(i + 1).padStart(2, "0")} / 08</span>
            <div className="spec-row-value">
              {s.v}
              {s.sup && <sup>{s.sup}</sup>}
              {s.unit && <span className="unit">{s.unit}</span>}
            </div>
            <div className="spec-row-label">{s.lbl}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
