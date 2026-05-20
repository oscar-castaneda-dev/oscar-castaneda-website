# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
pnpm dev         # Start dev server (Next.js 16 on http://localhost:3000)
pnpm build       # Production build
pnpm lint        # ESLint (no test suite exists)
```

## TypeScript

Prefer `interface` over `type` where possible (object shapes, component props). Use `type` only when `interface` can't express it: unions, mapped types, utility types (`Record`, `Pick`, etc.).

## Stack

- **Next.js 16.2.2** with React 19 — App Router, TypeScript
- **Tailwind CSS v4** via `@tailwindcss/postcss` (PostCSS plugin, not the v3 CLI approach)
- **Google Fonts** via `next/font/google`: Space Grotesk, Space Mono, Doto

## Architecture

This is a personal portfolio site with three routes:

- `/` (`app/page.tsx`) — Home: hero, projects list, footer. Projects are hardcoded inline.
- `/about` (`app/about/page.tsx`) — Bio, stats strip, tech stack, contact CTA.
- `/work/[slug]` (`app/work/[slug]/page.tsx`) — Project case study. Project data is a hardcoded object keyed by slug; unknown slugs fall back to `"nothing-phone"`.

`app/layout.tsx` — Root layout. Sets up fonts and global metadata.

## Typography

Use raw HTML elements (`<h1>`–`<h3>`, `<p>`, `<span>`) with utility classes directly. No typography wrapper components.

**Heading utilities** (defined in `globals.css`) — Doto font, responsive `clamp()` sizing, always `text-title`:

- `heading-64` — hero headings (~128px desktop)
- `heading-48` — section heroes (~100px desktop)
- `heading-44` — page titles (~72px desktop)
- `heading-36` — subsection headings (~36px desktop)

**Subtitle / labels** — `font-nothing-subtitle` (Space Mono, uppercase, tracking 0.08em). Does not set color — always pair with `text-caption`, `text-body`, or `text-title`.

**Body text** — `font-sans` (Space Grotesk) + Tailwind `text-*` size + color class (`text-body`, `text-caption`, etc.).

## Design Skill

This project has the `/nothing-design` skill available. **You must invoke it with the Skill tool before any design or UI task** — new pages, components, sections, or visual changes. The skill contains the design system rules and patterns and must guide every visual decision in the project.

## Design System ("Nothing Design")

Dark mode only. All design tokens live in `app/globals.css` under `@theme`, which makes them available as Tailwind utilities automatically.

**Colors** — custom tokens in `@theme` (use as `bg-*`, `text-*`, `border-*`). Pure black/white use Tailwind's `black`/`white`:

- `surface` (#000) · `card` (#111) · `raised` (#1a1a1a)
- `border` (#222) · `outline` (#333)
- `disabled` (#666) · `caption` (#999) · `body` (#e8e8e8) · `title` (#fff)
- `accent` (#d71921) · `success` · `warning` · `action`

**Accent palettes** — tinted card surfaces for contextual sections. Use the custom tokens for backgrounds/borders; use Tailwind's built-in scale for text:

- Green (building / side-projects): `bg-green-surface` (#0a1a0d) · `border-green-border` (#1a3d22) · `text-green-muted` (#3d6645) · `text-green-400`
- Indigo (writing / blog): `bg-indigo-surface` (#0d0d1a) · `border-indigo-border` (#1e1e33) · `text-indigo-300` · `text-indigo-400`

**Spacing** — uses Tailwind's default numeric scale (`--spacing: 0.25rem`). Common values: `1`=4px · `2`=8px · `4`=16px · `6`=24px · `8`=32px · `12`=48px · `16`=64px · `24`=96px

**Fonts** — use as `font-*` Tailwind classes:

- `font-sans` — Space Grotesk (body)
- `font-mono` — Space Mono
- `font-display` — Doto (hero headings only)

**Custom utilities** (defined via `@utility` in `globals.css`):

- `font-nothing-subtitle` — Space Mono, uppercase, letter-spacing 0.08em. Does NOT set color — always pair with a `text-*` class.
- `font-nothing-code` / `font-nothing-dots` — font-family shortcuts
- `dot-grid` / `dot-grid-subtle` — radial-gradient dot pattern backgrounds
- `.container` — overrides Tailwind's container; max-width 1280px, horizontal padding `2xl`
