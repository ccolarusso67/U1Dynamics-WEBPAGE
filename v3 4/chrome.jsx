/* U1DYNAMICS · v3 — Chrome: cursor, loader, header, reveal hook */
const { useState, useEffect, useRef, useMemo } = React;

const FAC = "../public/images/facility/";
const U1P = "../public/images/ultra1plus/";

/* ---------- Custom cursor ---------- */
function Cursor() {
  useEffect(() => {
    if (matchMedia('(pointer: coarse)').matches) return;
    const c = document.createElement('div'); c.className = 'cursor';
    const d = document.createElement('div'); d.className = 'cursor-dot';
    document.body.appendChild(c); document.body.appendChild(d);
    let tx=0, ty=0, x=0, y=0;
    const move = (e) => { tx = e.clientX; ty = e.clientY; };
    addEventListener('mousemove', move);
    let raf;
    const loop = () => {
      x += (tx - x) * 0.20; y += (ty - y) * 0.20;
      c.style.transform = `translate(${tx}px, ${ty}px) translate(-50%,-50%)`;
      d.style.transform = `translate(${x}px, ${y}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    const hovs = 'a, button, input, textarea, select, .rack-bottle, .plant-cap, .ind-cell, .news-card, .faq-row';
    const over = (e) => { if (e.target.closest(hovs)) document.body.classList.add('is-hovering'); };
    const out  = (e) => { if (e.target.closest(hovs)) document.body.classList.remove('is-hovering'); };
    document.addEventListener('mouseover', over);
    document.addEventListener('mouseout', out);
    return () => { cancelAnimationFrame(raf); removeEventListener('mousemove', move); c.remove(); d.remove(); };
  }, []);
  return null;
}

/* ---------- Reveal-on-scroll ---------- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .plant-stage, .dash, .proc-stage, .cert-grid, .ind-grid, .sus-grid, .news-grid, .careers-grid, .faq-list, .spec-doc, .compare-table, .contact-bg-img');
    const io = new IntersectionObserver((es) => {
      es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { threshold: 0.14 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ---------- Loader ---------- */
function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => { const t = setTimeout(() => setDone(true), 1400); return () => clearTimeout(t); }, []);
  return (
    <div className={"loader" + (done ? " is-done" : "")}>
      <div className="loader-inner">
        <div className="loader-line"><span>U1Dynamics · MFG</span><b>· INIT</b></div>
        <div className="loader-line"><span>Plant · Pasadena, TX</span><b>· LINK</b></div>
        <div className="loader-line"><span>Render pipeline</span><b>· READY</b></div>
        <div className="loader-bar" />
      </div>
    </div>
  );
}

/* ---------- Chrome / header ---------- */
function Chrome() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={"chrome" + (scrolled ? " is-scrolled" : "")}>
      <a href="#top" className="wordmark">
        <span className="wordmark-mark">U1</span>
        <span className="wordmark-text">U1DYNAMICS<i>/MFG</i></span>
      </a>
      <nav className="chrome-nav">
        <a href="#plant">Plant</a>
        <a href="#process">Process</a>
        <a href="#rack">Catalog</a>
        <a href="#industries">Industries</a>
        <a href="#quality">Quality</a>
        <a href="#markets">Markets</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="chrome-cta">
        <a href="tel:+18886878521" className="chrome-tel">+1 888 687 8521</a>
        <a href="#contact" className="chrome-cta-btn">Start a program <span>→</span></a>
      </div>
    </header>
  );
}

/* ---------- Section header (reusable) ---------- */
function SecHead({ idx, idxOf, title, em, kicker, aside, dark }) {
  return (
    <header className={"sec-head reveal" + (dark ? " on-dark" : "")}>
      <div className="sec-idx">§ {idx} / {idxOf}<br/>{kicker}</div>
      <h2 dangerouslySetInnerHTML={{__html: title.replace('{em}', `<em>${em}</em>`)}} />
      {aside ? <aside className="sec-head-aside">{aside}</aside> : <span />}
    </header>
  );
}

/* ---------- Photo divider ---------- */
function PhotoBreak({ src, alt, tag, caption, height }) {
  return (
    <div className="photo-break reveal" style={height ? {height} : null}>
      <img src={src} alt={alt} loading="lazy" />
      <span className="photo-break-tag">{tag}</span>
      {caption ? <span className="photo-break-cap">{caption}</span> : null}
    </div>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer>
      <div className="footer-hero">Precision is <em>not optional</em>.<br/>It is the product.</div>
      <div className="footer-grid">
        <div className="footer-col">
          <h6>U1Dynamics MFG LLC</h6>
          <span style={{color:"var(--paper-dim)", letterSpacing:"0.04em", textTransform:"none", fontFamily:"var(--font-sans)", fontSize:13, lineHeight:1.6}}>
            U.S.-based lubricant blending and contract filling platform. Ultra1Plus flagship brand. Serving partners since 2022.
          </span>
        </div>
        <div className="footer-col"><h6>Plant</h6><a href="#plant">Plant in plan</a><a href="#process">Process</a><a href="#quality">Quality</a><a href="#sustainability">Sustainability</a></div>
        <div className="footer-col"><h6>Catalog</h6><a href="#rack">Ultra1Plus rack</a><a href="#spec">Spec sheets</a><a href="#compare">vs. industry</a><a href="#industries">Industries</a></div>
        <div className="footer-col"><h6>Company</h6><a href="#news">News</a><a href="#careers">Careers</a><a href="#faq">Procurement FAQ</a><a href="#contact">Contact</a></div>
        <div className="footer-col"><h6>Direct</h6><a href="tel:+18886878521">+1 888 687 8521</a><a href="mailto:info@u1dynamics.com">info@u1dynamics.com</a><a href="https://www.ultra1plus.com" target="_blank" rel="noopener">Ultra1Plus.com ↗</a></div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} U1Dynamics Manufacturing LLC</span>
        <span>Made in the USA · Pasadena, TX · 4468 Genoa Red Bluff</span>
        <span>v3 · Doc rev 2026.05</span>
      </div>
    </footer>
  );
}

Object.assign(window, { Cursor, useReveal, Loader, Chrome, SecHead, PhotoBreak, Footer, FAC, U1P });
