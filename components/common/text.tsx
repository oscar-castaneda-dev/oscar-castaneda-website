import { cn } from "@/lib/utils";

interface TextProps {
  size?: 24 | 20 | 18 | 16 | 14;
  weight?: "normal" | "medium" | "semibold" | "bold";
  children: React.ReactNode;
  className?: string;
}

const sizeMap = {
  24: "text-2xl",
  20: "text-xl",
  18: "text-lg",
  16: "text-base",
  14: "text-sm",
} as const;

const weightMap = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
} as const;

export function Text({
  size = 16,
  weight,
  children,
  className,
  ...props
}: TextProps) {
  const textSizeClass = sizeMap[size];
  const fontWeightClass = weight ? weightMap[weight] : undefined;

  return (
    <p className={cn(textSizeClass, fontWeightClass, className)} {...props}>
      {children}
    </p>
  );
}
