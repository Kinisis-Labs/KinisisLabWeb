# Kinisis Labs

Marketing site for Kinisis Labs — React + Vite + Tailwind v4, deployed to Azure Static Web Apps.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build      # outputs to dist/
npm run preview    # serve dist/ locally
```

## Deploy (Azure Static Web Apps)

A GitHub Actions workflow is included at `.github/workflows/azure-static-web-apps.yml`. It builds with `npm run build` and deploys `dist/` to Azure SWA on every push to `main`.

### One-time setup

1. Push this repo to GitHub.
2. In your Azure Static Web App resource → **Manage deployment token**, copy the token.
3. In your GitHub repo → **Settings → Secrets and variables → Actions → New repository secret**:
   - Name: `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - Value: the token from step 2.

> **Migrating from the auto-generated workflow Azure created for you?**
> Azure's portal-generated workflow uses a randomized secret name like `AZURE_STATIC_WEB_APPS_API_TOKEN_<RANDOM>`. Either rename your existing secret to `AZURE_STATIC_WEB_APPS_API_TOKEN`, or edit `.github/workflows/azure-static-web-apps.yml` to match your existing secret name.

The SPA fallback, caching, and MIME rules live in `staticwebapp.config.json`.

## Project structure

```
src/
  components/        # Header, Hero, Pillars, Capabilities, CTA, Footer, Logo, ui/
  pages/             # Home, not-found
  hooks/             # use-mobile, use-toast
  lib/utils.ts       # cn() helper
  App.tsx            # wouter router
  main.tsx           # entry
  index.css          # Tailwind v4 + theme tokens
public/              # favicon, hero-bg, opengraph, robots.txt
staticwebapp.config.json
.github/workflows/azure-static-web-apps.yml
```
