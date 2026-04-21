import { cn } from "@/lib/cn";

interface Stat {
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
    <div className={cn("grid grid-cols-4", className)}>
      {items.map((item, index) => {
        const isntFirst = index !== 0;
        const isntLast = index !== items.length - 1;

        const cellClass = cn(
          "py-6 flex flex-col gap1",
          isntFirst && "border-r border-carbon pr-8",
          isntLast && "pl-8",
        );

        return (
          // prettier-ignore
          <div key={item.label} className={cellClass}>
            <span className="font-nothing-label text-smoke">
              {item.label}
            </span>
            <span className={cn("font-nothing-label",item.fontClasses ?? "text-white")}>
              {item.value}
            </span>
          </div>
        );
      })}
    </div>
  );
}
