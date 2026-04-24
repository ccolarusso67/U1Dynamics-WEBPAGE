export default function BrandBridge() {
  return (
    <section className="brand-bridge" aria-label="U1Dynamics and Ultra1Plus">
      <div className="bb-inner">
        <div className="bb-header">
          <span className="bb-tag">FIG.02 — ORG STRUCTURE</span>
          <h2 className="bb-title">Two brands. One operation.</h2>
          <p className="bb-lede">
            U1Dynamics and Ultra1Plus share the same Pasadena, TX facility, the same blending lab,
            and the same quality system. They go to market differently.
          </p>
        </div>

        <div className="bb-grid">
          <div className="bb-card">
            <div className="bb-card-head">
              <span className="bb-card-label">U1DYNAMICS</span>
              <span className="bb-card-role">Contract Manufacturing</span>
            </div>
            <h3 className="bb-card-h3">Private label. Your brand, our plant.</h3>
            <p className="bb-card-body">
              Formulation, blending, filling, and fulfillment for brands, distributors, OEMs,
              and agricultural co-ops. Turnkey programs from 12,000-gallon batches to full
              multi-SKU launches across packaging formats.
            </p>
            <ul className="bb-card-list">
              <li>1,000+ active SKUs across client programs</li>
              <li>12,000-gallon batch capacity · 3M+ gal/month</li>
              <li>38 international markets served</li>
            </ul>
            <a href="#contact" className="bb-card-cta">Start a program →</a>
          </div>

          <div className="bb-divider" aria-hidden="true">
            <span className="bb-divider-dot"></span>
            <span className="bb-divider-line"></span>
            <span className="bb-divider-label">SHARED FACILITY</span>
            <span className="bb-divider-line"></span>
            <span className="bb-divider-dot"></span>
          </div>

          <div className="bb-card">
            <div className="bb-card-head">
              <span className="bb-card-label">ULTRA1PLUS™</span>
              <span className="bb-card-role">Flagship Consumer Brand</span>
            </div>
            <h3 className="bb-card-h3">Premium oils, direct and retail.</h3>
            <p className="bb-card-body">
              Our own finished-goods line — motor oils, gear lubricants, coolants, transmission
              fluids, DEF, and specialty products. Sold direct, via B2B distribution, and through
              major U.S. retailers.
            </p>
            <ul className="bb-card-list">
              <li>Amazon · AutoZone · Walmart · Tractor Supply · Northern Tool · eBay</li>
              <li>32-country distribution footprint</li>
              <li>API · ILMA · NMMA · SAE standards</li>
            </ul>
            <a href="https://ultra1plus.com" target="_blank" rel="noopener" className="bb-card-cta">
              Visit ultra1plus.com →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
