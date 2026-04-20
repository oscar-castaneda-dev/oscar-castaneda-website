import { cn } from "@/lib/cn";

const sizes = {
  base: "text-base leading-[1.7]",
  lg: "text-lg leading-[1.4]",
} as const;

const colors = {
  body: "text-body",
  subtle: "text-subtle",
} as const;

interface TextProps {
  size?: keyof typeof sizes;
  color?: keyof typeof colors;
  className?: string;
  children: React.ReactNode;
}

export function Text({
  size = "base",
  color = "body",
  className,
  children,
}: TextProps) {
  return (
    <p className={cn(sizes[size], colors[color], "font-light", className)}>
      {children}
    </p>
  );
}
