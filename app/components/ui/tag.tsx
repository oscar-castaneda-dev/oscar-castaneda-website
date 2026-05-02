import { cn } from "@/lib/cn";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "font-nothing-subtitle text-body border border-outline rounded px-3 py-1",
        className,
      )}
    >
      {children}
    </span>
  );
}
