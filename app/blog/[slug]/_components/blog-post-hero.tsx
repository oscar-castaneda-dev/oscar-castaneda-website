import Image from "next/image";

import { DotGrid } from "@/app/components/ui/dot-grid";
import { Heading } from "@/app/components/typography/heading";
import { Text } from "@/app/components/typography/text";

export function BlogPostHero() {
  return (
    <section className="pt-24 pb-16 relative overflow-hidden">
      <DotGrid />
      <div className="container relative">
        <div className="mx-auto max-w-4xl flex flex-col items-center text-center gap-6">
          <Heading size={48}>Designing websites faster with shadcn/ui</Heading>
          <Text size={18} color="body" className="max-w-md">
            A step-by-step guide to building a modern, responsive blog using
            React and Tailwind CSS.
          </Text>
          <div className="flex flex-col items-center uppercase tracking-widest border-t border-border pt-4">
            <Image
              src="/images/avatar.webp"
              alt="Oscar Castaneda"
              width={200}
              height={200}
              className="w-12 h-12 rounded-full border border-border object-cover object-center grayscale shrink-0 mb-3"
            />
            <Text size={14}>Oscar Castaneda</Text>
            <Text size={12}>May 18, 2026</Text>
          </div>
          {/* <div className="flex items-center gap-3 text-xs uppercase tracking-widest">
            <Image
              src="/images/avatar.webp"
              alt="Oscar Castaneda"
              width={200}
              height={200}
              className="w-12 h-12 rounded-full border border-border object-cover object-center grayscale shrink-0"
            />
            <span>Oscar Castaneda</span>
            <span>·</span>
            <span>May 18, 2026</span>
          </div> */}
        </div>
      </div>
    </section>
  );
}
