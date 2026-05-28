import { CLASS_PREFIXES, SPACING_SCALE } from "@/data/design-system";

export function Spaces() {
  return (
    <section className="py-16 border-b border-border">
      <div className="container">
        <div className="py-16">
          <p className="subtitle text-xl text-caption">03 - spacing</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16 border-t border-border py-12">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-4 pt-1">
            <p className="subtitle text-xl text-title">spacing</p>
            <p className="text-base text-disabled">
              4px base unit. every size is a multiple of 4 from small gaps
              between elements to full-section spacing.
            </p>
          </div>
          {/* RIGHT COLUMN */}
          <div className="flex flex-col">
            {/* COLUMNS */}
            <div className="grid grid-cols-[2rem_1fr_3.5rem_2fr] gap-x-8 pb-3 border-b border-border">
              <span className="subtitle text-xs text-disabled">n</span>
              <span className="subtitle text-xs text-disabled">visual</span>
              <span className="subtitle text-xs text-disabled text-right">
                px
              </span>
              <span className="subtitle text-xs text-disabled">classes</span>
            </div>
            {/* ROWS */}
            {SPACING_SCALE.map((space) => (
              <div
                key={space.scale}
                className="grid grid-cols-[2rem_1fr_3.5rem_2fr] gap-x-8 items-center border-b border-border py-5"
              >
                {/* NUMBERS */}
                <span className="font-nothing-code text-sm text-caption">
                  {space.scale}
                </span>
                {/* LINE */}
                <div className="flex items-center overflow-hidden">
                  <div
                    className="h-px bg-caption shrink-0"
                    style={{ width: `${(space.px / 96) * 100}%` }}
                  />
                </div>
                {/* PIXELS */}
                <span className="font-nothing-code text-sm text-body text-right">
                  {space.px}px
                </span>
                {/* CLASSES */}
                <div className="flex justify-between">
                  <span className="font-nothing-code text-xs text-caption lg:hidden">
                    space-y-{space.scale}
                  </span>
                  <div className="hidden lg:flex lg:justify-between lg:w-full">
                    {CLASS_PREFIXES.map((prefix) => (
                      <span
                        key={prefix}
                        className="font-nothing-code text-xs text-caption"
                      >
                        {prefix}-{space.scale}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
