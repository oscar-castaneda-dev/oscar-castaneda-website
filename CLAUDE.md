# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
pnpm dev         # Start dev server (Next.js 16 on http://localhost:3000)
pnpm build       # Production build
pnpm lint        # ESLint (no test suite exists)
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

`app/layout.tsx` — Root layout. Sets up fonts and global metadata.

## Typography Components

**Never use raw `<p>`, `<span>`, `<h1>`–`<h3>` for text.** Always use the typography components:

- `Heading` — `app/components/typography/heading.tsx` — Doto font, hero headings
- `Subtitle` — `app/components/typography/subtitle.tsx` — Space Mono, uppercase labels
- `Text` — `app/components/typography/text.tsx` — Space Grotesk, body content

Raw HTML text elements are only acceptable inside these components themselves, not in pages or feature components.

## Design Skill

This project has the `/nothing-design` skill available. **You must invoke it with the Skill tool before any design or UI task** — new pages, components, sections, or visual changes. The skill contains the design system rules and patterns and must guide every visual decision in the project.

## Design System ("Nothing Design")

Dark mode only. All design tokens live in `app/globals.css` under `@theme`, which makes them available as Tailwind utilities automatically.

**Colors** — custom tokens in `@theme` (use as `bg-*`, `text-*`, `border-*`). Pure black/white use Tailwind's `black`/`white`:

- `surface` (#000) · `card` (#111) · `raised` (#1a1a1a)
- `border` (#222) · `outline` (#333)
- `disabled` (#666) · `caption` (#999) · `body` (#e8e8e8) · `title` (#fff)
- `accent` (#d71921) · `success` · `warning` · `action`

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
