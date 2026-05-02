import Link from "next/link";

import { Heading } from "@/app/components/typography/heading";
import { Text } from "@/app/components/typography/text";
import { ArrowRightUpIcon } from "../../icons/arrow-right-up";

export function Blog() {
  return (
    <Link
      href="/blog"
      className="rounded-lg p-5 flex flex-col justify-between min-h-40 border border-[#1e1e33] bg-[#0d0d1a] transition-colors duration-200 hover:border-indigo-500/40 hover:bg-[#0f0f20]"
      style={{ gridArea: "blog" }}
    >
      <Text size={14} className="text-indigo-300 uppercase">
        writing
      </Text>
      <div>
        <Heading size={36} className="uppercase text-indigo-400">
          daily blog
        </Heading>
        <div className="flex justify-between items-center">
          <Text className="text-indigo-300 uppercase">Building in public</Text>
          <ArrowRightUpIcon className="text-indigo-300" size={20} />
        </div>
      </div>
    </Link>
  );
}
