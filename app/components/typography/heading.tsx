import { cn } from "@/lib/cn";

const sizes = {
  hero: "text-[clamp(64px,11vw,128px)]",
  lg: "text-[clamp(48px,8vw,100px)]",
  md: "text-[clamp(44px,5.5vw,72px)]",
} as const;

interface HeadingProps {
  size?: keyof typeof sizes;
  as?: "h1" | "h2" | "h3";
  className?: string;
  children: React.ReactNode;
}

export function Heading({
  size = "hero",
  as: Tag = "h1",
  className,
  children,
}: HeadingProps) {
  return (
    <Tag
      className={cn(
        "font-nothing-doto tracking-[-0.03em] text-white font-bold leading-[0.92]",
        sizes[size],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
