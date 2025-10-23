# My Portfolio (Nude Minimal)

This is a small React + Vite portfolio template with a warm nude aesthetic, intended for a junior software developer.

## Project structure

- `src/` — React source
  - `components/` — Header, Hero, Projects, About, Contact, Footer
  - `pages/` — `Home` (landing) and `Work` (projects/about/contact)
  - `styles.css` — central theme and layout
- `index.html` — Vite entry
- `package.json` — scripts and dependencies

## Quick local development

1. Install dependencies

```bash
npm install
```

2. Start dev server

```bash
npm run dev
```

Open http://localhost:5173

## Production build

```bash
npm run build
```

This project uses Vite and TypeScript. The default `build` script will run `tsc -b` (project build) and `vite build` to produce an optimized `dist/` folder.

## Deploying

- **Vercel (recommended for simple React sites)**

  1. Connect your GitHub repo to Vercel.
  2. Select the project root. Vercel auto-detects Vite projects.
  3. Build command: `npm run build`
  4. Output directory: `dist`
  5. Deploy — Vercel will handle continuous deploys on push.

- **Netlify**

  1. Connect your GitHub repo in Netlify and create a new site.
  2. Build command: `npm run build`
  3. Publish directory: `dist`
  4. Optionally add a `netlify.toml` with functions or redirects.

- **GitHub Pages (manual)**
  1. Build locally: `npm run build`.
  2. Serve `dist/` either by committing to `gh-pages` branch or using `actions` to push `dist` to `gh-pages`.

## SPA routing notes

- The app uses `react-router-dom` (BrowserRouter). For Netlify you may need a `_redirects` file with:

```
/* /index.html 200
```

or the equivalent `netlify.toml` rule so client-side routing works on refresh.

## Next steps (optional)

- Replace placeholder content (name/email/projects) in `src/components/*` and `src/pages/*`.
- Replace header anchors with `Link` from `react-router-dom` for SPA navigation.
- Add `_redirects` or `netlify.toml` for Netlify.
- Add GitHub Actions or Vercel integration for CI/CD.

If you want, I can add any of the optional items above (Netlify `_redirects`, replacing anchors with `Link`, or automated deploy workflow).
