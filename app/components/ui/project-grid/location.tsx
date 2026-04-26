import { Heading } from "@/app/components/typography/heading";
import { Subtitle } from "@/app/components/typography/subtitle";
import { Text } from "@/app/components/typography/text";

export function Location() {
  return (
    <div
      className="bg-card border border-border rounded-lg p-5 flex flex-col justify-between min-h-40"
      style={{ gridArea: "location" }}
    >
      <Subtitle color="caption">base in</Subtitle>
      <Heading size={44} className="uppercase">
        mx
      </Heading>
      <Text>Mexico</Text>
    </div>
  );
}
