import { cn } from "@/lib/cn";

const sizes = {
  20: "text-xl",
  24: "text-2xl",
  30: "text-3xl",
  36: "text-4xl",
} as const;

const colors = {
  caption: "text-caption",
  disabled: "text-disabled",
  white: "text-white",
  body: "text-body",
  success: "text-success",
  warning: "text-warning",
  accent: "text-accent",
} as const;

interface SubtitleProps {
  size?: keyof typeof sizes;
  color?: keyof typeof colors;
  as?: "span" | "p" | "div";
  className?: string;
  children: React.ReactNode;
}

export function Subtitle({
  size = 20,
  color = "caption",
  as: Tag = "p",
  className,
  children,
}: SubtitleProps) {
  return (
    <Tag
      className={cn(
        "font-nothing-subtitle uppercase",
        sizes[size],
        colors[color],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
