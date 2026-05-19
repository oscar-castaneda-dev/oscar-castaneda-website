import { Text } from "@/app/components/typography/text";

export function PostSignature() {
  return (
    <div className="container pb-16">
      <div className="mx-auto w-fit border-t border-border py-6 flex flex-col items-center gap-2">
        <Text size={14} className="uppercase">
          Oscar Castaneda
        </Text>
        <Text size={12} color="caption">
          Last updated: May 2026
        </Text>
      </div>
    </div>
  );
}
