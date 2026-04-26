import { cn } from "@/lib/cn";

const sizes = {
  64: "text-[clamp(48px,11vw,128px)]",
  48: "text-[clamp(36px,8vw,100px)]",
  44: "text-[clamp(44px,5.5vw,72px)]",
  36: "text-[clamp(28px,2.8vw,36px)]",
} as const;

interface HeadingProps {
  size?: keyof typeof sizes;
  as?: "h1" | "h2" | "h3";
  className?: string;
  children: React.ReactNode;
}

export function Heading({
  size = 64,
  as: Tag = "h1",
  className,
  children,
}: HeadingProps) {
  return (
    <Tag
      className={cn(
        "font-nothing-dots tracking-[-0.03em] text-white font-bold",
        sizes[size],
        "leading-[0.92]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
