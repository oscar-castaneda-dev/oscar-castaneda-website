import Link from "next/link";

import { cn } from "@/lib/cn";

const variants = {
  primary: "bg-white text-black font-bold transition-opacity",
  secondary: "border border-border-visible text-body transition-colors",
  ghost: "border border-border-visible text-subtle transition-colors",
} as const;

const sizes = {
  lg: "py-4 px-8 gap-2 text-xs tracking-[0.06em]",
  md: "py-3 px-6 gap-2 text-[13px] tracking-[0.06em]",
  sm: "py-2 px-4 gap-1 text-[11px] tracking-[0.08em]",
} as const;

interface ButtonProps {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  href: string;
  className?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center rounded-full font-mono uppercase duration-150",
    variants[variant],
    sizes[size],
    className,
  );

  const isExternal = href.startsWith("http") || href.startsWith("mailto");

  if (isExternal) {
    return (
      <a
        href={href}
        target={href.startsWith("mailto") ? undefined : "_blank"}
        rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
