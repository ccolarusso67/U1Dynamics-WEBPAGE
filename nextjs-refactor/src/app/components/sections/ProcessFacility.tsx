"use client";

import { useRef, useState } from "react";
import Image from "next/image";

const IMG = "/images/facility/";

function FacilityVideo() {
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLVideoElement | null>(null);

  const play = () => {
    const v = ref.current;
    if (!v) return;
    v.play();
    setPlaying(true);
  };

  return (
    <figure className={"fac-hero fac-video" + (playing ? " is-playing" : "")}>
      <video
        ref={ref}
        poster="/videos/facility-poster.jpg"
        preload="metadata"
        controls={playing}
        playsInline
        onEnded={() => setPlaying(false)}
        onPause={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
      >
        <source src="/videos/facility.mp4" type="video/mp4" />
      </video>
      {!playing && (
        <button
          type="button"
          className="fac-play"
          onClick={play}
          aria-label="Play facility video"
        >
          <span className="fac-play-ring" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
              <path d="M8 5v14l11-7z" fill="currentColor" />
            </svg>
          </span>
          <span className="fac-play-lbl">PLAY FILM · 2:14</span>
        </button>
      )}
      <figcaption>
        <span>FIG.04 — PASADENA, TX · 29.63°N / 95.16°W</span>
        <span>95,000 SQ FT · EST. 2022</span>
      </figcaption>
    </figure>
  );
}

export function Process() {
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
          <div className="sec-idx">
            § 02 / 06<br />PROCESS
          </div>
          <h2 id="proc-h">
            From scope to <em>shipment</em>.
          </h2>
          <aside className="sec-head-aside">
            Every partnership moves through the same six-step cadence. Most programs ship first production in four to eight weeks.
          </aside>
        </header>
      </div>
      <div className="process">
        {steps.map((s) => (
          <article className="proc-step" key={s.n} data-time={s.t}>
            <span className="proc-step-num">{s.n}</span>
            <svg viewBox="0 0 48 48" className="proc-step-icon" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d={s.icon} />
            </svg>
            <h4>{s.h}</h4>
            <p>{s.p}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Facility() {
  return (
    <section className="prose" id="facility" aria-labelledby="fac-h">
      <div className="container">
        <header className="sec-head">
          <div className="sec-idx">
            § 03 / 06<br />FACILITY
          </div>
          <h2 id="fac-h">
            95,000 sq ft of <em>precision</em>.
          </h2>
          <aside className="sec-head-aside">
            Flexible production lines, scalable throughput, zero shortcuts. Pasadena, Texas.
          </aside>
        </header>

        <FacilityVideo />

        <div className="fac-trio">
          <figure>
            <Image src={`${IMG}blending-vortex.jpg`} alt="Lubricant blending vortex in stainless tank at U1Dynamics" fill sizes="(max-width: 900px) 100vw, 33vw" style={{ objectFit: "cover" }} />
            <figcaption>FIG.05 · BLENDING</figcaption>
          </figure>
          <figure>
            <Image src={`${IMG}bottling-line-worker.jpg`} alt="Operator on bottling line at U1Dynamics" fill sizes="(max-width: 900px) 100vw, 33vw" style={{ objectFit: "cover" }} />
            <figcaption>FIG.06 · BOTTLING</figcaption>
          </figure>
          <figure>
            <Image src={`${IMG}branded-truck.jpg`} alt="Branded outbound truck leaving U1Dynamics" fill sizes="(max-width: 900px) 100vw, 33vw" style={{ objectFit: "cover" }} />
            <figcaption>FIG.07 · OUTBOUND</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export function Industries() {
  const rows = [
    { n: "01", name: "Automotive", tags: ["PC", "LT", "HD"] },
    { n: "02", name: "Heavy Duty & Transport", tags: ["FLEET", "OTR", "LTL"] },
    { n: "03", name: "Industrial Equipment", tags: ["HYD", "GEAR", "COMP"] },
    { n: "04", name: "Agriculture & Construction", tags: ["OFF-HWY", "AG", "UTV"] },
    { n: "05", name: "Marine", tags: ["2-CYCLE", "STERN", "BILGE"] },
  ];
  return (
    <section className="prose" id="industries" aria-labelledby="ind-h">
      <div className="container">
        <header className="sec-head">
          <div className="sec-idx">
            § 04 / 06<br />INDUSTRIES
          </div>
          <h2 id="ind-h">
            Partners across <em>every sector</em>.
          </h2>
          <aside className="sec-head-aside">
            From fleet-wide contracts to specialty off-highway programs, we build fluid strategies for the businesses that keep things moving.
          </aside>
        </header>
        <ul className="ind-list">
          {rows.map((r) => (
            <li key={r.n}>
              <a href="/contact" className="ind-line">
                <span className="ind-line-n">{r.n}</span>
                <span className="ind-line-name">{r.name}</span>
                <span className="ind-line-rule" aria-hidden />
                <span className="ind-line-tags">{r.tags.join(" · ")}</span>
                <span className="ind-line-arrow" aria-hidden>
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function USA() {
  return (
    <section className="prose" aria-labelledby="usa-h" style={{ padding: 0 }}>
      <div className="container" style={{ padding: "clamp(60px,8vw,120px) var(--gutter) 0" }}>
        <header className="sec-head">
          <div className="sec-idx">
            § 05 / 06<br />ORIGIN
          </div>
          <h2 id="usa-h">
            Made in the <em>United States</em>.
          </h2>
          <aside className="sec-head-aside">
            U.S.-based blending means tighter quality, shorter supply chains, and predictable logistics for every partner we serve.
          </aside>
        </header>
      </div>
      <div className="usa">
        <div className="usa-img">
          <Image
            src={`${IMG}drums-usa-flag.jpg`}
            alt="U1Dynamics drums with American flag"
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="usa-text">
          <div className="stars" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <h3>
            A <em>domestic platform</em> built for partners who can&apos;t afford to wait.
          </h3>
          <p>
            We proudly operate as a U.S.-based lubricant manufacturer, supporting both domestic and international partners who value quality, reliability, and strong supply chains.
          </p>
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
