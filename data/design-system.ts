// ============================================================
// COLORS
// ============================================================

// prettier-ignore
export const BACKGROUND_SCALE = [
  { color: "bg-surface", name: "bg-surface", hex: "#000000" },
  { color: "bg-card",    name: "bg-card",    hex: "#111111" },
  { color: "bg-raised",  name: "bg-raised",  hex: "#1a1a1a" },
  { color: "bg-border",  name: "bg-border",  hex: "#222222" },
  { color: "bg-outline", name: "bg-outline", hex: "#333333" },
];

// prettier-ignore
export const COLORS = [
  { name: "card",          hex: "#111111", bg: "bg-card",          text: "text-body" },
  { name: "raised",        hex: "#1a1a1a", bg: "bg-raised",        text: "text-body" },
  { name: "border",        hex: "#222222", bg: "bg-border",        text: "text-body" },
  { name: "outline",       hex: "#333333", bg: "bg-outline",       text: "text-body" },
  { name: "disabled",      hex: "#666666", bg: "bg-disabled",      text: "text-black" },
  { name: "caption",       hex: "#999999", bg: "bg-caption",       text: "text-black" },
  { name: "body",          hex: "#e8e8e8", bg: "bg-body",          text: "text-black" },
  { name: "accent",        hex: "#d71921", bg: "bg-accent",        text: "text-title" },
  { name: "success",       hex: "#4a9e5c", bg: "bg-success",       text: "text-title" },
  { name: "warning",       hex: "#d4a843", bg: "bg-warning",       text: "text-black" },
  { name: "action",        hex: "#F16A0D", bg: "bg-action",        text: "text-black" },
  { name: "green-surface", hex: "#0a1a0d", bg: "bg-green-surface", text: "text-green-400" },
  { name: "green-border",  hex: "#1a3d22", bg: "bg-green-border",  text: "text-green-400" },
  { name: "green-muted",   hex: "#3d6645", bg: "bg-green-muted",   text: "text-title" },
  { name: "indigo-surface",hex: "#0d0d1a", bg: "bg-indigo-surface",text: "text-indigo-300" },
  { name: "indigo-border", hex: "#1e1e33", bg: "bg-indigo-border", text: "text-indigo-300" },
];

export const ACCENT_PALETTES = [
  {
    name: "green",
    label: "// building",
    textClass: "text-green-400",
    items: [
      { token: "bg-green-surface", hex: "#0a1a0d", label: "surface" },
      { token: "bg-green-border", hex: "#1a3d22", label: "border" },
      { token: "text-green-muted", hex: "#3d6645", label: "muted" },
      { token: "text-green-400", hex: "#4ade80", label: "text" },
    ],
  },
  {
    name: "indigo",
    label: "// writing",
    textClass: "text-indigo-400",
    items: [
      { token: "bg-indigo-surface", hex: "#0d0d1a", label: "surface" },
      { token: "bg-indigo-border", hex: "#1e1e33", label: "border" },
      { token: "text-indigo-300", hex: "#a5b4fc", label: "text light" },
      { token: "text-indigo-400", hex: "#818cf8", label: "text" },
    ],
  },
];

export const STATUS_COLORS = [
  { color: "text-success", value: "available" },
  { color: "text-warning", value: "in review" },
  { color: "text-accent", value: "urgent" },
  { color: "text-action", value: "view project" },
];

export const WHITE_SCALE = [
  { color: "text-title", value: "The quick brown fox" },
  { color: "text-body", value: "The quick brown fox" },
  { color: "text-caption", value: "The quick brown fox" },
  { color: "text-disabled", value: "The quick brown fox" },
];

// ============================================================
// TYPOGRAPHY
// ============================================================

export const HEADING_SIZES = [64, 48, 44] as const;

export const SUBTITLE_SIZES = [36, 30, 24, 20] as const;

export const TEXT_SIZES = [60, 48, 36, 30, 24, 20, 18, 16, 14, 12] as const;
