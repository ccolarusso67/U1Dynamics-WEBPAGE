/* U1DYNAMICS · v3 — Hero, Trust, Ticker */

function Hero() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const opts = { timeZone:'America/Chicago', hour:'2-digit', minute:'2-digit', hour12:false };
      setTime(new Date().toLocaleTimeString('en-US', opts) + " CST");
    };
    tick(); const i = setInterval(tick, 30000); return () => clearInterval(i);
  }, []);
  return (
    <section className="hero" id="top">
      <div className="hero-photo">
        <img src={FAC + "aerial-hero.jpg"} alt="Aerial view of the Pasadena plant at dusk" />
      </div>
      <canvas className="hero-canvas" id="hero-canvas" />
      <div className="hero-vignette" />
      <div className="hero-grain" />
      <div className="hero-inner">
        <div className="hero-top">
          <span className="live"><span className="live-dot" /> Plant · Live</span>
          <span className="hero-top-meta">29.63°N · 95.16°W &nbsp;/&nbsp; Pasadena, TX &nbsp;/&nbsp; {time}</span>
        </div>
        <div className="hero-center">
          <span className="hero-eyebrow">§ 00 · Index / Lubricant Blending · Contract MFG</span>
          <h1 className="hero-headline">
            We make the <em>fluid</em><br/>that makes things move.
          </h1>
          <div className="hero-sub">
            <p>A 95,000 sq ft lubricant blending and contract filling platform in Pasadena, Texas. We blend, fill, label, and ship under your spec — for the brands that keep machines, fleets, and economies running.</p>
            <a href="#contact" className="hero-cta">Start a program <span className="hero-cta-arrow">→</span></a>
          </div>
        </div>
        <div className="hero-bottom">
          <div className="hb-block"><span className="hb-lbl">Plant</span><span className="hb-val"><b>95,000</b> sq ft · Pasadena</span></div>
          <div className="hb-block"><span className="hb-lbl">Capacity</span><span className="hb-val"><b>8,000</b> gal · max batch</span></div>
          <div className="hb-block"><span className="hb-lbl">SKUs</span><span className="hb-val"><b>1,000+</b> active</span></div>
          <div className="hb-block"><span className="hb-lbl">Reach</span><span className="hb-val"><b>38</b> export markets</span></div>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const partners = ["Walmart", "AutoZone", "Amazon", "Tractor Supply", "Northern Tool", "NAPA", "O'Reilly"];
  return (
    <section className="trust">
      <div className="trust-inner">
        <span className="trust-lbl">Stocked at</span>
        <div className="trust-row">
          {partners.map(p => <span key={p}>{p}</span>)}
        </div>
      </div>
    </section>
  );
}

function Ticker() {
  const items = [
    ["95,000","SQ FT BLENDING FLOOR"],["1,000+","ACTIVE SKUS"],["38","EXPORT MARKETS"],
    ["ISO 22241","DEF COMPLIANT"],["ULTRA1PLUS","FLAGSHIP BRAND"],["MADE IN USA","PASADENA · TX"],
    ["8,000 GAL","MAX BATCH"],["4–8 WK","FIRST PRODUCTION"], ["API SP","ILSAC GF-6A"], ["ISO 9001","QUALITY SYSTEM"]
  ];
  const row = [...items, ...items];
  return (
    <div className="ticker">
      <div className="ticker-track">
        {row.map((it,i)=><span className="ticker-item" key={i}><b>{it[0]}</b>{it[1]}</span>)}
      </div>
    </div>
  );
}

Object.assign(window, { Hero, Trust, Ticker });
