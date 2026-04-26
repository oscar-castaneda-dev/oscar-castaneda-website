import { Heading } from "@/app/components/typography/heading";
import { Subtitle } from "@/app/components/typography/subtitle";
import { Text } from "@/app/components/typography/text";

export function Role() {
  return (
    <div
      className="bg-card border border-border rounded-lg p-5 flex flex-col min-h-40"
      style={{ gridArea: "role" }}
    >
      <Subtitle color="body" className="mb-4">
        current role
      </Subtitle>
      <Heading size={36} as="h3" className="uppercase">
        Tech <br />
        Lead
      </Heading>
    </div>
  );
}
