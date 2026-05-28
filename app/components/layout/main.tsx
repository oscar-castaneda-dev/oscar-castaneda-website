import { cn } from "@/lib/cn";

export function Main({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main className={cn("min-h-screen flex flex-col", className)}>
      {children}
    </main>
  );
}
