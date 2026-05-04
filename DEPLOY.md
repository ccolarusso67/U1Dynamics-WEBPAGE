# U1Dynamics — Deploy runbook (Cloudflare Pages)

Two phases: **Push to GitHub → Connect Cloudflare Pages**. Total ≈ 15 minutes. No DNS work needed (your domain is already on Cloudflare).

---

## Phase 1 · Push to GitHub

Repo: **github.com/ccolarusso67/U1Dynamics-WEBPAGE** (already exists, branch `main` has an old Next.js scaffold).

We push our static site to a **new branch** `static-launch` so the old work is preserved.

### Path A — GitHub web UI (no terminal)

1. Download this project as a zip from the project menu and unzip it.
2. Open https://github.com/ccolarusso67/U1Dynamics-WEBPAGE
3. Click the branch dropdown (top-left, says `main`) → type `static-launch` → click **"Create branch: static-launch from main"**.
4. With `static-launch` selected, click **Add file → Upload files**.
5. Drag the **contents** of the unzipped folder into the upload area. (If >100 files, do it in batches — commit between each.)
6. Commit message: `Static site v3 — Cloudflare Pages deploy, GA4/GTM, Consent Mode v2, Formspree`. Commit.

### Path B — Terminal

```bash
# In the unzipped project folder
git clone https://github.com/ccolarusso67/U1Dynamics-WEBPAGE.git ../U1D-temp
cd ../U1D-temp
git checkout -b static-launch
rsync -av --exclude='.git' ../<this-folder>/ .
git add .
git commit -m "Static site v3 — Cloudflare Pages deploy, GA4/GTM, Consent Mode v2, Formspree"
git push -u origin static-launch
```

(Auth: use a GitHub Personal Access Token with `repo` scope as the password.)

---

## Phase 2 · Cloudflare Pages

1. Go to https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Pick `ccolarusso67/U1Dynamics-WEBPAGE`. Authorize Cloudflare if prompted.
3. **Set up builds and deployments:**
   - **Production branch:** `static-launch`
   - **Framework preset:** None
   - **Build command:** *(leave blank)*
   - **Build output directory:** `v3`
   - **Root directory:** *(leave blank / `/`)*
4. Click **Save and Deploy**. First deploy takes ~30 seconds.
5. Cloudflare gives you a preview URL like `u1dynamics-webpage.pages.dev` — open it, confirm the site loads.

### Custom domains

Still in the Pages project → **Custom domains** tab:

1. Click **Set up a custom domain** → enter `u1dynamics.com` → **Continue** → **Activate domain**.
2. Repeat for `www.u1dynamics.com`.

Cloudflare auto-creates the DNS records (no manual edits) because your nameservers are already at Cloudflare. SSL certs issue automatically. Both domains go live in 1–2 minutes.

The www → apex redirect is handled by `v3/_redirects`.

---

## Phase 3 · Smoke checks

Once `https://u1dynamics.com` loads:

1. `https://www.u1dynamics.com` should 301 to apex.
2. DevTools → Network → response headers should include HSTS + X-Content-Type-Options + Cache-Control rules.
3. Cookie banner appears on first visit, disappears after Accept/Decline.
4. Submit a test RFQ — falls back to mailto: until you wire Formspree.

Then wire the real IDs (GA4 / GTM / Formspree) per `LAUNCH.md` §1, push to `static-launch`, Cloudflare auto-redeploys.

---

## Files Cloudflare Pages reads

| File | What it does |
|---|---|
| `v3/` | Site root (publish dir) |
| `v3/_headers` | Security headers + cache rules |
| `v3/_redirects` | www → apex, legacy paths → home |
| `wrangler.toml` | Optional — used only if deploying via Wrangler CLI |

Railway files (`Caddyfile`, `nixpacks.toml`, `railway.toml`) are kept in the repo as a fallback but ignored by Cloudflare Pages.

---

## Troubleshooting

| Symptom | Fix |
|---|---|
| Build succeeds but `/` is 404 | Build output directory is wrong — set it to `v3` |
| Custom domain stuck on "Verifying" | DNS needs 1–5 min; if longer, check the auto-created CNAME in Cloudflare DNS exists |
| GA4 shows zero events | You're on `*.pages.dev`. GA4 only fires on `u1dynamics.com` by design; add the preview hostname to `__U1_CFG.PROD_HOSTS` if you want events there |
| Form submits but nothing arrives | `FORMSPREE_FORM_ID` is still a placeholder — falls back to mailto: until you replace it |
