import { cn } from "@/lib/cn";

import { Heading } from "@/app/components/typography/heading";
import { StatItem } from "@/data/projects";
import { Subtitle } from "@/app/components/typography/subtitle";
import { Text } from "@/app/components/typography/text";

interface StatsProps {
  className?: string;
  index: number;
  stat: StatItem;
}

export function Stat({ className, index, stat }: StatsProps) {
  const { label, title, value } = stat;

  return (
    <div
      className={cn(
        "bg-card border border-border rounded-lg p-5 flex flex-col justify-between aspect-square",
        className,
      )}
    >
      <Subtitle color="body">{title}</Subtitle>
      {index !== 2 ? (
        <div>
          <Heading size={48} as="h3">
            {value}
          </Heading>
          <Text size={12}>{label}</Text>
        </div>
      ) : (
        <div>
          <Text className="text-2xl lg:text-3xl leading-[1.2]">{label}</Text>
        </div>
      )}
    </div>
  );
}
