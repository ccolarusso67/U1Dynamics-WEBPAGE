#!/bin/bash
# Installs trust strip: 6 certs + 6 retail partners between hero and manifesto.
# Run from project root: bash _install/trust-strip.sh

set -e

PROJECT_ROOT="/Users/carminecolarusso/Desktop/Claude/U1Dynamics-WEBPAGE"
cd "$PROJECT_ROOT"

PAGE="src/app/page.tsx"
CSS="src/app/globals.css"

if [ ! -f "$PAGE" ]; then
  echo "ERROR: $PAGE not found"
  exit 1
fi

# Backup
cp "$PAGE" "$PAGE.bak.trust"
cp "$CSS" "$CSS.bak.trust"

# --- Append CSS ---
cat >> "$CSS" << 'CSSEOF'

/* === Trust Strip ============================================ */
.trust-strip {
  border-top: 1px solid var(--steel-700, #2a2d31);
  border-bottom: 1px solid var(--steel-700, #2a2d31);
  background: var(--steel-950, #0d0e10);
  padding: 3rem 0;
}
.trust-strip + .trust-strip { border-top: 0; }
.trust-inner {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}
.trust-label {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--steel-400, #8a8f96);
  margin-bottom: 1.75rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.trust-label::before {
  content: "";
  width: 24px;
  height: 1px;
  background: var(--ignition, #d84a1d);
}
.trust-row {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 2rem;
  align-items: center;
}
.trust-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 0.5rem;
  min-height: 88px;
}
.trust-item img {
  max-width: 100%;
  max-height: 52px;
  width: auto;
  height: auto;
  object-fit: contain;
  filter: grayscale(100%) brightness(0) invert(0.72);
  opacity: 0.75;
  transition: opacity 200ms ease, filter 200ms ease;
}
.trust-item:hover img {
  opacity: 1;
  filter: grayscale(0%) brightness(1) invert(0);
}
.trust-item.retail img {
  max-height: 36px;
}
.trust-caption {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 9.5px;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--steel-500, #6b7177);
  text-align: center;
  line-height: 1.3;
}
@media (max-width: 900px) {
  .trust-row { grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
  .trust-item { min-height: 72px; }
  .trust-item img { max-height: 40px; }
  .trust-item.retail img { max-height: 28px; }
  .trust-strip { padding: 2rem 0; }
}
@media (max-width: 480px) {
  .trust-row { grid-template-columns: repeat(2, 1fr); }
}
CSSEOF

echo "✓ CSS appended"

# --- Patch page.tsx ---
# Insert the TrustStrip JSX block after the hero/ticker section, before the manifesto.
# We anchor on the manifesto section opener.

python3 << 'PYEOF'
import re, sys

path = "src/app/page.tsx"
with open(path) as f:
    src = f.read()

trust_jsx = '''
      {/* === Trust Strip: Certifications ================== */}
      <section className="trust-strip" aria-label="Certifications and standards">
        <div className="trust-inner">
          <div className="trust-label">Certifications · Standards · Verifications</div>
          <div className="trust-row">
            <div className="trust-item">
              <img src="/images/trust/cert-2.png" alt="API" />
              <div className="trust-caption">American Petroleum<br/>Institute</div>
            </div>
            <div className="trust-item">
              <img src="/images/trust/cert-3.png" alt="ILMA" />
              <div className="trust-caption">Independent Lubricant<br/>Manufacturers Assoc.</div>
            </div>
            <div className="trust-item">
              <img src="/images/trust/cert-4.png" alt="PQIA" />
              <div className="trust-caption">Petroleum Quality<br/>Institute of America</div>
            </div>
            <div className="trust-item">
              <img src="/images/trust/cert-5.png" alt="US Verified Vendor" />
              <div className="trust-caption">U.S. Verified<br/>Vendor</div>
            </div>
            <div className="trust-item">
              <img src="/images/trust/cert-6.png" alt="NMMA" />
              <div className="trust-caption">National Marine<br/>Manufacturers Assoc.</div>
            </div>
            <div className="trust-item">
              <img src="/images/trust/cert-7.png" alt="SAE" />
              <div className="trust-caption">Society of<br/>Automotive Engineers</div>
            </div>
          </div>
        </div>
      </section>

      {/* === Trust Strip: Retail Partners ================== */}
      <section className="trust-strip" aria-label="Retail partners">
        <div className="trust-inner">
          <div className="trust-label">Shipped to 32 countries · Stocked at major retailers</div>
          <div className="trust-row">
            <div className="trust-item retail">
              <img src="/images/trust/retail-amazon.png" alt="Amazon" />
            </div>
            <div className="trust-item retail">
              <img src="/images/trust/retail-autozone.png" alt="AutoZone" />
            </div>
            <div className="trust-item retail">
              <img src="/images/trust/retail-walmart.png" alt="Walmart" />
            </div>
            <div className="trust-item retail">
              <img src="/images/trust/retail-tractor.png" alt="Tractor Supply" />
            </div>
            <div className="trust-item retail">
              <img src="/images/trust/retail-northern.png" alt="Northern Tool" />
            </div>
            <div className="trust-item retail">
              <img src="/images/trust/retail-ebay.png" alt="eBay" />
            </div>
          </div>
        </div>
      </section>

'''

# Find the manifesto section and insert trust strip BEFORE it.
# Look for common anchors in order of preference.
anchors = [
    r'(\s*\{/\*\s*===\s*Manifesto)',
    r'(\s*<section[^>]*className="manifesto)',
    r'(\s*<section[^>]*id="manifesto)',
]

inserted = False
for pat in anchors:
    m = re.search(pat, src)
    if m:
        src = src[:m.start()] + trust_jsx + src[m.start():]
        inserted = True
        print(f"✓ Inserted before anchor: {pat}")
        break

if not inserted:
    # Fallback: insert before the FIRST section that contains "manifest" or "About" or first h2
    print("WARN: no manifesto anchor found. Looking for first <section> after hero...")
    # Find all <section tags
    sections = list(re.finditer(r'<section[^>]*>', src))
    if len(sections) >= 2:
        # Insert before the 2nd section (after hero)
        pos = sections[1].start()
        src = src[:pos] + trust_jsx + src[pos:]
        print(f"✓ Inserted before section 2 at offset {pos}")
        inserted = True

if not inserted:
    print("ERROR: could not find insertion point")
    sys.exit(1)

with open(path, 'w') as f:
    f.write(src)

print("✓ page.tsx patched")
PYEOF

echo ""
echo "=========================="
echo "✓ Trust strip installed."
echo "=========================="
echo ""
echo "Backups saved:"
echo "  $PAGE.bak.trust"
echo "  $CSS.bak.trust"
echo ""
echo "Reload http://localhost:3002 (Cmd+Shift+R)"
