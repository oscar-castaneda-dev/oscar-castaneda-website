import { Heading } from "@/app/components/typography/heading";
import { Text } from "@/app/components/typography/text";

interface IndustryProps {
  area: string;
  value: string;
}

export function Industry({ area, value }: IndustryProps) {
  return (
    <div
      className="bg-indigo-surface border border-indigo-border rounded-lg p-5 flex flex-col justify-between min-h-40"
      style={{ gridArea: area }}
    >
      <Text size={12} className="uppercase text-indigo-300">
        industry
      </Text>
      <div>
        <Heading size={36} as="h3" className="uppercase text-indigo-400">
          {value}
        </Heading>
        <Text className="text-indigo-300">sector</Text>
      </div>
    </div>
  );
}
