# AGENTS.md

## Package manager

Use **pnpm**. Both `package-lock.json` and `pnpm-lock.yaml` (v9) exist, but pnpm is primary.

## Commands

| Task | Command |
|------|---------|
| Dev server | `pnpm dev` |
| Build | `pnpm build` |
| Lint | `pnpm lint` |

No test framework is configured.

## Stack & versions

- **Next.js 16** (App Router) + **React 19**
- **Tailwind CSS v4** — no `tailwind.config` file. All theme tokens, colors, fonts, keyframes, and utilities live in `src/app/globals.css` via `@theme inline` and CSS custom properties. Do NOT create a `tailwind.config` — nothing will pick it up.
- **shadcn/ui** `base-nova` style, RSC mode, TypeScript. Components go in `src/components/ui/`.
- **TypeScript** strict mode. Path alias `@/*` → `./src/*`.

## Conventions

- All components and pages use `'use client'` (the site is heavily animated, no RSC data fetching).
- Components are in `src/components/` (one-off) and `src/components/ui/` (reusable). No `/app/_components/` pattern.
- Utility: `cn()` from `@/lib/utils` for class merging.
- ESLint flat config v9 (`eslint.config.mjs`) with Next.js core-web-vitals + TypeScript plugins.

## GSAP + Lenis sync (critical)

Smooth scrolling and scroll-driven animations require a specific init order in every page that uses GSAP ScrollTrigger:

1. Import and register `ScrollTrigger` plugin before usage.
2. Create a `Lenis` instance, sync it to `ScrollTrigger.update`.
3. Add Lenis RAF to `gsap.ticker` and call `gsap.ticker.lagSmoothing(0)`.
4. Clean up in the effect return.

See `src/app/page.tsx:28-44` for the canonical pattern. If you add scroll-triggered GSAP animations anywhere, follow this exact setup or animations will break.

## Mobile vs desktop rendering

- `useIsMobile(768)` returns `boolean | null`. **Always guard with `if (isMobile === null) return null`** before rendering to avoid hydration mismatches.
- Mobile → `ScrollyCanvas` (240-frame canvas sequence scrubbed by scroll).
- Desktop → `MinimalistHero` (photo + Framer Motion overlays).
- Both GSAP **and** Framer Motion are used across different components. Don't mix them inside the same element's animation lifecycle.

## Images & assets

- Primary images are on Cloudinary: `res.cloudinary.com/dlw6fupap` with `f_auto,q_auto` transforms.
- Local fallbacks and asset catalog in `src/lib/images.ts`. Always reference images through this file rather than hardcoding URLs.
- Next.js `next.config.ts` allows Cloudinary and Unsplash remote patterns.

## Fonts

- **Active**: Anton (headings) + Inter (body), loaded via `next/font/google` in `src/app/layout.tsx`.
- **Planned but not loaded**: Monument Extended. The `public/fonts/README.md` says to place `.woff2` files there, but no `@font-face` exists in `globals.css`. Do not use Monument Extended unless the setup is completed.

## Known gaps

- `/audio/producer-tag.mp3` is referenced in `MinimalistHero` but does not exist in the repo. The component handles the 404 gracefully.
- `hero.html` at the root is a legacy Tailwind CDN prototype — ignore it, it's not part of the Next.js app.
- `src/app/tests/page.tsx` is a component showcase/demo page, not actual tests.
- `node_modules/next/dist/docs/` does not exist in current Next.js 16. Ignore any stale references to it.
