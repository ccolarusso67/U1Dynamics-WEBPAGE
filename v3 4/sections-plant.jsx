/* U1DYNAMICS · v3 — Plant, Gallery, Specimen */

function Plant() {
  return (
    <section className="plant prose" id="plant">
      <div className="container">
        <SecHead idx="01" idxOf="11" kicker="Plant" title="The plant<br/>in {em}." em="plan" aside="95,000 sq ft of blending, filling, labeling, and outbound — running under one quality system." />

        <div className="plant-stage reveal">
          <div className="plant-readout">
            <span>FIG.01 · SITE PLAN</span>
            <span><b>U1-MFG-01</b> · REV.07</span>
            <span>SCALE 1:480</span>
          </div>
          <svg className="plant-svg" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet">
            <rect className="pl-rect pl-draw" x="60" y="80" width="1080" height="440" />
            <line className="pl-draw" x1="60" y1="200" x2="1140" y2="200" />
            <line className="pl-draw" x1="60" y1="400" x2="1140" y2="400" />
            <line className="pl-draw" x1="380" y1="80" x2="380" y2="520" />
            <line className="pl-draw" x1="700" y1="80" x2="700" y2="520" />
            <line className="pl-draw" x1="940" y1="200" x2="940" y2="520" />
            <circle className="pl-amber pl-draw" cx="180" cy="140" r="34" />
            <circle className="pl-amber pl-draw" cx="280" cy="140" r="34" />
            <circle className="pl-amber pl-draw" cx="180" cy="300" r="40" />
            <circle className="pl-amber pl-draw" cx="290" cy="300" r="40" />
            <circle className="pl-amber pl-draw" cx="180" cy="460" r="30" />
            <circle className="pl-amber pl-draw" cx="270" cy="460" r="30" />
            <rect className="pl-rect pl-draw" x="420" y="120" width="240" height="60" />
            <rect className="pl-rect pl-draw" x="420" y="220" width="240" height="60" />
            <rect className="pl-rect pl-draw" x="420" y="320" width="240" height="60" />
            <rect className="pl-rect pl-draw" x="420" y="420" width="240" height="60" />
            <rect className="pl-rect pl-draw" x="740" y="120" width="180" height="80" />
            <rect className="pl-rect pl-draw" x="740" y="240" width="180" height="80" />
            <rect className="pl-rect pl-draw" x="740" y="360" width="180" height="80" />
            <rect className="pl-rect pl-draw" x="970" y="240" width="150" height="50" />
            <rect className="pl-rect pl-draw" x="970" y="310" width="150" height="50" />
            <rect className="pl-rect pl-draw" x="970" y="380" width="150" height="50" />
            <rect className="pl-rect pl-draw" x="970" y="450" width="150" height="50" />
            <line className="pl-flow pl-draw" x1="330" y1="300" x2="420" y2="300" />
            <line className="pl-flow pl-draw" x1="660" y1="300" x2="740" y2="300" />
            <line className="pl-flow pl-draw" x1="920" y1="400" x2="970" y2="400" />
            <text x="80" y="105">01 · Blending bay</text>
            <text className="pl-label-amber" x="80" y="180">6 tanks · 8,000 gal max</text>
            <text x="420" y="105">02 · Fill lines</text>
            <text className="pl-label-amber" x="420" y="200">Quart → 275 gal IBC</text>
            <text x="740" y="105">03 · Label & QA</text>
            <text className="pl-label-amber" x="740" y="220">In-line · lot coded</text>
            <text x="970" y="225">04 · Outbound</text>
            <text className="pl-label-amber" x="970" y="540">4 dock bays · Port of Houston · 8 mi</text>
            <line className="pl-amber" x1="60" y1="80" x2="80" y2="80" />
            <line className="pl-amber" x1="60" y1="80" x2="60" y2="100" />
            <line className="pl-amber" x1="1140" y1="520" x2="1120" y2="520" />
            <line className="pl-amber" x1="1140" y1="520" x2="1140" y2="500" />
          </svg>
          <div className="plant-foot">
            <span>29.63°N · 95.16°W</span>
            <span>BEARING N 12°W</span>
            <span>4468 GENOA RED BLUFF · PASADENA · TX</span>
          </div>
        </div>

        <div className="plant-caps">
          <article className="plant-cap"><span className="plant-cap-num">CAP/01</span><h3>Contract Blending</h3><p>Formulation, scale-up, in-house QC. 500 to 8,000-gal batches, your spec, our batch tickets.</p></article>
          <article className="plant-cap"><span className="plant-cap-num">CAP/02</span><h3>Private Label</h3><p>Engine, gear, transmission, hydraulic, specialty. Full SKU library, custom label art, MOQ 1 pallet.</p></article>
          <article className="plant-cap"><span className="plant-cap-num">CAP/03</span><h3>DEF · Coolant</h3><p>ISO 22241 DEF and full coolant program. Bulk, tote, drum, jug, retail formats.</p></article>
          <article className="plant-cap"><span className="plant-cap-num">CAP/04</span><h3>Logistics</h3><p>Palletized, container-ready, Port of Houston in 8 mi. Domestic and 38+ export markets.</p></article>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <header className="gallery-head reveal">
        <div className="sec-idx">§ 02 / 11<br/>Gallery</div>
        <h2>The <em>floor</em>,<br/>at full tilt.</h2>
      </header>

      <figure className="gframe-hero reveal">
        <img src={FAC + "interior-wide.jpg"} alt="Wide interior of the Pasadena floor" loading="lazy" />
        <span className="gframe-meta gframe-meta-tag">PL.01 · <b>INTERIOR</b></span>
        <span className="gframe-meta gframe-meta-coord">29.63°N · 95.16°W</span>
        <figcaption className="gframe-meta gframe-meta-cap">
          <h4>Ninety-five thousand square feet, <em>under one roof</em>.</h4>
          <aside>
            Pasadena · Texas<br/>
            <b>4,468</b> Genoa Red Bluff<br/>
            Eight miles to <b>Port of Houston</b>
          </aside>
        </figcaption>
      </figure>

      <div className="gtrip">
        <figure className="reveal">
          <div className="gtrip-tile"><img src={FAC + "blending-vortex.jpg"} alt="Blending vortex" loading="lazy" /></div>
          <figcaption><strong>PL.02 · Blending</strong><span>Bay 01 · <b>8,000 gal</b> · vortex</span></figcaption>
        </figure>
        <figure className="reveal">
          <div className="gtrip-tile"><img src={FAC + "filling-nozzles.jpg"} alt="Quart fill line" loading="lazy" /></div>
          <figcaption><strong>PL.03 · Fill</strong><span>Line 02 · <b>60 BPM</b> · quart</span></figcaption>
        </figure>
        <figure className="reveal">
          <div className="gtrip-tile"><img src={FAC + "labeling-machine.jpg"} alt="In-line labeler" loading="lazy" /></div>
          <figcaption><strong>PL.04 · Label</strong><span>In-line · <b>lot coded</b></span></figcaption>
        </figure>
        <figure className="reveal">
          <div className="gtrip-tile"><img src={FAC + "lab-testing.jpg"} alt="In-house lab" loading="lazy" /></div>
          <figcaption><strong>PL.05 · Lab</strong><span>QC · <b>every batch</b></span></figcaption>
        </figure>
        <figure className="reveal">
          <div className="gtrip-tile"><img src={FAC + "drums-closeup.jpg"} alt="55-gal drums staged" loading="lazy" /></div>
          <figcaption><strong>PL.06 · Drum</strong><span>55 gal · <b>outbound</b></span></figcaption>
        </figure>
        <figure className="reveal">
          <div className="gtrip-tile"><img src={FAC + "branded-truck.jpg"} alt="Branded truck at dock" loading="lazy" /></div>
          <figcaption><strong>PL.07 · Ship</strong><span>Dock 03 · <b>Port HOU</b></span></figcaption>
        </figure>
      </div>

      <div className="gpair-foot">
        <span>Photographed on-site · Pasadena · TX</span>
        <span><b>Frames 01 — 07</b> of 09 · Full reel on request</span>
      </div>
    </section>
  );
}

