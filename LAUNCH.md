# U1Dynamics — Launch checklist

Everything is wired against `v3/` as the canonical site. Railway builds with `nixpacks.toml`, serves `v3/` (+ root `robots.txt`, `sitemap.xml`, `og-image.png`, `logo.png`, favicons) from `/app/public` via Caddy.

---

## 1 · Replace placeholders before going live

Search-and-replace these tokens across the project:

| Token | Where it lives | What to replace it with |
|---|---|---|
| `G-XXXXXXXXXX` | `v3/index.html` (`__U1_CFG.GA4_ID`) | GA4 Measurement ID — GA4 → Admin → Data Streams → Web |
| `GTM-XXXXXXX` | `v3/index.html` (`__U1_CFG.GTM_ID` + noscript iframe src) | GTM Container ID — tagmanager.google.com |
| `FORMSPREE_FORM_ID` | `v3/index.html` (`__U1_CFG.FORMSPREE_ID`) | Formspree form hash — formspree.io → New Form → copy the `f/abcd1234` part |
| `GSC_TOKEN` | `v3/index.html` (commented `<meta name="google-site-verification">`) | Search Console verification — uncomment the meta and paste |
| `BING_TOKEN` | `v3/index.html` (commented `<meta name="msvalidate.01">`) | Bing Webmaster verification |

The site auto-detects production hosts (`u1dynamics.com`, `www.u1dynamics.com`) — GA4 and GTM **only fire there**, so previews stay clean. If you change the host, update `__U1_CFG.PROD_HOSTS` in `v3/index.html`.

---

## 2 · Formspree setup (5 min)

1. Sign up at https://formspree.io (free tier = 50 submissions/mo).
2. Create a form, set the destination email to `info@u1dynamics.com` (or whichever inbox).
3. Copy the form hash from the endpoint `https://formspree.io/f/<HASH>`.
4. Paste it into `__U1_CFG.FORMSPREE_ID` in `v3/index.html`.
5. Verify by submitting the form on the live site once — Formspree will email a confirmation link.

If `FORMSPREE_FORM_ID` is left in place, the form **falls back to mailto:** so the site still works.

---

## 3 · Railway deploy

The repo is configured for Railway's Nixpacks builder.

```
nixpacks.toml      # build steps + Caddy install
Caddyfile          # static file server + canonical redirect + cache headers
railway.toml       # Railway-specific deploy hints
```

Steps:
1. **Create a Railway project** → "Deploy from GitHub repo" (or Railway CLI `railway init`).
2. **Set custom domain** in Railway → Settings → Domains → `u1dynamics.com` and `www.u1dynamics.com`. Add the CNAME / A records Railway shows you to your DNS.
3. **First deploy** — push to main; Nixpacks runs `cp -r v3/. public/`, then Caddy starts.
4. **Verify HTTPS** — Caddy auto-provisions a Let's Encrypt cert once DNS resolves.
5. **Check the canonical redirect** — `https://www.u1dynamics.com/` should 301 to `https://u1dynamics.com/`.

---

## 4 · GA4 / GTM / Consent Mode v2

Already wired:
- ✅ Consent Mode v2 — defaults all categories to `denied`, granted on banner accept.
- ✅ Cookie banner with Accept / Decline (persists choice in `localStorage`).
- ✅ GA4 `gtag.js` with IP anonymization, automatic page_view.
- ✅ GTM container snippet (head + noscript iframe).
- ✅ Outbound-link → `click_outbound` event.
- ✅ `tel:` clicks → `phone_click` event.
- ✅ `mailto:` clicks → `email_click` event.
- ✅ RFQ submit → `generate_lead` event with `program`, `volume`, `timeline` parameters.

Post-launch in GA4:
1. **Mark `generate_lead` as a Key Event** — GA4 → Admin → Events → toggle the star.
2. **Mark `phone_click`, `spec_download` as secondary conversions** for the funnel view.
3. **Link Google Ads & Search Console** — Admin → Product Links.
4. **Build audiences** — "viewed Private Label", "viewed DEF", "downloaded spec" (per the SWOT GA4 plan).

---

## 5 · SEO post-launch tasks

Same day:
- [ ] **Submit sitemap** in Search Console (`https://u1dynamics.com/sitemap.xml`)
- [ ] **Submit sitemap** in Bing Webmaster Tools
- [ ] **Validate JSON-LD** at https://search.google.com/test/rich-results
- [ ] **Validate OG tags** at https://developers.facebook.com/tools/debug
- [ ] **Run PageSpeed Insights** — capture LCP / CLS / INP baseline
- [ ] **Claim Google Business Profile** — 4468 Genoa Red Bluff Rd, Pasadena, TX 77505

Within first week:
- [ ] **Backlink push** — Ultra1Plus, parent Ultrachem, LinkedIn company page, AAPEX listing
- [ ] **Add hreflang `/es/`** subfolder for LATAM markets (32 of 44 markets)
- [ ] **Add Product schema** when SKU pages ship

---

## 6 · File map (what gets served)

```
/                           → v3/index.html
/styles.css                 → v3/styles.css
/*.jsx                      → React component files
/fluid.js, /globe.js        → Hero canvas + globe
/logo.png                   → 2511×1488 trimmed brand mark
/og-image.png               → 1200×630 social card
/favicon-32.png /-16.png    → Browser favicons
/apple-touch-icon.png       → 180×180 iOS home-screen icon
/robots.txt                 → Disallows /v2/, /uploads/, /screens/, etc.
/sitemap.xml                → 7 in-page anchors today; expand when /services + /industries ship
```

---

## 7 · From the SWOT — what's next after Sprint 01

Sprint 01 (this PR) closes the foundations row in the roadmap. Sprint 02 priorities:

1. **Build /services/* and /industries/* pages** — use `nextjs-refactor/` skeleton; pre-render to static.
2. **Real testimonials + Review schema** — replace placeholder names like "North-American Fleet Services".
3. **Spanish landing page** at `/es/` with `hreflang="es-419"`.
4. **Lazy-init the fluid canvas** to push LCP under 2.5s on mobile.

See `v3/swot.html` for the full 90-day roadmap and KPI targets.
