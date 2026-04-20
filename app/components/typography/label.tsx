import { cn } from "@/lib/cn";

const colors = {
  subtle: "text-subtle",
  muted: "text-muted",
  white: "text-white",
  body: "text-body",
  success: "text-success",
  warning: "text-warning",
  accent: "text-accent",
} as const;

interface LabelProps {
  color?: keyof typeof colors;
  as?: "span" | "p" | "div";
  className?: string;
  children: React.ReactNode;
}

export function Label({
  color = "subtle",
  as: Tag = "span",
  className,
  children,
}: LabelProps) {
  return (
    <Tag className={cn("font-nothing-label", colors[color], className)}>
      {children}
    </Tag>
  );
}
