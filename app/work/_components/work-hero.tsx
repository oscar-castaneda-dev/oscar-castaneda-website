import { DotGrid } from "@/app/components/ui/dot-grid";
import { WORK_META } from "@/data/work-meta";

export function WorkHero() {
  return (
    <section className="py-16 relative overflow-hidden">
      <DotGrid />
      <div className="container relative">
        <p className="subtitle text-xl text-caption mb-3">// selected work</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* RIGHT COLUMN */}
          <div className="col-span-1 md:col-span-2 flex flex-col">
            <h1 className="heading-48 uppercase mb-6">work</h1>
            <div className="flex flex-col gap-y-4 max-w-lg">
              <p>
                A collection of products I&#39;ve designed and built across web,
                mobile, and AI. Each project started with a real problem and
                ended with something I actually use.
              </p>
              <p>
                Built from zero to production. Turning ideas into something
                usable, keeping things simple, and removing unnecessary
                complexity.
              </p>
            </div>
          </div>
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-4 md:pt-2">
            {WORK_META.map(({ label, value }) => (
              <div
                key={label}
                className="flex flex-col gap-1 border-b border-border pb-4"
              >
                <p className="subtitle text-xl">{label}</p>
                <p className="text-lg text-caption">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
