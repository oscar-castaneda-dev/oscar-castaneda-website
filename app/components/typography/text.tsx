import { cn } from "@/lib/cn";

const sizes = {
  12: "text-xs leading-[1.4]",
  14: "text-sm leading-[1.5]",
  16: "text-base leading-[1.7]",
  18: "text-lg leading-[1.4]",
  20: "text-xl leading-[1.4]",
  24: "text-2xl leading-[1.2]",
  30: "text-3xl leading-[1.2]",
  36: "text-4xl leading-[1.1]",
  48: "text-5xl leading-[1.05]",
  60: "text-6xl leading-[1.0]",
} as const;

const colors = {
  body: "text-body",
  caption: "text-caption",
} as const;

interface TextProps {
  size?: keyof typeof sizes;
  color?: keyof typeof colors;
  className?: string;
  children: React.ReactNode;
}

export function Text({
  size = 16,
  color = "body",
  className,
  children,
}: TextProps) {
  return (
    <p className={cn(sizes[size], colors[color], className)}>{children}</p>
  );
}
