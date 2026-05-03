![Oscar Castaneda](./public/preview.webp)

# oscar-castaneda.dev

Personal portfolio. AI Engineer specializing in ML, NLP, and inference-powered digital products.

## Stack

- **Next.js 16** with React 19
- **Tailwind CSS v4**
- **Fonts:** Space Grotesk (body), Space Mono (labels), Doto (headings)

## Routes

- `/` — Home: hero, projects grid, footer
- `/about` — Bio, stats strip, tech stack, contact CTA
- `/work` — Selected work list
- `/work/[slug]` — Project case studies
- `/design-system` — Live design system reference
- `/404` — Custom not found page

## Design System

Dark mode only. Custom "Nothing" design system with colors, typography, and spacing all defined as Tailwind utilities in `app/globals.css`.

**Colors**

- Backgrounds: `surface` (#000), `card` (#111), `raised` (#1a1a1a)
- Borders: `border` (#222), `outline` (#333)
- Text: `caption` (#999), `body` (#e8e8e8), `title` (#fff)
- Status: `accent` (#d71921), `success`, `warning`, `action`

**Typography components** — raw HTML text elements are not used in pages or feature components:

- `Heading` — Doto font, sizes 44/48/64, used for hero headings
- `Subtitle` — Space Mono, sizes 20/24/30/36, uppercase labels
- `Text` — Space Grotesk, sizes 12–60, body content

**Custom utility classes:**

- `font-nothing-subtitle` — Space Mono, uppercase, tracked
- `font-nothing-dots` — Doto font shortcut
- `font-nothing-code` — monospace shortcut

## Git Hooks

Uses **Husky** with lint-staged. On every commit, ESLint runs against staged `.ts` and `.tsx` files with `--max-warnings=0` — the commit is blocked if any warning or error is found.

## Dev

```bash
pnpm dev         # localhost:3000
pnpm build
pnpm lint
```
