# U1Dynamics — SEO & Analytics setup checklist

A one-page reference for what's wired into the site and what you need to fill in before going live.

## 1. Replace placeholder IDs

Search-and-replace across `index.html`:

| Placeholder | What to put there | Where to get it |
|---|---|---|
| `G-XXXXXXXXXX` | GA4 Measurement ID | GA4 → Admin → Data Streams → Web stream |
| `GTM-XXXXXXX` | GTM Container ID | tagmanager.google.com → Container |
| `REPLACE_WITH_TOKEN` (commented) | Google Search Console verification | search.google.com/search-console |
| `REPLACE_WITH_BING_TOKEN` (commented) | Bing Webmaster Tools | bing.com/webmasters |
| `+1-000-000-0000` | Real sales phone number | JSON-LD + contactPoint |

## 2. What's already built in

### On every page
- ✅ `<title>` + meta description optimized for target keywords
- ✅ Canonical URL
- ✅ Robots directive (`index, follow, max-image-preview:large`)
- ✅ Open Graph (Facebook/LinkedIn) tags
- ✅ Twitter Card tags
- ✅ Geo meta tags (Houston, TX)
- ✅ `viewport`, `color-scheme`, `theme-color` for mobile
- ✅ `preconnect` / `dns-prefetch` to Google Fonts, GTM, GA
- ✅ SVG favicon (inline, zero-weight)

### Structured data (JSON-LD)
- ✅ `Organization` — logo, founding, parent company, social profiles
- ✅ `LocalBusiness` — address, geo, hours (feeds Google Maps & local pack)
- ✅ `Service` + `OfferCatalog` — core capabilities
- ✅ `BreadcrumbList`
- ✅ `FAQPage` — rich-result eligible

### Analytics
- ✅ GTM snippet (head + noscript body fallback)
- ✅ GA4 gtag.js with IP anonymization & automatic page_view
- ✅ Outbound-link click tracking → `click_outbound` event
- ✅ Contact form submit → `generate_lead` event

### Accessibility / crawlability
- ✅ Semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `article`, `footer`)
- ✅ ARIA labels on regions, labelled-by on headings
- ✅ Skip-to-content link
- ✅ All form inputs have associated labels
- ✅ `lang="en"`, valid HTML5
- ✅ Responsive grid; mobile-friendly per Google's rubric

## 3. Files to upload to the web root

```
/                    → index.html
/styles.css
/app.jsx
/tweaks-panel.jsx
/robots.txt          ← update if you add more sections
/sitemap.xml         ← regenerate when URLs change
/og-image.png        ← 1200×630, add this (referenced in OG tags)
/logo.png            ← referenced in JSON-LD
```

## 4. After launch — post-launch checklist

1. **Submit to Search Console** — verify domain, submit `sitemap.xml`.
2. **Submit to Bing Webmaster Tools** — same sitemap.
3. **Run PageSpeed Insights** — target LCP < 2.5s, CLS < 0.1, INP < 200ms.
4. **Test rich results** — paste URL into search.google.com/test/rich-results.
5. **Validate OG tags** — developers.facebook.com/tools/debug & cards-dev.twitter.com.
6. **Set up GA4 conversions** — mark `generate_lead` as a Key Event.
7. **Link GA4 to Google Ads** (if running campaigns).
8. **Register on Google Business Profile** — claim the Houston location for local pack ranking.

## 5. Target keywords (used in copy + meta)

Primary:
- lubricant blending
- contract packaging
- private label motor oil
- Houston lubricant manufacturer

Secondary:
- specialty fluids manufacturer
- custom formulation
- contract blending Texas
- DEF manufacturer
- hydraulic fluid blender
- private label lubricants

## 6. Content expansion (recommended next)

Static home + JS-rendered sections rank fine, but for **strongest SEO lift**, add dedicated `/services/*` and `/industries/*` pages — each targeting a single keyword with 800+ words. I can build those next if you want.
