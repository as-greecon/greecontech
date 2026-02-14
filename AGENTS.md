# Greecon Platform Agent Guide

Greecon is a unified operations platform for energy, water, and agriculture.
It will combine SCADA visibility, IoT telemetry, alarms, and control workflows.
The platform is multi-tenant by design for enterprise and utility operators.
UI and architecture must prioritize long-term maintainability over short-term hacks.
Every change must be safe, modular, and easy for beginners to run locally.
This repository is the single source of truth for the full platform foundation.

## Working rules (strict)
- One milestone per PR only. No big-bang changes.
- Every milestone must include code, docs, and local run instructions.
- Keep dependencies minimal and justified.
- If checks fail, fix before continuing.
- If environment restrictions block installs, commit correct code and document "run locally".

## Milestone gating
A milestone is complete only when all are true:
1. Scope is focused and small.
2. Documentation is updated.
3. Local run commands are explicit.
4. Lint and typecheck are executed (or environment limitation is documented).

## Repository structure
- `apps/web`: Next.js web dashboard and API routes.
- `apps/edge`: edge service placeholder for future device connectivity.
- `packages/core`: shared domain types and validators.
- `packages/db`: database interfaces and adapters (no concrete DB in v0).
- `packages/policy`: authorization/RBAC helper utilities.
- `docs/`: architecture, domain model, UX principles, roadmap.

## PR process
- Branch from `main` using milestone-aligned naming.
- Keep PR title focused on one milestone.
- Include summary, checks run, limitations, and exact local run steps.
- Never mix unrelated refactors into milestone PRs.
