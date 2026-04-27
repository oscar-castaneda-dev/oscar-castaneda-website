import { cn } from "@/lib/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  area: string;
}

export function Card({ className, children, area }: CardProps) {
  return (
    <div
      className={cn(
        "bg-card border border-border rounded-lg p-5 flex flex-col justify-between min-h-40",
        className,
      )}
      style={{ gridArea: area }}
    >
      {children}
    </div>
  );
}
