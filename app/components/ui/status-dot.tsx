import { cn } from "@/lib/cn";

interface StatusDotProps {
  color?: string;
}

export function StatusDot({ color = "bg-green-500" }: StatusDotProps) {
  return (
    <span
      className={cn("w-1.5 h-1.5 rounded-full animate-pulse shrink-0", color)}
    />
  );
}
