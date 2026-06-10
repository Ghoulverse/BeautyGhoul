# BEAUTY GHOUL — Deployment Guide

**Domain:** `https://www.beautyghoul.com`  
**Description:** Beauty & glamour cleaning products

---

## Build

```bash
npm install
npm run build
```

Output: `dist/` (Vite static build)

## Deploy

### Cloudflare Pages (Recommended)

```bash
npx wrangler pages deploy dist --project-name=beautyghoul-com --branch=main
```

### GitHub Actions

Pushes to `main` auto-deploy via `.github/workflows/deploy.yml`.

### DNS

- `www.beautyghoul.com` → CNAME → `beautyghoul-com.pages.dev`
- `beautyghoul.com` → CNAME → `beautyghoul-com.pages.dev`

Managed in Cloudflare DNS.

---

*Part of the GHOULVERSE ecosystem. See root `DEPLOY.md` for ecosystem-wide deployment.*
