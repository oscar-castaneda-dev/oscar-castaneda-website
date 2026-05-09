import { cn } from "@/lib/cn";

import { Heading } from "@/app/components/typography/heading";
import { Text } from "@/app/components/typography/text";

interface IndustryProps {
  className?: string;
  value: string;
}

export function Industry({ className, value }: IndustryProps) {
  return (
    <div
      className={cn(
        "bg-indigo-surface border border-indigo-border rounded-lg p-5 flex flex-col justify-between min-h-40",
        className,
      )}
    >
      <Text size={12} className="uppercase text-indigo-300 font-mono">
        industry
      </Text>
      <div>
        <Heading size={36} as="h3" className="uppercase text-indigo-400">
          {value}
        </Heading>
        <Text>sector</Text>
      </div>
    </div>
  );
}
