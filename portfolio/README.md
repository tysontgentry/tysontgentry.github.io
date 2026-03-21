# Tyson Gentry — React portfolio

Vite + React + Framer Motion. Content lives in `src/data/content.js`.

## Setup

1. Install [Node.js](https://nodejs.org/) (LTS).
2. In this folder:

```bash
cd portfolio
npm install
```

3. **Resume:** copy your PDF to `public/resume.pdf` so the “View resume” button works (or change `resumePath` in `src/data/content.js`).

```bash
# Example (adjust source path):
cp "/path/to/Tyson Gentry resume v2 (2).pdf" public/resume.pdf
```

## Development

```bash
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview   # optional: test the production build locally
```

Output is in `dist/`.

## Deploy to GitHub Pages (`username.github.io`)

**Option A — GitHub Actions (recommended)**  
If this repo is `tysontgentry.github.io` and this project lives in a `portfolio/` subfolder, add the workflow from `.github/workflows/deploy-portfolio.yml` (at the **repo root**, not inside `portfolio/`). It builds `portfolio/` and publishes `dist/` to the `gh-pages` branch.

Then in the repo **Settings → Pages**: set source to **Deploy from a branch**, branch **`gh-pages`**, folder **`/ (root)`**.

**Option B — Manual**  
Run `npm run build`, then upload the contents of `dist/` to your hosting (or push `dist` to the `gh-pages` branch yourself).

### `base` URL

`vite.config.js` uses `base: '/'`, which is correct for `https://tysontgentry.github.io/` **or** a custom domain at the site root.  
If you ever host under a subpath (e.g. `username.github.io/repo-name/`), set `base: '/repo-name/'` in `vite.config.js`.

### Custom domain: `tysongentry.com`

The file `public/CNAME` contains `tysongentry.com`. Vite copies it into `dist/` on build so GitHub Pages knows your domain.

1. **Buy the domain** at a registrar (Namecheap, Google Domains, Cloudflare, etc.) if you don’t own `tysongentry.com` yet.

2. **In your GitHub repo** (the one that hosts Pages, e.g. `tysontgentry.github.io`):  
   **Settings → Pages → Custom domain** → enter `tysongentry.com` → Save.  
   Enable **Enforce HTTPS** after DNS propagates.

3. **DNS at your registrar** (example for apex + `www`):

   | Type | Name | Value |
   |------|------|--------|
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | CNAME | `www` | `tysontgentry.github.io` |

   (Use your **actual** GitHub username in the CNAME target if it differs.)

4. **Wait** for DNS (often 15 minutes–48 hours), then open `https://tysongentry.com`.

**Note:** Your GitHub username is `tysontgentry`; the domain `tysongentry.com` is a separate branding choice—just keep DNS and the repo’s Custom domain field consistent with the domain you own.
