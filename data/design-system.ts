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
  { name: "card",        hex: "#111111", bg: "bg-card",        text: "text-body" },
  { name: "raised",      hex: "#1a1a1a", bg: "bg-raised",      text: "text-body" },
  { name: "border",      hex: "#222222", bg: "bg-border",      text: "text-body" },
  { name: "outline",     hex: "#333333", bg: "bg-outline",     text: "text-body" },
  { name: "disabled",    hex: "#666666", bg: "bg-disabled",    text: "text-black" },
  { name: "caption",     hex: "#999999", bg: "bg-caption",     text: "text-black" },
  { name: "body",        hex: "#e8e8e8", bg: "bg-body",        text: "text-black" },
  { name: "accent",      hex: "#d71921", bg: "bg-accent",      text: "text-title" },
  { name: "success",     hex: "#4a9e5c", bg: "bg-success",     text: "text-title" },
  { name: "warning",     hex: "#d4a843", bg: "bg-warning",     text: "text-black" },
  { name: "action",      hex: "#F16A0D", bg: "bg-action",      text: "text-black" },
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
