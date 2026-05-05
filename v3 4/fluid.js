/* U1DYNAMICS · v2 — Hero WebGL fluid shader (mouse-reactive)
   Lightweight, performance-conscious. Falls back gracefully. */

(function () {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const small = matchMedia('(max-width: 900px)').matches;

  const gl = canvas.getContext('webgl', { premultipliedAlpha: false, antialias: false });
  if (!gl || reduce) {
    canvas.style.background = "radial-gradient(ellipse at 30% 50%, #4a2208 0%, #1a0d04 50%, #0a0908 100%)";
    return;
  }

  function compile(type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(s));
      return null;
    }
    return s;
  }
  function program(vs, fs) {
    const p = gl.createProgram();
    gl.attachShader(p, compile(gl.VERTEX_SHADER, vs));
    gl.attachShader(p, compile(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(p);
    return p;
  }

  const vs = `attribute vec2 p; varying vec2 uv; void main(){ uv = p*0.5+0.5; gl_Position = vec4(p,0.,1.); }`;

  // Volumetric amber fluid: layered domain-warped FBM, mouse drag adds heat
  const fs = `precision highp float;
  varying vec2 uv;
  uniform float t;
  uniform vec2 res;
  uniform vec2 mouse;
  uniform float pressure;

  // hash + simplex-ish noise
  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453123); }
  float noise(vec2 p){
    vec2 i = floor(p), f = fract(p);
    float a = hash(i), b = hash(i+vec2(1.,0.)), c = hash(i+vec2(0.,1.)), d = hash(i+vec2(1.,1.));
    vec2 u = f*f*(3.-2.*f);
    return mix(mix(a,b,u.x), mix(c,d,u.x), u.y);
  }
  float fbm(vec2 p){
    float v = 0., a = 0.5;
    for(int i=0;i<5;i++){ v += a*noise(p); p*=2.05; a*=0.5; }
    return v;
  }

  void main(){
    vec2 p = (uv - 0.5);
    p.x *= res.x/res.y;

    // Mouse influence (in same coordinate space)
    vec2 m = (mouse - 0.5);
    m.x *= res.x/res.y;
    float md = length(p - m);
    float heat = pressure * exp(-md*3.5) * 0.6;

    // Domain warp drives the fluid look
    float time = t*0.025;
    vec2 q = vec2(fbm(p*1.1 + vec2(time, 0.0)),
                  fbm(p*1.1 + vec2(5.2, time*1.3)));
    vec2 r = vec2(fbm(p*1.4 + 4.0*q + vec2(1.7, 9.2) + time*0.7),
                  fbm(p*1.4 + 4.0*q + vec2(8.3, 2.8) + time*0.6));
    float f = fbm(p*1.4 + 4.0*r);

    // Cool subtle currents on left, intense amber pool on right
    float pool = smoothstep(-0.6, 0.7, p.x);
    float n = f * (0.55 + 0.45*pool) + heat;

    // Thin highlights — caustic-ish bands
    float band = smoothstep(0.55, 0.6, n) - smoothstep(0.6, 0.66, n);

    // Color ramp: deep umber → bronze → candlelight
    vec3 colDeep = vec3(0.05, 0.04, 0.030);
    vec3 colMid  = vec3(0.30, 0.20, 0.11);
    vec3 colHot  = vec3(0.78, 0.57, 0.35);
    vec3 colGlow = vec3(0.92, 0.76, 0.55);

    vec3 c = mix(colDeep, colMid, smoothstep(0.25, 0.55, n));
    c = mix(c, colHot, smoothstep(0.55, 0.78, n));
    c = mix(c, colGlow, smoothstep(0.82, 0.95, n));
    c += band * vec3(0.92, 0.76, 0.55) * 0.30;

    // Subtle vignette
    float vig = smoothstep(1.4, 0.4, length(p));
    c *= mix(0.45, 0.95, vig);

    // Film grain
    float g = (hash(uv*res + t)-0.5)*0.025;
    c += g;

    gl_FragColor = vec4(c, 1.0);
  }`;

  const prog = program(vs, fs);
  gl.useProgram(prog);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1]), gl.STATIC_DRAW);
  const aP = gl.getAttribLocation(prog, "p");
  gl.enableVertexAttribArray(aP);
  gl.vertexAttribPointer(aP, 2, gl.FLOAT, false, 0, 0);

  const uT = gl.getUniformLocation(prog, "t");
  const uRes = gl.getUniformLocation(prog, "res");
  const uMouse = gl.getUniformLocation(prog, "mouse");
  const uPressure = gl.getUniformLocation(prog, "pressure");

  let mouse = [0.7, 0.4];
  let target = [0.7, 0.4];
  let pressure = 0.0;
  let pressureTarget = 0.0;

  function resize() {
    const dpr = Math.min(devicePixelRatio || 1, 1.5);
    canvas.width = canvas.clientWidth * dpr;
    canvas.height = canvas.clientHeight * dpr;
    gl.viewport(0, 0, canvas.width, canvas.height);
  }
  resize();
  addEventListener('resize', resize);

  addEventListener('mousemove', (e) => {
    const r = canvas.getBoundingClientRect();
    target[0] = (e.clientX - r.left) / r.width;
    target[1] = 1 - (e.clientY - r.top) / r.height;
    pressureTarget = 0.6;
  });
  addEventListener('mousedown', () => { pressureTarget = 1.4; });
  addEventListener('mouseup', () => { pressureTarget = 0.6; });

  const start = performance.now();
  function frame() {
    const t = (performance.now() - start) / 1000;
    mouse[0] += (target[0] - mouse[0]) * 0.08;
    mouse[1] += (target[1] - mouse[1]) * 0.08;
    pressure += (pressureTarget - pressure) * 0.06;
    pressureTarget *= 0.985;

    gl.uniform1f(uT, t);
    gl.uniform2f(uRes, canvas.width, canvas.height);
    gl.uniform2f(uMouse, mouse[0], mouse[1]);
    gl.uniform1f(uPressure, pressure);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
