# U1Dynamics — Next.js drop-in refactor

This folder contains the **industrial redesign** of the U1Dynamics home page, ported to your existing Next.js 16 / Tailwind v4 / TypeScript repo.

## What's in here

```
nextjs-refactor/
└── src/app/
    ├── layout.tsx                   ← replaces your root layout (SEO + fonts + JSON-LD + Header/Footer)
    ├── page.tsx                     ← replaces your home page (composes section components)
    ├── globals.css                  ← replaces your globals.css (industrial tokens + all section styles)
    └── components/
        ├── Header.tsx               ← industrial header (replaces existing)
        ├── Footer.tsx               ← industrial footer (replaces existing)
        ├── EmailLink.tsx            ← unchanged contract; drop-in compatible
        └── sections/
            ├── Hero.tsx             ← live-data hero with blend-control panel
            ├── Story.tsx            ← Ticker, Manifesto, Capabilities, SpecSheet
            ├── ProcessFacility.tsx  ← Process, Facility, Industries, USA
            └── Contact.tsx          ← RFQ form
```

## What I'm overwriting vs. leaving alone

**Overwriting** (these files get replaced in your repo):
- `src/app/layout.tsx` — new SEO metadata, next/font (Inter + Archivo Narrow + JetBrains Mono), JSON-LD schema (Organization + LocalBusiness + Service), Header/Footer wrap
- `src/app/page.tsx` — composes the 10 sections of the new home page
- `src/app/globals.css` — industrial tokens (`--ink-*`, `--volt`, `--paper`), three palettes via `[data-palette]`, and all section styles
- `src/app/components/Header.tsx` — industrial header (wordmark + nav + CTA, scroll-aware)
- `src/app/components/Footer.tsx` — industrial footer
- `src/app/components/EmailLink.tsx` — same public API as yours; safe to overwrite

**Leaving untouched** (should work as-is):
- `src/app/products/page.tsx`
- `src/app/contact/page.tsx`
- `src/app/sitemap.ts`, `src/app/robots.ts`
- `src/lib/schema.ts` (note: layout.tsx now ships JSON-LD inline — you can delete the old `lib/schema.ts` reference or keep it dual-emitting; duplicates won't hurt SEO)
- `tailwind.config.*`, `postcss.config.*`, `tsconfig.json`, `next.config.*`

## Install steps

From the root of your `u1dynamics` repo:

```bash
# 1. Back up what we're replacing
cp -r src/app src/app.backup

# 2. Drop in the new files (adjust path if you cloned this refactor elsewhere)
cp -r nextjs-refactor/src/app/* src/app/

# 3. Copy the facility image library into /public
mkdir -p public/images/facility
# then copy your existing blending/drums/aerial/etc. jpegs into public/images/facility/
# Expected filenames (matching the <Image> src strings):
#   drums-usa-workers.jpg
#   oil-pouring.jpg
#   aerial-hero.jpg
#   blending-vortex.jpg
#   bottling-line-worker.jpg
#   branded-truck.jpg
#   drums-usa-flag.jpg

# 4. Install (no new deps needed — everything ships with Next 16)
npm install

# 5. Run
npm run dev
```

Fonts are loaded via `next/font/google`, so no `<link>` tags or Google Fonts API calls in the browser — they're self-hosted at build time.

## Image assets

Every `<Image>` call references `/images/facility/<name>.jpg`. If you're reusing assets from the prototype in this project, they're at `public/images/facility/` in the prototype root — copy that folder to your Next.js `public/` directory.

If any image is missing, Next.js will throw a 404 in the browser console but won't crash the build. Start with the hero image (`drums-usa-workers.jpg`) and the aerial (`aerial-hero.jpg`) — those are the most visible.

## Palette switching

The design ships with three industrial palettes driven by `data-palette` on `<html>`:
- `midnight` (default) — volt-yellow accent on deep ink
- `steel` — ignition-orange on steel blue
- `carbon` — laser-red on carbon black

To switch, change the attribute in `layout.tsx`:
```tsx
<html lang="en" data-palette="steel" ...>
```

Or wire a runtime toggle (e.g. a client component that calls `document.documentElement.setAttribute("data-palette", ...)`).

## Known gaps vs. the prototype

The prototype had three optional sections I dropped for the Next.js port to keep scope tight:
- **Full Products grid** — 8 product cards. Your `/products` route already covers this.
- **Flagship (Ultra1Plus bottles)** — 9 SKU shelf. Lives more naturally on a dedicated page.
- **Fluid specimen** — magnified gear shot with annotations. Heavy decorative section; easy to add back later.

If you want any of these ported, they're in the prototype's `app.jsx` as `Products()`, `Flagship()`, and `Fluid()` — say the word and I'll port them.

## Font choice

The design uses:
- **Inter** for body + UI
- **Archivo Narrow** for display (all-caps headlines, industrial feel)
- **JetBrains Mono** for meta / tags / readouts

All three are loaded through `next/font/google` with `display: "swap"` and proper CSS variable wiring. No FOUT, no layout shift, no external network dependency at runtime.

## Deleting the old prototype files

Once you've dropped this in and verified the site renders, the prototype's standalone files (`index.html`, `app.jsx`, `styles.css`, `tweaks-panel.jsx` at the root of this project) are no longer needed for the production site. They were the exploration scaffolding.
