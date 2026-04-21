# Nothing Design System — Components

## 1. CARDS / SURFACES

- Background: `--card` or `--raised`
- Border: `1px solid --border`, or none. Radius: 12–16px cards, 8px compact, 4px technical
- Padding: 16–24px. No shadows. Flat surfaces, border separation.

---

## 2. BUTTONS

| Variant     | Background              | Border                  | Text           | Radius       |
| ----------- | ----------------------- | ----------------------- | -------------- | ------------ |
| Primary     | `--text-display` (#FFF) | none                    | `--surface`    | 999px (pill) |
| Secondary   | transparent             | `1px solid --outline`   | `--body`       | 999px        |
| Ghost       | transparent             | none                    | `--caption`    | 0            |
| Destructive | transparent             | `1px solid --accent`    | `--accent`     | 999px        |

All buttons: `Space Mono`, 13px, ALL CAPS, letter-spacing 0.06em, padding 12px 24px. Min height 44px.

---

## 3. INPUTS

- Underline preferred (`1px solid --outline` bottom) or full border 8px radius
- Label above: `--label` style (Space Mono, ALL CAPS, `--caption`)
- Focus: border → `--body`. Error: border → `--accent`, message below in `--accent`
- Data-entry fields: `Space Mono` for input text

---

## 4. LISTS / DATA ROWS

- Dividers: `1px solid --border`, full-width. Row padding: 12–16px vertical
- Left: label (Space Mono caps, `--caption`). Right: value (`--body`)
- Never alternating row backgrounds. Use dividers.

**Stat rows:** Label left (Space Mono, ALL CAPS, `--caption`), value right (color = status color), unit adjacent in `--label` size. Trend arrow same color as value.

**Hierarchical rows:** Sub-items indented 16–24px, same divider treatment. No tree lines or expand/collapse — indentation IS the hierarchy.

---

## 5. TABLES / DATA GRIDS

- Header: `--label` style, bottom border `--outline`
- Cell text: `Space Mono` numeric, `Space Grotesk` text. Cell padding: 12px 16px
- Numbers right, text left. No zebra striping, no cell backgrounds.
- Active row: `--raised` background, left `2px solid --accent` indicator

---

## 6. NAVIGATION

- Bottom bar mobile, horizontal text bar desktop
- Labels: Space Mono, ALL CAPS. Active: `--text-display` + dot/underline. Inactive: `--disabled`
- Bracket `[ HOME ]  GALLERY  INFO` or pipe `HOME | GALLERY | INFO`
- **Back button:** Circular 40–44px, `--card` bg, thin chevron `<`, top-left 16px from edges

---

## 7. TAGS / CHIPS

- Border: `1px solid --outline`, no fill. Text: Space Mono, `--caption`, ALL CAPS
- Radius: 999px (pill) or 4px (technical). Padding: 4px 12px. Active: `--text-display` border+text

---

## 8. SEGMENTED CONTROL

- Container: `1px solid --outline`, pill or 8px rounded
- Active: `--text-display` bg, `--surface` text (inverted). Inactive: transparent, `--caption`
- Text: Space Mono, ALL CAPS, `--label` size. Height: 36–44px. Transition: 200ms ease-out
- Max 2–4 segments

---

## 9. DATE / PERIOD NAVIGATION

- Layout: `< LABEL >` — back arrow, label, forward arrow
- Label: Space Mono/Grotesk, ALL CAPS. Arrows: thin chevrons, `--caption`, 44px touch
- No calendar popovers — linear stepping IS the interaction

---

## 10. TOGGLES / SWITCHES

- Pill track, circle thumb. Off: `--outline` track, `--disabled` thumb
- On: `--text-display` track, `--surface` thumb. Min touch target: 44px

---

## 11. SEGMENTED PROGRESS BARS

The signature data visualization. Discrete blocks — mechanical, instrument-like.

**Anatomy:** Label + value above, full-width bar of discrete rectangular segments with 2px gaps below.

**Segments:** Square-ended blocks, no border-radius. Filled = solid status color. Empty = `--border` (dark) / `#E0E0E0` (light).

| State      | Fill             | When                |
| ---------- | ---------------- | ------------------- |
| Neutral    | `--text-display` | Within normal range |
| Over limit | `--accent`       | Exceeds target      |
| Good       | `--success`      | Healthy range       |
| Moderate   | `--warning`      | Caution zone        |

**Overflow:** Filled segments continue past "full" mark in status color (typically red).

**Sizes:** Hero 16–20px, Standard 8–12px, Compact 4–6px height.

Always pair with numeric readout. Bar = proportion, number = precision.

---

## 12. OTHER DATA VISUALIZATION

- **Bar charts:** Vertical, white fill, `--border` remainder. Square ends.
- **Gauges:** Thin stroke circles + tick marks, numeric readout centered/adjacent.
- **Dot grids:** Vary opacity/size for heat maps. Uniform spacing.
- **Category differentiation:** Opacity → pattern → line style → color (last resort).
- Always show numeric value alongside any visual.

**Charts:** Line 1.5–2px `--text-display`, average dashed 1px `--caption`. Axis labels: Space Mono, `--caption`. Grid: `--border`, horizontal only. No area fill, no legend boxes — label lines directly.

---

## 13. WIDGETS (DASHBOARD CARDS)

- `--card` bg, 16px radius. Hero metric: large Doto/Space Mono, left-aligned
- Unit: `--label` size, adjacent. Category: ALL CAPS Space Mono top-left
- Instrument gauges: compass, thermometer, dial motifs

---

## 14. OVERLAYS & LAYERING

No shadows. Layering through background contrast and borders.

- **Modals:** Backdrop `rgba(0,0,0,0.8)`, dialog `--card` + `1px solid --outline` + 16px radius, centered max 480px. Close: `[ X ]` top-right ghost button.
- **Bottom sheets:** `--card`, 2px handle bar centered, 16px top radius, drag-to-dismiss. Full-page sheets: title centered + dismiss button right, sections with `--caption` headings.
- **Dropdowns:** `--raised`, `1px solid --outline` 8px radius, 44px items. Selected: left 2px accent bar. No shadow.
- **Toasts:** None. Use inline status text: `[SAVED]`, `[ERROR: ...]`. Space Mono, `--caption`, near trigger.

---

## 15. STATE PATTERNS

- **Error:** Input border → `--accent` + message below. Form-level: summary box `1px solid --accent`. Inline: `[ERROR]` prefix. Never red backgrounds or alert banners.
- **Empty:** Centered, 96px+ padding. Headline `--caption`, 1 sentence description `--disabled`. Optional dot-matrix illustration. No mascots.
- **Loading:** Segmented spinner (hardware-style), or segmented bar + percentage. No skeletons — use `[LOADING]` bracket text.
- **Disabled:** Opacity 0.4 or `--disabled`. Borders fade to `--border`.
