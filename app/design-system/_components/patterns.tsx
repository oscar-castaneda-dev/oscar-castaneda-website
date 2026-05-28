import { PATTERNS } from "@/data/design-system";

export function Patterns() {
  return (
    <section className="py-16 border-b border-border">
      <div className="container">
        <div className="py-16">
          <p className="subtitle text-xl text-caption">04 - patterns</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16 border-t border-border py-12">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-4 pt-1">
            <p className="subtitle text-xl text-title">patterns</p>
            <p className="text-base text-disabled">
              Dot grid backgrounds used to add texture to sections and hero
              areas.
            </p>
          </div>
          {/* RIGHT COLUMN */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {PATTERNS.map((pattern) => (
              <div key={pattern.cls} className="flex flex-col gap-4">
                <div
                  className={`${pattern.cls} h-48 rounded-xl border border-border`}
                />
                <div className="flex flex-col gap-1">
                  <p className="font-nothing-code text-sm text-body">
                    {pattern.cls}
                  </p>
                  <p className="font-nothing-code text-xs text-disabled">
                    {pattern.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
