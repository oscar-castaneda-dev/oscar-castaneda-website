import { cn } from "@/lib/cn";

interface DotGridProps {
  fade?: boolean;
  className?: string;
}

export function DotGrid({ fade = false, className }: DotGridProps) {
  return (
    <div
      className={cn(
        "dot-grid absolute inset-0 pointer-events-none",
        fade && "mask-[linear-gradient(to_bottom,black_0%,transparent_100%)]",
        className,
      )}
    />
  );
}
