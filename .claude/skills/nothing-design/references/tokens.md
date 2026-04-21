# Nothing Design System — Tokens

## 1. TYPOGRAPHY

### Font Stack

| Role | Font | Fallback | Weight |
|------|------|----------|--------|
| **Display** | `"Doto"` | `"Space Mono", monospace` | 400–700, variable dot-size |
| **Body / UI** | `"Space Grotesk"` | `"DM Sans", system-ui, sans-serif` | Light 300, Regular 400, Medium 500, Bold 700 |
| **Data / Labels** | `"Space Mono"` | `"JetBrains Mono", "SF Mono", monospace` | Regular 400, Bold 700 |

**Why these fonts:** Doto = variable dot-matrix (closest to NDot 57). Space Grotesk + Space Mono by Colophon Foundry — same foundry as Nothing's actual typefaces. Shared design DNA.

### Type Scale

| Token | Size | Line Height | Letter Spacing | Use |
|-------|------|-------------|----------------|-----|
| `--display-xl` | 72px | 1.0 | -0.03em | Hero numbers, time displays |
| `--display-lg` | 48px | 1.05 | -0.02em | Section heroes, percentages |
| `--display-md` | 36px | 1.1 | -0.02em | Page titles |
| `--heading` | 24px | 1.2 | -0.01em | Section headings |
| `--subheading` | 18px | 1.3 | 0 | Subsections |
| `--body` | 16px | 1.5 | 0 | Body text |
| `--body-sm` | 14px | 1.5 | 0.01em | Secondary body |
| `--caption` | 12px | 1.4 | 0.04em | Timestamps, footnotes |
| `--label` | 11px | 1.2 | 0.08em | ALL CAPS monospace labels |

### Component APIs

**`<Text size={n}>`** — `app/components/typography/text.tsx`  
Numeric key = px value. Default `16`.

| size | Tailwind | leading |
|------|----------|---------|
| 12 | `text-xs` | 1.4 |
| 14 | `text-sm` | 1.5 |
| 16 | `text-base` | 1.7 |
| 18 | `text-lg` | 1.4 |
| 20 | `text-xl` | 1.4 |
| 24 | `text-2xl` | 1.2 |
| 30 | `text-3xl` | 1.2 |
| 36 | `text-4xl` | 1.1 |
| 48 | `text-5xl` | 1.05 |
| 60 | `text-6xl` | 1.0 |
| 72 | `text-7xl` | 1.0 |

**`<Subtitle size={n}>`** — `app/components/typography/subtitle.tsx`  
Same numeric keys, no leading override (font-nothing-subtitle handles it). Default `12`.

### Typographic Rules

- **Doto:** 36px+ only, tight tracking, never for body text
- **Labels:** Always Space Mono, ALL CAPS, 0.06–0.1em spacing, 11–12px ("instrument panel" labels)
- **Data/Numbers:** Always Space Mono. Units as `--label` size, slightly raised, adjacent
- **Hierarchy:** heading (Doto) > subheading (Space Grotesk) > label (Space Mono caps) > text (Space Grotesk). Four levels max.

---

## 2. COLOR SYSTEM

### Primary Palette (Dark Mode)

| Token | Hex | Contrast on #000 | Role |
|-------|-----|-------------------|------|
| `--surface` | `#000000` | — | Primary background (OLED) |
| `--card` | `#111111` | 1.3:1 | Elevated surfaces, cards |
| `--raised` | `#1A1A1A` | 1.5:1 | Secondary elevation |
| `--border` | `#222222` | — | Subtle dividers (decorative only) |
| `--outline` | `#333333` | — | Intentional borders, wireframe lines |
| `--disabled` | `#666666` | 4.0:1 | Disabled text, decorative elements |
| `--caption` | `#999999` | 6.3:1 | Labels, captions, metadata |
| `--body` | `#E8E8E8` | 16.5:1 | Body text |
| `--text-display` | `#FFFFFF` | 21:1 | Headlines, hero numbers |

