# CLAUDE.md - Project Instructions for Claude Code

## Project Overview

Portfolio website for Jeph Mari built with Next.js 15 (App Router), React 19, and TypeScript. Features AI/neural-network themed design with canvas animations, dark/light theme support, Supabase backend, and Vercel deployment.

## Tech Stack

- **Framework:** Next.js 15.5 (App Router, Turbopack)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 4 + CSS custom properties in `globals.css`
- **Animations:** Framer Motion, GSAP, Canvas API (for neural network visuals)
- **Forms:** React Hook Form + Zod validation
- **Backend:** Supabase (PostgreSQL) — tables: `projects`, `blog_posts`, `contact_messages`
- **Icons:** Lucide React
- **Theming:** next-themes + custom ThemeProvider with CSS variable system
- **Deployment:** Vercel

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (providers, nav, footer, metadata)
│   ├── page.tsx            # Home page (section orchestrator)
│   ├── globals.css         # CSS variables, custom classes, keyframes
│   ├── blog/               # /blog route
│   ├── pricing/            # /pricing route
│   ├── projects/           # /projects route
│   └── leadsgeneration/    # /leadsgeneration route
├── components/
│   ├── layout/             # Navigation.tsx, Footer.tsx
│   ├── sections/           # Page sections (Hero, About, Services, etc.)
│   ├── providers/          # ThemeProvider, SmoothScrollProvider
│   └── ui/                 # Reusable components (Button, Card, etc.)
├── lib/                    # Utilities (supabase.ts, cookieManager.ts, dateUtils.ts, smoothScroll.ts)
public/                     # Static assets (logos, photos, backgrounds)
```

## Commands

- `npm run dev` — Start dev server (Turbopack)
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — ESLint check

## Coding Conventions

### Components
- Functional components only with hooks
- Named exports: `export const ComponentName = () => { ... }`
- `"use client"` directive on components using browser APIs, hooks, or interactivity
- Props defined as TypeScript interfaces

### Naming
- **Components/files:** PascalCase (`Hero.tsx`, `Navigation.tsx`)
- **Utilities/functions:** camelCase (`smoothScrollTo`, `handleSubmit`)
- **Constants:** UPPER_SNAKE_CASE (`COOKIE_CONSENT_KEY`)
- **CSS classes:** kebab-case (`gradient-text`, `glow-border-ai`)

### Imports
- Use path alias `@/*` which maps to `./src/*`
- Group: React imports first, then components, then utilities

### Styling
- Tailwind utility classes as primary styling method
- Theme colors via CSS variables (`var(--primary)`, `var(--background)`, etc.)
- Custom classes in `globals.css` for reusable patterns (`.btn-primary`, `.card`, `.gradient-text`)
- Mobile-first responsive design with Tailwind breakpoints (sm, md, lg, xl, 2xl)
- Respect `prefers-reduced-motion` for animations

### TypeScript
- Strict mode enabled — no `any` types without justification
- Database types defined in `src/lib/supabase.ts`
- Interface over type alias for component props

## Key Patterns

- **ThemeProvider** wraps the app; access via `useTheme()` hook
- **Canvas animations** in Hero and Contact sections use `requestAnimationFrame`
- **Cookie consent** managed by `CookieManager` class in `src/lib/cookieManager.ts`
- **Form submission** uses React Hook Form → Supabase `.insert()`
- **Navigation** uses smooth scroll to section IDs with fixed navbar offset
- **SEO** via Next.js Metadata API, JSON-LD schema, dynamic sitemap, robots.ts

## Environment Variables

- `NEXT_PUBLIC_SUPABASE_URL` — Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Supabase anonymous key

## Important Notes

- ESLint is configured but ignored during builds (`ignoreDuringBuilds: true` in next.config.ts)
- No test framework is set up — no tests exist yet
- Container max-width is 1628px (custom, defined in globals.css)
- The theme uses orange as primary color (`#FF6B35`) with dark background (`#000000`) as default
