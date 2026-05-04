# DNS setup — Network Solutions

You registered `u1dynamics.com` at Network Solutions. There's one catch: **Network Solutions does not support ALIAS / ANAME / flattened-CNAME records at the apex domain.** Railway's preferred target is a hostname (`*.up.railway.app`), not a fixed IP — so you need one of two paths.

---

## Path A — Stay on Network Solutions DNS (use raw A records)

The simplest path. Works today, but if Railway ever rotates their edge IPs you'll need to update these records manually.

### Step 1 — Get Railway's IP(s)

In Railway → your project → **Settings → Networking → Custom Domain → `u1dynamics.com`**.

Railway will show you a row with one of two formats:
- A hostname like `gateway.up.railway.app` → **see Path B; A records won't work cleanly**
- One or more IPv4 addresses like `66.33.22.105` → **use these in step 2**

If Railway only gives you a hostname, run this from any terminal to extract its IPs:

```bash
dig +short gateway.up.railway.app
```

Copy every IPv4 address it returns. There may be one, or several.

### Step 2 — Add records in Network Solutions

1. Log in at https://www.networksolutions.com → **My Account** → **Domains** → click `u1dynamics.com`.
2. Click **Manage** (or **DNS / Nameservers**) → **Advanced DNS Records** / **Edit DNS**.
3. **Delete** any existing `A`, `CNAME`, or **parking-page** records pointing the apex or `www` to Network Solutions' default landing.
4. Add these:

   | Type  | Host / Refers to | Numeric IP / TTL                              |
   |-------|------------------|------------------------------------------------|
   | `A`   | (leave blank for apex, or `@`) | Railway IP #1 · TTL 1 hour      |
   | `A`   | (leave blank for apex, or `@`) | Railway IP #2 (if Railway gave more) |
   | `CNAME` | `www`           | `<railway-target>.up.railway.app` · TTL 1 hour |

   Network Solutions uses different verbs in different parts of their UI ("IP Address Records" = A, "Aliases" = CNAME). If you see a wizard, pick **A (Address)** for the apex and **CNAME (Alias)** for www.

5. **Save**. Network Solutions takes 15–60 minutes to propagate.

### Step 3 — Verify

```bash
dig u1dynamics.com +short
dig www.u1dynamics.com +short
```

The first should return Railway's IP(s). The second should return `<something>.up.railway.app`. Then visit https://u1dynamics.com — Caddy provisions the SSL cert on first hit.

---

## Path B — Move DNS to Cloudflare (recommended)

Domain stays registered at Network Solutions. Only the **nameservers** change. Cloudflare is free, faster, and supports flattened CNAMEs at the apex — so you can point at Railway's hostname and never worry about IP changes.

### Step 1 — Add the site to Cloudflare

1. Sign up at https://dash.cloudflare.com/sign-up (free).
2. **Add a Site** → enter `u1dynamics.com` → choose the **Free** plan.
3. Cloudflare will scan existing DNS. **Pause and audit the imported records** — delete anything that points to a Network Solutions parking page (often a `forwarding` `A` record or a default `MX`).
4. Cloudflare will give you **two nameservers** that look like `xxx.ns.cloudflare.com` and `yyy.ns.cloudflare.com`. Copy both.

### Step 2 — Repoint nameservers at Network Solutions

1. Log in to Network Solutions → **My Account** → **Domains** → `u1dynamics.com`.
2. Click **Change Nameservers** (sometimes under **Manage** → **Nameservers**).
3. Choose **"Use custom nameservers"**.
4. Paste the two Cloudflare nameservers. Save.
5. Nameserver changes take **2–24 hours** to propagate. Cloudflare emails you when they detect the change.

### Step 3 — Add the Railway records in Cloudflare

While you wait, set up the records (they'll go live as soon as nameservers propagate):

In Cloudflare → DNS → **Records → Add record**:

| Type    | Name | Target                              | Proxy status |
|---------|------|-------------------------------------|--------------|
| `CNAME` | `@`  | `<railway-target>.up.railway.app`   | **DNS only** (gray cloud) |
| `CNAME` | `www`| `<railway-target>.up.railway.app`   | **DNS only** (gray cloud) |

> **Critical:** keep the proxy as a **gray cloud (DNS only)** until Railway has issued the Let's Encrypt cert. After https://u1dynamics.com works, you can flip to orange (proxied) — but only if you also set Cloudflare SSL/TLS mode to **Full (strict)**. Anything else loops.

### Step 4 — Verify

```bash
dig NS u1dynamics.com +short            # should return cloudflare.com nameservers
dig u1dynamics.com +short               # should return Railway IP(s) flattened
dig www.u1dynamics.com +short           # should return Railway hostname or IP
```

Visit https://u1dynamics.com.

---

## What Railway expects to see

Once DNS resolves, Railway's custom-domain page will flip from "Pending DNS" to a **green checkmark**. At that point Caddy auto-provisions a Let's Encrypt cert (takes ~30 seconds). The first request after issuance may show a brief 502 — that's normal.

`https://www.u1dynamics.com` will 301 to `https://u1dynamics.com` thanks to the redirect rule already in our `Caddyfile`.

---

## Email — heads-up

If you have email at `@u1dynamics.com` through Network Solutions or Google Workspace:
- **Path A:** Your existing MX records stay untouched. No impact.
- **Path B:** When Cloudflare imports DNS, it imports MX too — **double-check those rows are present** before changing nameservers, or your email will break. If they're missing, add them manually before flipping nameservers.

If you don't have email yet, ignore this section.

---

## TL;DR — what to send me

So I can give you the exact two records:

1. From Railway → **Settings → Networking → Custom Domain → u1dynamics.com**, paste the **target value** Railway gave you (the `*.up.railway.app` hostname OR the IPv4 address).
2. Tell me which path you're taking (A or B).

I'll write the literal values to type into the DNS form.