### Accent & Status Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--accent` | `#D71921` | Signal light: active states, destructive, urgent. One per screen as UI element. Never decorative. |
| `--accent-subtle` | `rgba(215,25,33,0.15)` | Accent tint backgrounds |
| `--success` | `#4A9E5C` | Confirmed, completed, connected |
| `--warning` | `#D4A843` | Caution, pending, degraded |
| `--error` | `#D71921` | Shares accent red — errors ARE the accent moment |
| `--info` | `#999999` | Uses caption color |
| `--action` | `#F16A0D` | Tappable text: links, picker values. Not for buttons. |

**Data status colors:** `--success` = good/in range, `--warning` = moderate/attention, `--accent` = bad/over limit, `--body` = neutral. Apply color to **value**, not label or background. Labels stay `--caption`. Trend arrows inherit value color.

### Dark / Light Mode

| Token | Dark | Light |
|-------|------|-------|
| `--surface` | `#000000` | `#F5F5F5` |
| `--card` | `#111111` | `#FFFFFF` |
| `--raised` | `#1A1A1A` | `#F0F0F0` |
| `--border` | `#222222` | `#E8E8E8` |
| `--outline` | `#333333` | `#CCCCCC` |
| `--disabled` | `#666666` | `#999999` |
| `--caption` | `#999999` | `#666666` |
| `--body` | `#E8E8E8` | `#1A1A1A` |
| `--text-display` | `#FFFFFF` | `#000000` |
| `--action` | `#F16A0D` | `#F16A0D` |

**Identical across modes:** Accent red, status colors, ALL CAPS labels, fonts, type scale, spacing, component shapes.

**Dark feel:** Instrument panel in a dark room. OLED black, white data glowing.
**Light feel:** Printed technical manual. Off-white paper (#F5F5F5), black ink. Cards = `#FFFFFF` on off-white page = subtle elevation without shadows.

---

## 3. SPACING

### Spacing Scale (8px base)

Tailwind's default `--spacing: 0.25rem` scale covers every token exactly — no custom values needed.

| Token | Value | Use | Tailwind |
|-------|-------|-----|----------|
| `--space-2xs` | 2px | Optical adjustments only | `*-0.5` |
| `--space-xs` | 4px | Icon-to-label gaps, tight padding | `*-1` |
| `--space-sm` | 8px | Component internal spacing | `*-2` |
| `--space-md` | 16px | Standard padding, element gaps | `*-4` |
| `--space-lg` | 24px | Group separation | `*-6` |
| `--space-xl` | 32px | Section margins | `*-8` |
| `--space-2xl` | 48px | Major section breaks | `*-12` |
| `--space-3xl` | 64px | Page-level vertical rhythm | `*-16` |
| `--space-4xl` | 96px | Hero breathing room | `*-24` |

---

## 4. MOTION & INTERACTION

- **Duration:** 150–250ms micro, 300–400ms transitions
- **Easing:** `cubic-bezier(0.25, 0.1, 0.25, 1)` — subtle ease-out. No spring/bounce.
- Prefer opacity over position. Elements fade, don't slide.
- Hover: border/text brightens. No scale, no shadows.
- No parallax, scroll-jacking, gratuitous animation.

---

## 5. ICONOGRAPHY

- Monoline, 1.5px stroke, no fill. 24x24 base, 20x20 live area. Round caps/joins.
- Color inherits text color. Max 5–6 strokes.
- Preferred: Lucide (thin), Phosphor (thin). Never filled or multi-color.

---

## 6. DOT-MATRIX MOTIF

**When to use:** Hero typography (Doto), decorative grid backgrounds, dot-grid data viz, loading indicators, empty state illustrations.

### CSS Implementation (Tailwind v4 / globals.css)
```css
@utility dot-grid {
  background-image: radial-gradient(circle, var(--color-outline) 1px, transparent 1px);
  background-size: 16px 16px;
}
@utility dot-grid-subtle {
  background-image: radial-gradient(circle, var(--color-border) 0.5px, transparent 0.5px);
  background-size: 12px 12px;
}
```

Usage: `<div className="dot-grid absolute ... opacity-20 pointer-events-none" />`

Dots 1–2px, uniform 12–16px grid. Opacity 0.1–0.2 for backgrounds, full for data. Never as container border or button style.
