import { cn } from "@/lib/cn";

export interface Stat {
  label: string;
  value: string;
  fontClasses?: string;
}

interface StatsBarProps {
  items: Stat[];
  className?: string;
}

export function StatsBar({ items, className = "" }: StatsBarProps) {
  return (
    <div className={cn("border-y border-border", className)}>
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {items.map((item, index) => {
            const isLeftColMobile = index % 2 === 0;
            const isTopRowMobile = index < 2;
            const isFirstItem = index === 0;
            const isLastItem = index === items.length - 1;

            const cellClass = cn(
              "py-6 flex flex-col gap-1",
              // Mobile: separadores verticales y horizontales
              isLeftColMobile ? "border-r border-border pr-6" : "pl-6",
              isTopRowMobile && "border-b border-border",
              // Desktop: resetear mobile, aplicar lógica de fila única
              "md:border-b-0",
              !isLastItem && "md:border-r md:border-border md:pr-8",
              isLastItem && "md:border-r-0",
              isFirstItem ? "md:pl-0" : "md:pl-8",
            );

            return (
              <div key={item.label} className={cellClass}>
                <span className="font-nothing-subtitle text-caption">
                  {item.label}
                </span>
                <span className={cn("font-nothing-subtitle", item.fontClasses ?? "text-title")}>
                  {item.value}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
