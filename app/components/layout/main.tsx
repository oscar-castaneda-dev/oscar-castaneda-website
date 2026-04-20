import { cn } from "@/app/lib/cn";

export function Main({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main className={cn("min-h-screen flex flex-col", className)}>
      <div className="container">{children}</div>
    </main>
  );
}
