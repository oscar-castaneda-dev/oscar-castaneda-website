import { Heading } from "@/app/components/typography/heading";
import { Text } from "@/app/components/typography/text";

export function Something() {
  return (
    <div
      className="rounded-lg p-5 flex flex-col justify-between min-h-40 border border-[#1e1e33] bg-[#0d0d1a]"
      style={{ gridArea: "something" }}
    >
      <Text size={14} className="text-indigo-300 uppercase">
        ai tooling
      </Text>
      <div>
        <Heading size={36} className="uppercase text-indigo-400">
          github copilot
        </Heading>
        <Text className="text-indigo-300 uppercase">Adoption Lead</Text>
      </div>
    </div>
  );
}
