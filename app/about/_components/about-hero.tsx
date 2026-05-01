import Image from "next/image";

import { DotGrid } from "@/app/components/ui/dot-grid";
import { Heading } from "@/app/components/typography/heading";
import { Subtitle } from "@/app/components/typography/subtitle";
import { Text } from "@/app/components/typography/text";

export function AboutHero() {
  return (
    <section className="py-16 relative overflow-hidden border-border">
      <DotGrid fade />
      <div className="container relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* LEFT COLUMN */}
          <div className="col-span-1 md:col-span-2 flex flex-col">
            <Subtitle className="mb-3">// who i am</Subtitle>
            <Heading size={44} className="uppercase mb-1">
              Oscar <br /> Castaneda
            </Heading>
            <Text className="uppercase mb-6">Tech Lead - AI Engineer</Text>
            <div className="flex flex-col gap-y-4 max-w-lg">
              <Text>
                I&#39;ve spent most of my career building products for the web,
                writing code, leading teams, and shipping things that need to
                work in the real world. I enjoy the process of taking something
                from scratch and making it usable.
              </Text>
              <Text>
                Right now, I&#39;m leaning into AI and how it fits into everyday
                products. I&#39;m less interested in the buzz, and more in how
                it can improve real user experiences. Simple, clear, and useful
                is always the goal.
              </Text>
            </div>
          </div>
          {/* RIGHT COLUMN */}
          <div className="relative w-full aspect-square md:aspect-3/4 bg-surface border border-border rounded-xl overflow-hidden order-first md:order-0 md:[transform:perspective(1000px)_rotateY(-8deg)]">
            <Image
              src="/images/avatar.webp"
              alt="Oscar Castaneda"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 400px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