function Specimen() {
  return (
    <section className="specimen" id="fluid">
      <div className="spec-text reveal">
        <span className="spec-eyebrow">§ 03 · The fluid</span>
        <h3>Engineered for the <em>moment</em> friction turns into failure.</h3>
        <p>Every base oil and additive package we blend is built to do one thing: survive duty cycles where ordinary lubricants quit. Shear stability under 10,000 hours. Oxidation resistance at 120°C. Demulsibility that actually sheds water.</p>
        <div className="spec-stats">
          <div><span className="spec-stat-n">47.2<sup>cSt</sup></span><span className="spec-stat-lbl">Visc · 40°C</span></div>
          <div><span className="spec-stat-n">228<sup>°C</sup></span><span className="spec-stat-lbl">Flash · COC</span></div>
          <div><span className="spec-stat-n">11.2<sup>TBN</sup></span><span className="spec-stat-lbl">Reserve alkalinity</span></div>
        </div>
      </div>
      <div className="spec-specimen">
        <img src={FAC + "oil-pouring.jpg"} alt="Lubricant cascading over precision gears" loading="lazy" />
        <div className="spec-grid" />
        <div className="spec-cross tl" /><div className="spec-cross tr" />
        <div className="spec-cross bl" /><div className="spec-cross br" />
        <div className="spec-anno spec-anno-1">
          <span className="spec-anno-dot" /><span className="spec-anno-line" />
          <span className="spec-anno-lbl"><b>A.</b> ZDDP + Mo · anti-wear</span>
        </div>
        <div className="spec-anno spec-anno-2">
          <span className="spec-anno-dot" /><span className="spec-anno-line" />
          <span className="spec-anno-lbl"><b>B.</b> Ca-sulfonate detergent</span>
        </div>
        <div className="spec-anno spec-anno-3">
          <span className="spec-anno-dot" /><span className="spec-anno-line" />
          <span className="spec-anno-lbl"><b>C.</b> Group III / PAO base</span>
        </div>
        <div className="spec-readout">
          <span>SPECIMEN · U1P-DUTY-15W40</span>
          <span><b>● LIVE</b> · MAG 2.4×</span>
          <span>FILM 2.1 μm</span>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Plant, Gallery, Specimen });
