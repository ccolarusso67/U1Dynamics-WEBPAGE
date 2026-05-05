/* U1DYNAMICS · v2 — Globe (lightweight pure-canvas wireframe + arcs) */

(function () {
  const wrap = document.querySelector('.markets-globe');
  if (!wrap) return;
  const canvas = document.createElement('canvas');
  wrap.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Plant lat/long
  const plant = { lat: 29.63, lon: -95.16 };

  // 38 export markets (representative sample)
  const markets = [
    {n:"Mexico", lat:23, lon:-102}, {n:"Canada", lat:56, lon:-106},
    {n:"Brazil", lat:-14, lon:-51}, {n:"Argentina", lat:-38, lon:-64},
    {n:"Chile", lat:-30, lon:-71}, {n:"Colombia", lat:4, lon:-74},
    {n:"Peru", lat:-9, lon:-75}, {n:"UK", lat:54, lon:-2},
    {n:"Germany", lat:51, lon:10}, {n:"France", lat:46, lon:2},
    {n:"Spain", lat:40, lon:-4}, {n:"Italy", lat:42, lon:12},
    {n:"Netherlands", lat:52, lon:5}, {n:"Poland", lat:52, lon:19},
    {n:"UAE", lat:24, lon:54}, {n:"Saudi Arabia", lat:24, lon:45},
    {n:"South Africa", lat:-30, lon:25}, {n:"Nigeria", lat:9, lon:8},
    {n:"Kenya", lat:0, lon:38}, {n:"Egypt", lat:27, lon:30},
    {n:"India", lat:20, lon:77}, {n:"China", lat:35, lon:104},
    {n:"Japan", lat:36, lon:138}, {n:"South Korea", lat:36, lon:128},
    {n:"Vietnam", lat:14, lon:108}, {n:"Philippines", lat:13, lon:122},
    {n:"Indonesia", lat:-1, lon:114}, {n:"Malaysia", lat:4, lon:102},
    {n:"Singapore", lat:1, lon:103}, {n:"Thailand", lat:15, lon:101},
    {n:"Australia", lat:-25, lon:133}, {n:"New Zealand", lat:-41, lon:174},
    {n:"Turkey", lat:39, lon:35}, {n:"Greece", lat:39, lon:22},
    {n:"Ireland", lat:53, lon:-8}, {n:"Portugal", lat:39, lon:-8},
    {n:"Norway", lat:62, lon:10}, {n:"Sweden", lat:62, lon:15}
  ];

  function resize() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    const w = wrap.clientWidth, h = wrap.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    canvas.style.width = w + "px"; canvas.style.height = h + "px";
    ctx.setTransform(dpr,0,0,dpr,0,0);
  }
  resize();
  addEventListener('resize', resize);

  let rot = 0;
  let arcT = 0;

  // 3D point on unit sphere from lat/lon
  function sph(lat, lon) {
    const phi = lat * Math.PI / 180;
    const lam = lon * Math.PI / 180;
    return [Math.cos(phi)*Math.cos(lam), Math.sin(phi), Math.cos(phi)*Math.sin(lam)];
  }
  function rotateY(p, a) {
    const c=Math.cos(a), s=Math.sin(a);
    return [p[0]*c - p[2]*s, p[1], p[0]*s + p[2]*c];
  }
  function project(p, cx, cy, R) {
    return { x: cx + p[0]*R, y: cy - p[1]*R, z: p[2] };
  }

  // Great-circle arc samples between two unit vectors
  function arcPoints(a, b, n) {
    const dot = a[0]*b[0]+a[1]*b[1]+a[2]*b[2];
    const omega = Math.acos(Math.min(1, Math.max(-1, dot)));
    const so = Math.sin(omega) || 1;
    const out = [];
    for (let i = 0; i <= n; i++) {
      const t = i / n;
      const k1 = Math.sin((1-t)*omega)/so;
      const k2 = Math.sin(t*omega)/so;
      // lift arc a bit so it bows out
      const lift = 1 + Math.sin(t*Math.PI)*0.18;
      out.push([
        (a[0]*k1 + b[0]*k2)*lift,
        (a[1]*k1 + b[1]*k2)*lift,
        (a[2]*k1 + b[2]*k2)*lift,
      ]);
    }
    return out;
  }

  function draw() {
    const w = canvas.width / (window.devicePixelRatio||1);
    const h = canvas.height / (window.devicePixelRatio||1);
    const cx = w/2, cy = h/2;
    const R = Math.min(w, h) * 0.42;

    ctx.clearRect(0,0,w,h);

    // base disk fill — very dark
    ctx.fillStyle = "rgba(15,14,12,0.6)";
    ctx.beginPath(); ctx.arc(cx,cy,R,0,Math.PI*2); ctx.fill();

    // wireframe latitudes
    ctx.strokeStyle = "rgba(185,177,161,0.12)";
    ctx.lineWidth = 1;
    for (let lat = -75; lat <= 75; lat += 15) {
      ctx.beginPath();
      const seg = 80;
      for (let i = 0; i <= seg; i++) {
        const lon = -180 + 360*i/seg;
        let p = sph(lat, lon);
        p = rotateY(p, rot);
        if (p[2] < -0.05) continue;
        const pr = project(p, cx, cy, R);
        if (i===0) ctx.moveTo(pr.x, pr.y); else ctx.lineTo(pr.x, pr.y);
      }
      ctx.stroke();
    }
    // longitudes
    for (let lon = 0; lon < 360; lon += 20) {
      ctx.beginPath();
      const seg = 60;
      for (let i = 0; i <= seg; i++) {
        const lat = -90 + 180*i/seg;
        let p = sph(lat, lon);
        p = rotateY(p, rot);
        if (p[2] < -0.05) continue;
        const pr = project(p, cx, cy, R);
        if (i===0) ctx.moveTo(pr.x, pr.y); else ctx.lineTo(pr.x, pr.y);
      }
      ctx.stroke();
    }
    // crisp limb circle
    ctx.strokeStyle = "rgba(185,177,161,0.35)";
    ctx.beginPath(); ctx.arc(cx,cy,R,0,Math.PI*2); ctx.stroke();

    // Plant point
    let plantP = sph(plant.lat, plant.lon);
    plantP = rotateY(plantP, rot);
    if (plantP[2] > -0.05) {
      const pr = project(plantP, cx, cy, R);
      ctx.fillStyle = "#ff7a1a";
      ctx.beginPath(); ctx.arc(pr.x, pr.y, 4, 0, Math.PI*2); ctx.fill();
      ctx.strokeStyle = "rgba(255,122,26,0.6)";
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.arc(pr.x, pr.y, 9, 0, Math.PI*2); ctx.stroke();
    }

    // Arcs to markets
    const a = sph(plant.lat, plant.lon);
    const ar = rotateY(a, rot);
    markets.forEach((m, idx) => {
      const b = sph(m.lat, m.lon);
      const br = rotateY(b, rot);
      const pts = arcPoints(ar, br, 32);
      // animated reveal — staggered
      const phase = (arcT - idx*0.12) % 5;
      const reveal = Math.max(0, Math.min(1, phase / 1.4));
      if (reveal <= 0) return;
      const cut = Math.floor(pts.length * reveal);

      ctx.strokeStyle = "rgba(255,122,26,0.55)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      let started = false;
      for (let i = 0; i < cut; i++) {
        const p = pts[i];
        if (p[2] < -0.05) { started = false; continue; }
        const pr = project(p, cx, cy, R);
        if (!started) { ctx.moveTo(pr.x, pr.y); started = true; }
        else ctx.lineTo(pr.x, pr.y);
      }
      ctx.stroke();

      // dot at destination once revealed
      if (reveal >= 0.95 && br[2] > -0.05) {
        const pr = project(br, cx, cy, R);
        ctx.fillStyle = "rgba(244,240,232,0.85)";
        ctx.beginPath(); ctx.arc(pr.x, pr.y, 1.8, 0, Math.PI*2); ctx.fill();
      }
    });

    if (!reduce) {
      rot += 0.0015;
      arcT += 0.012;
    }
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
})();
