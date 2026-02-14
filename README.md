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
