"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const IMG = "/images/facility/";

export default function Hero() {
  const [tick, setTick] = useState(0);
  const [tourOpen, setTourOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setTourOpen(false);
    }
    if (tourOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [tourOpen]);

  useEffect(() => {
    const i = setInterval(() => setTick((t) => t + 1), 1800);
    return () => clearInterval(i);
  }, []);

  const fill = 58 + ((tick * 3) % 14);
  const rpm = 1180 + ((tick * 17) % 80);
  const visc = (47.2 + ((tick % 7) * 0.15)).toFixed(1);
  const temp = 72 + (tick % 5);

  return (
    <section className="hero" id="top" aria-labelledby="hero-h">
      <div className="hero-slab" aria-hidden="true">
        <Image
          src={`${IMG}drums-usa-workers.jpg`}
          alt=""
          fill
          priority
          sizes="(max-width: 900px) 100vw, 40vw"
          style={{ objectFit: "cover" }}
        />
        <div className="hero-slab-grid" />
      </div>

      <div className="hero-mega" aria-hidden="true">
        <span>FLUID</span>
      </div>

      <span className="hero-bracket tl" aria-hidden="true" />
      <span className="hero-bracket tr" aria-hidden="true" />
      <span className="hero-bracket bl" aria-hidden="true" />
      <span className="hero-bracket br" aria-hidden="true" />

      <div className="hero-meta-top" aria-hidden="true">
        <span className="live">
          <span className="live-dot" /> PLANT LIVE · BATCH #U1-2486
        </span>
        <span className="hmt-divider">/</span>
        <span>
          {temp}°F · RH 41 · SHIFT 2
        </span>
        <span className="hmt-divider">/</span>
        <span>29.63°N · 95.16°W</span>
      </div>

      <div className="hero-inner">
        <div className="hero-head">
          <span className="hero-idx">§ 00 / INDEX</span>
          <p className="hero-eyebrow">
            LUBRICANT BLENDING <span className="he-sep">·</span> CONTRACT MFG{" "}
            <span className="he-sep">·</span> EST. 2022
          </p>
          <h1 id="hero-h" className="hero-headline">
            <span className="hh-line">
              <span className="hh-num">01</span> Built for
            </span>
            <span className="hh-line">the machines</span>
            <span className="hh-line">
              <span className="he-accent">that don&rsquo;t stop.</span>
            </span>
          </h1>
        </div>

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
              <div className="hp-bar-fill" style={{ width: fill + "%" }} />
              <div className="hp-bar-target" style={{ left: "72%" }} />
            </div>
            <div className="hp-gauge-foot">TGT 72% · EST 04:18</div>
          </div>

          <div className="hp-rows">
            <div className="hp-row">
              <span>VISC</span>
              <b>{visc}</b>
              <i>cSt @ 100°C</i>
            </div>
            <div className="hp-row">
              <span>AGIT</span>
              <b>{rpm}</b>
              <i>RPM</i>
            </div>
            <div className="hp-row">
              <span>LINE</span>
              <b>03/04</b>
              <i>ACTIVE</i>
            </div>
            <div className="hp-row">
              <span>QA</span>
              <b className="hp-ok">PASS</b>
              <i>04:12</i>
            </div>
          </div>

          <div className="hp-foot">
            <span className="hp-dot" /> STREAM · {String(tick).padStart(3, "0")}
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
            <a className="btn btn-ghost" href="#contact">
              Request a quote
            </a>
          </div>
        </div>
      </div>

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
    </section>
  );
}
