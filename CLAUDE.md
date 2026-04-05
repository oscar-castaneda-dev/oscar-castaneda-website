# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server (Next.js 16 on http://localhost:3000)
npm run build    # Production build
npm run lint     # ESLint (no test suite exists)
```

## Stack

- **Next.js 16.2.2** with React 19 — App Router, TypeScript
- **Tailwind CSS v4** via `@tailwindcss/postcss` (PostCSS plugin, not the v3 CLI approach)
- **Google Fonts** via `next/font/google`: Space Grotesk, Space Mono, Doto

## Architecture

This is a personal portfolio site with three routes:

- `/` (`app/page.tsx`) — Home: hero, projects list, footer. Projects are hardcoded inline.
- `/about` (`app/about/page.tsx`) — Bio, stats strip, tech stack, contact CTA.
- `/work/[slug]` (`app/work/[slug]/page.tsx`) — Project case study. Project data is a hardcoded object keyed by slug; unknown slugs fall back to `"nothing-phone"`.

`app/layout.tsx` — Root layout. Injects an inline `<script>` before first paint to apply the saved theme class (`light`/`dark`) on `<html>`, avoiding a flash. Uses `suppressHydrationWarning` on `<html>` for this reason.

`app/components/ThemeToggle.tsx` — `"use client"` component. Reads/writes `localStorage` key `"theme"`, toggles `.light`/`.dark` classes on `document.documentElement`.

## Design Skill

This project has the `/nothing-design` skill available. **You must invoke it with the Skill tool before any design or UI task** — new pages, components, sections, or visual changes. The skill contains the design system rules and patterns and must guide every visual decision in the project.

## Design System ("Nothing Design")

Dark mode only. All design tokens live in `app/globals.css` under `@theme`, which makes them available as Tailwind utilities automatically.

**Colors** — custom tokens in `@theme` (use as `bg-*`, `text-*`, `border-*`). Pure black/white use Tailwind's `black`/`white`:

- `surface` (#111) · `surface-raised` (#1a1a1a)
- `border` (#222) · `border-visible` (#333)
- `muted` (#666) · `subtle` (#999) · `body` (#e8e8e8)
- `accent` (#d71921) · `success` · `warning` · `interactive`

**Spacing** — uses Tailwind's default numeric scale (`--spacing: 0.25rem`). Common values: `1`=4px · `2`=8px · `4`=16px · `6`=24px · `8`=32px · `12`=48px · `16`=64px · `24`=96px

**Fonts** — use as `font-*` Tailwind classes:

- `font-sans` — Space Grotesk (body)
- `font-mono` — Space Mono
- `font-display` — Doto (hero headings only)

**Custom utilities** (defined via `@utility` in `globals.css`):

- `nd-label` — Space Mono, 11px, uppercase, tracked. Does NOT set color — always pair with a `text-*` class.
- `nd-mono` / `nd-doto` — font-family shortcuts
- `dot-grid` / `dot-grid-subtle` — radial-gradient dot pattern backgrounds
- `.container` — overrides Tailwind's container; max-width 1280px, horizontal padding `2xl`
