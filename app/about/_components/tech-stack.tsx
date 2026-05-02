import { Subtitle } from "@/app/components/typography/subtitle";
import { Tag } from "@/app/components/ui/tag";
import { STACK } from "@/data/stack";

export function TechStack() {
  return (
    <section className="py-16 border-b border-boder">
      <div className="container">
        <Subtitle className="mb-8">// stack</Subtitle>
        <div className="flex flex-col gap-5">
          {Object.entries(STACK).map(([area, technologies]) => (
            <div key={area} className="flex items-start gap-6">
              <span className="font-nothing-subtitle text-disabled w-24 shrink-0 mt-1">
                {area}
              </span>
              <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <Tag key={technology}>{technology}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
