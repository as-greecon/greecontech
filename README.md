# Greecon Platform (v0 Foundation)

Unified SCADA/IoT operations platform foundation for energy, water, and agriculture.

## Prerequisites (Windows)
1. Install **Node.js 20+**: https://nodejs.org/
2. Install **pnpm**:
   ```powershell
   npm install -g pnpm
   ```

## Install
```powershell
pnpm install
```

## Run web app
```powershell
pnpm dev:web
```

Then open:
- `http://localhost:3000/overview`

## Health check
Open:
- `http://localhost:3000/api/health`

Expected response:
```json
{ "ok": true, "app": "greecontech" }
```

## Useful scripts
```powershell
pnpm lint:web
pnpm typecheck:web
pnpm build:web
```

## v0.2 Brand polish checks
If you see CSS/PostCSS errors locally, run a clean install first:
```powershell
pnpm install
pnpm dev:web
```
This workspace includes `autoprefixer` and PostCSS config in `apps/web` for stable Tailwind startup on Windows.

## Quick local run reminder
```powershell
pnpm install
pnpm dev:web
```
Open: `http://localhost:3000/overview`
