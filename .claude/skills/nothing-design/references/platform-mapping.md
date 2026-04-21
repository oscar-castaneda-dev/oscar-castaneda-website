# Nothing Design System — Platform Mapping

## 1. HTML / CSS / WEB

Load fonts via Google Fonts `<link>` or `@import`. Use CSS custom properties, `rem` for type, `px` for spacing/borders. Dark/light via `prefers-color-scheme` or class toggle.

```css
:root {
  --surface: #000000;
  --card: #111111;
  --raised: #1A1A1A;
  --border: #222222;
  --outline: #333333;
  --disabled: #666666;
  --caption: #999999;
  --body: #E8E8E8;
  --text-display: #FFFFFF;
  --accent: #D71921;
  --accent-subtle: rgba(215,25,33,0.15);
  --success: #4A9E5C;
  --warning: #D4A843;
  --action: #F16A0D;
}
```

---

## 2. SWIFTUI / iOS

Register fonts in Info.plist, bundle `.ttf` files. Use `@Environment(\.colorScheme)` for mode switching.

```swift
extension Color {
    static let ndSurface  = Color(hex: "000000")
    static let ndCard     = Color(hex: "111111")
    static let ndRaised   = Color(hex: "1A1A1A")
    static let ndBorder   = Color(hex: "222222")
    static let ndOutline  = Color(hex: "333333")
    static let ndDisabled = Color(hex: "666666")
    static let ndCaption  = Color(hex: "999999")
    static let ndBody     = Color(hex: "E8E8E8")
    static let ndDisplay  = Color.white
    static let ndAccent   = Color(hex: "D71921")
    static let ndSuccess  = Color(hex: "4A9E5C")
    static let ndWarning  = Color(hex: "D4A843")
    static let ndAction   = Color(hex: "F16A0D")
}
```

Light mode values in tokens.md Dark/Light table. Derive Font extension from font stack table (trivial: `.custom("Doto"/"SpaceGrotesk-Regular"/"SpaceMono-Regular", size:)`).

---

## 3. PAPER (DESIGN TOOL)

Use `get_font_family_info` to verify fonts before writing styles. Direct hex values (no CSS variables). Dark mode as default canvas, light mode as separate artboard.

---

## 4. REACT / TAILWIND (NEXT.JS)

Load fonts via `next/font/google`. Tokens live in `globals.css` under `@theme`. Pure black/white use Tailwind's built-ins; everything else is a custom color token.

### Color Token → Tailwind Class

| Design Token | Tailwind Class |
|---|---|
| `--surface` (bg) | `bg-surface` |
| `--title` (#FFF) | `text-title` |
| `--card` | `bg-card` |
| `--raised` | `bg-raised` |
| `--border` | `border-border` |
| `--outline` | `border-outline` |
| `--disabled` | `text-disabled` |
| `--caption` | `text-caption` |
| `--body` | `text-body` |
| `--accent` | `text-accent` / `bg-accent` / `border-accent` |
| `--accent-subtle` | `bg-accent-subtle` |
| `--success` | `text-success` / `bg-success` |
| `--warning` | `text-warning` |
| `--action` | `text-action` |

### Type Scale → Tailwind Class

| Design Token | Size | Tailwind |
|---|---|---|
| `--label` | 11px, Space Mono, ALL CAPS, tracking 0.08em | `nd-label` (custom `@utility`) |
| `--caption` | 12px | `text-xs` |
| `--body-sm` | 14px | `text-sm` |
| `--body` | 16px | `text-base` |
| `--subheading` | 18px | `text-lg` |
| `--heading` | 24px | `text-2xl` |
| Space Mono body | — | `font-mono` |
| Doto display | — | `nd-doto` / `font-display` |

### Spacing Token → Tailwind Scale

Uses Tailwind's default `--spacing: 0.25rem` multiplier.

| Token | Value | Tailwind |
|---|---|---|
| `--space-xs` | 4px | `*-1` |
| `--space-sm` | 8px | `*-2` |
| `--space-md` | 16px | `*-4` |
| `--space-lg` | 24px | `*-6` |
| `--space-xl` | 32px | `*-8` |
| `--space-2xl` | 48px | `*-12` |
| `--space-3xl` | 64px | `*-16` |
| `--space-4xl` | 96px | `*-24` |

### Custom Utilities (globals.css)

```css
@utility nd-label   { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; line-height: 1.2; }
@utility nd-doto    { font-family: var(--font-display); }
@utility nd-mono    { font-family: var(--font-mono); }
@utility dot-grid   { background-image: radial-gradient(circle, var(--color-outline) 1px, transparent 1px); background-size: 16px 16px; }
@utility dot-grid-subtle { background-image: radial-gradient(circle, var(--color-border) 0.5px, transparent 0.5px); background-size: 12px 12px; }
```

### Component Patterns

**Primary button** (white pill, black text):
```tsx
<button className="inline-flex items-center gap-2 py-3 px-6 bg-white text-black rounded-full font-mono text-[13px] tracking-[0.06em] uppercase font-bold transition-opacity duration-150">
  LABEL
</button>
```

**Secondary button** (outlined pill):
```tsx
<button className="inline-flex items-center gap-2 py-3 px-6 border border-outline text-body rounded-full font-mono text-[13px] tracking-[0.06em] uppercase transition-colors duration-150">
  LABEL
</button>
```

**Tag / chip** (technical, 4px radius):
```tsx
<span className="nd-label text-body py-1 px-4 border border-outline rounded">
  LABEL
</span>
```

**Tag / chip** (pill):
```tsx
<span className="nd-label text-caption py-1 px-3 border border-outline rounded-full">
  LABEL
</span>
```

**Nav label** (active / inactive):
```tsx
<span className="nd-label text-white">[ ACTIVE ]</span>
<span className="nd-label text-disabled">INACTIVE</span>
```

**Section label** (tertiary marker):
```tsx
<p className="nd-label text-caption mb-8">01 — SECTION TITLE</p>
```

**Dot-grid background** (decorative):
```tsx
<div className="dot-grid absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none" />
```

**Surface card**:
```tsx
<div className="bg-card border border-border rounded-xl p-6">
  {/* content */}
</div>
```

**Data row** (list item with divider):
```tsx
<div className="grid grid-cols-[1fr_auto] items-center py-4 border-b border-border">
  <span className="nd-label text-caption">LABEL</span>
  <span className="nd-label text-white">VALUE</span>
</div>
```
