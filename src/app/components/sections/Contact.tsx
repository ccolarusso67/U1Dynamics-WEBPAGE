"use client";

import { useState } from "react";
import EmailLink from "../EmailLink";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `Website Inquiry from ${d.get("name")} · ${d.get("company") || "N/A"}`
    );
    const body = encodeURIComponent(
      `Name: ${d.get("name")}\nEmail: ${d.get("email")}\nPhone: ${d.get("phone")}\nCompany: ${d.get("company")}\nService: ${d.get("service")}\n\nMessage:\n${d.get("message")}`
    );
    window.location.href = `mailto:info@u1dynamics.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section className="contact" id="contact" aria-labelledby="c-h">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-left">
            <p className="tag tag-volt">§ 06 · CONTACT</p>
            <h2 id="c-h" style={{ marginTop: 20 }}>
              Let&apos;s <em>build</em> something together.
            </h2>
            <p>
              Whether you need a reliable contract blender, a private label partner, or a specialty formulation developed from scratch — our team is ready to scope the program.
            </p>
            <div className="contact-cards">
              <div className="contact-card">
                <h4>Manufacturing Plant</h4>
                <p>
                  4468 Genoa Red Bluff Rd
                  <br />
                  Pasadena, TX 77505
                </p>
              </div>
              <div className="contact-card">
                <h4>Corporate HQ</h4>
                <p>
                  1600 Ponce De Leon Blvd
                  <br />
                  STE 1108 · Coral Gables, FL
                </p>
              </div>
              <div className="contact-card">
                <h4>Direct line</h4>
                <p>
                  <a href="tel:+18886878521">+1 (888) 687-8521</a>
                </p>
              </div>
              <div className="contact-card">
                <h4>Email</h4>
                <p>
                  <EmailLink />
                </p>
              </div>
            </div>
          </div>
          <form className="c-form" onSubmit={submit}>
            <div className="c-form-head">
              <span>
                REQUEST FOR QUOTATION · <b>RFQ/NEW</b>
              </span>
              <span>MON–FRI 08:00–17:00 CST</span>
            </div>
            {submitted ? (
              <div style={{ padding: "40px 0", textAlign: "center" }}>
                <p className="tag tag-volt" style={{ marginBottom: 12 }}>
                  ✓ TRANSMITTED
                </p>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "32px", letterSpacing: "-0.02em" }}>
                  Message prepared.
                </h3>
                <p style={{ color: "var(--paper-dim)", marginTop: 12, fontSize: 14 }}>
                  Your mail client should be open. We reply within one business day.
                </p>
              </div>
            ) : (
              <div className="c-form-grid">
                <div className="c-row">
                  <div className="c-field">
                    <label>FULL NAME *</label>
                    <input name="name" required />
                  </div>
                  <div className="c-field">
                    <label>EMAIL *</label>
                    <input name="email" type="email" required />
                  </div>
                </div>
                <div className="c-row">
                  <div className="c-field">
                    <label>PHONE</label>
                    <input name="phone" type="tel" />
                  </div>
                  <div className="c-field">
                    <label>COMPANY</label>
                    <input name="company" />
                  </div>
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
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Volume, packaging, target spec, timeline…"
                  />
                </div>
                <button className="c-submit" type="submit">
                  SEND RFQ
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
