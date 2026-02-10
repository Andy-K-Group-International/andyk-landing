# Andy'K Landing Page — Claude Code Rules

## Project Overview

**Product:** Andy'K Group International corporate landing page
**Stack:** Next.js 16 + React 19 + TypeScript 5 + Tailwind CSS v4
**Status:** Active development, not yet deployed

This is the public-facing landing page for Andy'K Group International LTD, showcasing A.D.A.M. & E.V.A. automation systems, B2B/B2G/Tech services, and pricing plans.

## Critical Rules

### 1. Design System Compliance

**NEVER** break the existing design language. Every change must follow `docs/DESIGN_PLAN.md`.

- Colors: ONLY use theme tokens from `globals.css` (`--color-foreground`, `--color-eggplant`, `--color-highlight`, `--color-rose`, `--color-muted`, `--color-grid-*`)
- Fonts: IBM Plex Sans (body) + IBM Plex Mono (labels/code). NO other fonts.
- Tap targets: 44px minimum height for all interactive elements (mobile-first)
- Components: Check `src/components/` before creating new ones. Extend existing first.

### 2. File Structure

```
src/
  app/
    layout.tsx          # Root layout (fonts, metadata)
    page.tsx            # Homepage (component composition)
    globals.css         # Theme tokens + utility classes
    onboarding/         # TODO: Create this route
  components/           # All React components (flat, no nesting)
  lib/
    data.ts             # ALL text content and pricing data
```

### 3. Content Management

**ALL text content lives in `src/lib/data.ts`** — never hardcode strings in components.

When adding new content:
1. Add data export to `data.ts`
2. Import and use in component
3. Keep types consistent with existing patterns

### 4. Mobile-First

Every component is designed mobile-first. When modifying:
- Start with 375px layout
- Use `sm:`, `md:`, `lg:`, `xl:` breakpoints to expand
- Bottom sheets on mobile, modals/sidebars on desktop
- Test at: 375px (iPhone SE), 768px (iPad), 1200px (desktop)

### 5. Performance

- Landing page must score Lighthouse > 95
- No client-side JS on static sections (prefer server components)
- Only use `"use client"` when truly needed (state, event handlers)
- Images via `next/image` with proper `width`/`height`/`alt`
- Lazy load below-fold sections

### 6. Code Style

- Components are flat files in `src/components/` — one component per file
- Named exports for sub-components, default export for main component
- Tailwind classes inline (no separate CSS files per component)
- Custom CSS ONLY in `globals.css` when Tailwind can't express it
- No unused imports or dead code

### 7. Git Workflow

- Never commit `node_modules/`, `.next/`, or build artifacts
- Commit messages: imperative mood, concise (e.g., "Add onboarding route")
- One logical change per commit

## What to Build Next

See `docs/KANBAN.md` for the prioritized task board.
See `docs/MVP_PRD.md` for detailed requirements per feature.
See `docs/DESIGN_PLAN.md` for the design system reference.

## Commands

```bash
npm run dev     # Start dev server (localhost:3000)
npm run build   # Production build
npm run lint    # ESLint
npx playwright test  # E2E tests
```

## Company Information

- **Company:** Andy'K Group International LTD
- **Reg No:** 16453500
- **Address:** 86-90 Paul Street, London, EC2A 4NE, UK
- **CEO:** Andrej Kneisl
- **CTO:** Kobe Janssens
- **Email:** info@andykgroupinternational.com
- **Systems:** A.D.A.M. (Automated Document & Account Manager) + E.V.A. (Efficient Virtual Assistant)
