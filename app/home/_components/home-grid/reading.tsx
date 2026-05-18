import { Card } from "./card";
import { Heading } from "@/app/components/typography/heading";
import { Subtitle } from "@/app/components/typography/subtitle";
import { Text } from "@/app/components/typography/text";

export function Reading() {
  return (
    <Card area="stack">
      <Subtitle>currently reading</Subtitle>
      <div>
        <div className="border-b border-border py-6 mb-2">
          <Text size={14} className="mb-2 uppercase">
            data science
          </Text>
          <Heading size={36} className="uppercase">
            Python for data analysis
          </Heading>
        </div>
        <Text size={14}>Wes McKinney</Text>
      </div>
    </Card>
  );
}
