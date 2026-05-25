import { StatItem } from "@/data/projects";

interface StatsProps {
  area: string;
  index: number;
  stat: StatItem;
}

export function Stat({ area, index, stat }: StatsProps) {
  const { label, title, value } = stat;

  return (
    <div
      className="bg-card border border-border rounded-lg p-5 flex flex-col justify-between aspect-square"
      style={{ gridArea: area }}
    >
      <p className="subtitle text-xl text-body">{title}</p>
      {index !== 2 ? (
        <div>
          <h3 className="heading-48">{value}</h3>
          <p className="text-xs">{label}</p>
        </div>
      ) : (
        <div>
          <p className="text-2xl lg:text-3xl leading-[1.2]">{label}</p>
        </div>
      )}
    </div>
  );
}
