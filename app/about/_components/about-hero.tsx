import { Heading } from "@/app/components/typography/heading";
import { Subtitle } from "@/app/components/typography/subtitle";
import { Text } from "@/app/components/typography/text";
import { DotGrid } from "@/app/components/ui/dot-grid";
import Image from "next/image";

export function AboutHero() {
  return (
    <section className="py-16 relative overflow-hidden border-b border-border">
      <DotGrid fade />
      <div className="container relative">
        <Subtitle className="mb-6">// who i am</Subtitle>
        <div className="grid grid-cols-3 gap-16 items-start">
          {/* LEFT COLUMN */}
          <div className="col-span-2 flex flex-col">
            <Heading size={44} className="uppercase mb-1">
              Oscar <br /> Castaneda
            </Heading>
            <Text className="uppercase mb-6">software engineer</Text>
            <div className="flex flex-col max-w-lg gap-y-4">
              <Text>
                I build products for the web — from the interface to the
                infrastructure. I care about the gap between how things work and
                how they feel.
              </Text>
              <Text>
                Drawn to systems that are precise and minimal. Convinced that
                the best design decisions are the ones users never notice.
              </Text>
            </div>
          </div>
          {/* RIGHT COLUMN */}
          <div className="relative w-full aspect-3/4 bg-surface border border-border rounded-xl overflow-hidden">
            <Image
              src="/images/avatar.webp"
              alt="Oscar Castaneda"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1280px) 33vw, 400px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
