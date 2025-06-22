import { cn } from "@/lib/utils";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export function H1({ children, className }: TypographyProps) {
  return (
    <h1
      className={cn("text-5xl md:text-6xl font-bold leading-tight", className)}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className }: TypographyProps) {
  return (
    <h2
      className={cn("text-2xl md:text-3xl font-bold leading-tight", className)}
    >
      {children}
    </h2>
  );
}
