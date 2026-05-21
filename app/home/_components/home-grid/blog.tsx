import Link from "next/link";

import { ArrowRightUpIcon } from "@/app/components/icons/arrow-right-up";

export function Blog() {
  return (
    <Link
      href="/blog"
      className="rounded-lg p-5 flex flex-col justify-between min-h-40 border border-indigo-border bg-indigo-surface transition-colors duration-200 hover:border-indigo-500/40 hover:bg-[#0f0f20]"
      style={{ gridArea: "blog" }}
    >
      <p className="text-sm text-indigo-300 uppercase">writing</p>
      <div>
        <h3 className="heading-36 uppercase text-indigo-400 mb-1">
          daily blog
        </h3>
        <div className="flex justify-between items-center">
          <p className="text-indigo-300 uppercase">Building in public</p>
          <ArrowRightUpIcon className="text-indigo-300" size={20} />
        </div>
      </div>
    </Link>
  );
}
