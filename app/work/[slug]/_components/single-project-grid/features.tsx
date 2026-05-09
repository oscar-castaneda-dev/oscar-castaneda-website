import { cn } from "@/lib/cn";

import { Heading } from "@/app/components/typography/heading";
import { Text } from "@/app/components/typography/text";

interface FeaturesProps {
  className?: string;
  features: string[];
}

export function Features({ className, features }: FeaturesProps) {
  return (
    <div
      className={cn(
        "bg-green-surface border border-green-border rounded-lg p-5 flex flex-col gap-4 aspect-square",
        className,
      )}
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
            <Heading size={36} as="h3" className="text-green-400 uppercase">
              {feature}
            </Heading>
          </div>
        ))}
      </div>
    </div>
  );
}
