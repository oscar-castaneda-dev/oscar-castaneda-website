import { STACK } from "@/data/stack";
import { Tag } from "@/app/components/ui/tag";

export function TechStack() {
  return (
    <section className="py-16">
      <div className="container">
        <p className="subtitle text-xl text-caption mb-8">// stack</p>
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
