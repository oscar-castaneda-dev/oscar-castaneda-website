import { cn } from "@/lib/cn";

import { Text } from "@/app/components/typography/text";

interface FeaturesProps {
  area: string;
  features: string[];
}

export function Features({ area, features }: FeaturesProps) {
  return (
    <div
      className="bg-green-surface border border-green-border rounded-lg p-5 flex flex-col gap-4 aspect-square"
      style={{ gridArea: area }}
    >
      <Text className="uppercase text-green-400">// key features</Text>
      <div className="grid grid-cols-2 flex-1">
        {features.map((feature, index) => (
          <div
            key={index}
            className={cn(
              "flex items-end p-3",
              index >= 2 && " border-t border-green-border",
              index % 2 === 1 && "border-l border-green-border",
            )}
          >
            <Text className="text-sm sm:text-base md:text-xl lg:text-3xl font-nothing-dots text-green-400 uppercase font-bold">
              {feature}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
}
