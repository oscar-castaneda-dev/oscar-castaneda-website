import Link from "next/link";

import { cn } from "@/lib/cn";

const sizes = {
  lg: "py-4 px-8 gap-2 text-xs tracking-[0.06em]",
  md: "py-3 px-6 gap-2 text-[13px] tracking-[0.06em]",
  sm: "py-2 px-4 gap-1 text-[11px] tracking-[0.08em]",
} as const;

interface ButtonPrimaryProps {
  size?: keyof typeof sizes;
  href: string;
  className?: string;
  ariaLabel?: string;
  children: React.ReactNode;
}

export function ButtonPrimary({
  size = "md",
  href,
  className,
  ariaLabel,
  children,
}: ButtonPrimaryProps) {
  const classes = cn(
    "inline-flex items-center rounded-full font-mono uppercase duration-150",
    "bg-white text-black font-semibold transition-colors duration-150 hover:bg-success hover:text-white",
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
        aria-label={ariaLabel}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} aria-label={ariaLabel} className={classes}>
      {children}
    </Link>
  );
}
