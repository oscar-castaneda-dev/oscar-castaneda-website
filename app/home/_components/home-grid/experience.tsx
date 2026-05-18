import { Heading } from "@/app/components/typography/heading";
import { Subtitle } from "@/app/components/typography/subtitle";
import { Text } from "@/app/components/typography/text";
import { YEARS_OF_EXPERIENCE } from "@/app/constants";

export function Experience() {
  return (
    <div
      className="bg-card border border-border rounded-lg p-5 flex flex-col justify-between min-h-40"
      style={{ gridArea: "experience" }}
    >
      <Subtitle color="body">experience</Subtitle>
      <div>
        <Heading size={48} as="h3">
          {YEARS_OF_EXPERIENCE}
        </Heading>
        <Text size={12}>years</Text>
      </div>
    </div>
  );
}
