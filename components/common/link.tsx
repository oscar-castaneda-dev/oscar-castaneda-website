import NextLink from "next/link";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

interface LinkProps extends ComponentProps<typeof NextLink> {
  size?: 24 | 20 | 18 | 16 | 14 | "inherit";
  weight?: "normal" | "medium" | "semibold" | "bold";
  /** Only accepts text as link content */
  children: string;
  className?: string;
}

const sizeMap = {
  24: "text-2xl",
  20: "text-xl",
  18: "text-lg",
  16: "text-base",
  14: "text-sm",
  inherit: "text-inherit",
} as const;

const weightMap = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
} as const;

export function Link({
  size = 16,
  weight,
  children,
  className,
  href,
  ...props
}: LinkProps) {
  const textSizeClass = sizeMap[size];
  const fontWeightClass = weight ? weightMap[weight] : undefined;

  return (
    <NextLink
      href={href}
      className={cn(
        textSizeClass,
        fontWeightClass,
        "hover:underline",
        className
      )}
      {...props}
    >
      {children}
    </NextLink>
  );
}
