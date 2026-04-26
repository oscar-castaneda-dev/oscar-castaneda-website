import { Heading } from "@/app/components/typography/heading";
import { StatusDot } from "@/app/components/ui/status-dot";
import { Text } from "@/app/components/typography/text";

export function Building() {
  return (
    <div
      className="bg-[#0a1a0d] rounded-lg p-5 flex flex-col justify-between min-h-40 border border-[#1a3d22]"
      style={{ gridArea: "building" }}
    >
      <div className="flex items-center gap-x-2">
        <StatusDot />
        <Text size={12} className="uppercase text-[#3d6645]">
          currently building
        </Text>
      </div>
      <div>
        <Heading size={36} className="mb-1 uppercase text-green-400">
          Data as a Service
        </Heading>
        <Text size={12} className="uppercase text-[#3d6645]">
          Side Project - 2026
        </Text>
      </div>
    </div>
  );
}
