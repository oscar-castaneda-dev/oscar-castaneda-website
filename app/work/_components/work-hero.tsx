import { DotGrid } from "@/app/components/ui/dot-grid";
import { Heading } from "@/app/components/typography/heading";
import { Subtitle } from "@/app/components/typography/subtitle";
import { Text } from "@/app/components/typography/text";
import { WORK_META } from "@/data/work-meta";

export function WorkHero() {
  return (
    <section className="py-16 relative overflow-hidden">
      <DotGrid />
      <div className="container relative">
        <Subtitle className="mb-3">// selected work</Subtitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* RIGHT COLUMN */}
          <div className="col-span-1 md:col-span-2 flex flex-col">
            <Heading size={48} className="mb-6 uppercase">
              work
            </Heading>
            <div className="flex flex-col gap-y-4 max-w-lg">
              <Text>
                A collection of products I&#39;ve designed and built across web,
                mobile, and AI. Each project started with a real problem and
                ended with something I actually use.
              </Text>
              <Text>
                Built from zero to production. Turning ideas into something
                usable, keeping things simple, and removing unnecessary
                complexity.
              </Text>
            </div>
          </div>
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-4 md:pt-2">
            {WORK_META.map(({ label, value }) => (
              <div
                key={label}
                className="flex flex-col gap-1 border-b border-border pb-4"
              >
                <Subtitle>{label}</Subtitle>
                <Text size={18} color="body">
                  {value}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
