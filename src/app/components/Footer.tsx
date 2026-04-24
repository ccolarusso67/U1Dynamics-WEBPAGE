import Link from "next/link";
import EmailLink from "./EmailLink";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-hero">
          Precision is <em>not optional</em>.<br />
          It is the product.
        </div>
        <div className="footer-grid">
          <div className="footer-col">
            <h5>U1DYNAMICS MFG LLC</h5>
            <span style={{ color: "var(--paper-dim)", fontSize: 14, lineHeight: 1.6 }}>
              A U.S.-based lubricant blending and contract filling platform. Ultra1Plus flagship brand. Serving domestic &amp; international partners since 2022.
            </span>
            <div className="addr">
              MFG · 4468 Genoa Red Bluff Rd · Pasadena, TX 77505<br />
              HQ · 1600 Ponce De Leon Blvd STE 1108 · Coral Gables, FL 33134
            </div>
          </div>
          <div className="footer-col">
            <h5>SITE</h5>
            <Link href="/">Home</Link>
            <Link href="/#capabilities">Capabilities</Link>
            <Link href="/products">Products</Link>
            <Link href="/#facility">Facility</Link>
            <Link href="/#industries">Industries</Link>
          </div>
          <div className="footer-col">
            <h5>PROGRAMS</h5>
            <Link href="/#capabilities">Contract manufacturing</Link>
            <Link href="/#capabilities">Private label</Link>
            <Link href="/#capabilities">DEF manufacturing</Link>
            <Link href="/#capabilities">Coolants &amp; antifreeze</Link>
            <Link href="/#capabilities">Specialty formulation</Link>
          </div>
          <div className="footer-col">
            <h5>CONTACT</h5>
            <a href="tel:+18886878521">+1 888 687 8521</a>
            <EmailLink />
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
