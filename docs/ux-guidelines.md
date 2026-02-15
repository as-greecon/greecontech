# UX Guidelines: Premium Minimalist

## Principles
- Calm and whitespace-heavy layout.
- Low-contrast neutrals with restrained accent usage.
- No gradients, no visual noise, no template-like decoration.

## Visual rules
- Primary neutral palette (`zinc`) with one accent:
  - `greecon.primary` = `#14a463`
  - `greecon.deep` = `#0b3b31`
- Rounded corners and subtle borders for structure.
- Typography: concise headings, quiet secondary text.

## Component behavior
- Sidebar navigation stays stable and predictable.
- Top bar keeps search + context actions lightweight.
- Data tables favor readability over density.
- Severity labels remain subtle and consistent.

## Empty states
- Every unfinished module must still feel intentional.
- Use clear title + one-sentence explanation.
- Avoid dead-ends; indicate what appears later.

## v0.2 polish notes
- Prefer `greecon.primary` for status accents instead of generic green tokens.
- Use `greecon.deep` only in low-opacity active surfaces.
- Keep borders subtle (`/50` to `/60` opacity on neutral strokes).

- Sidebar active nav item: bg-greecon-deep/10 + text-greecon-primary
