import { BORDER_COLORS, BORDER_RADIUS } from "@/data/design-system";

export function Borders() {
  return (
    <section className="py-16 border-b border-border">
      <div className="container">
        <div className="py-16">
          <p className="subtitle text-xl text-caption">05 - borders & radius</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-border py-12">
          <div className="flex flex-col gap-8">
            <p className="subtitle text-xl text-title">border colors</p>
            <div className="flex flex-col">
              {BORDER_COLORS.map((border) => (
                <div
                  key={border.cls}
                  className="grid grid-cols-[2rem_1fr_auto] items-center gap-6 py-5 border-b border-border"
                >
                  <div
                    className={`w-8 h-8 bg-surface border-2 ${border.cls} rounded`}
                  />
                  <div className="flex flex-col gap-1">
                    <span className="font-nothing-code text-sm text-body">
                      {border.label}
                    </span>
                    <span className="font-nothing-code text-xs text-disabled">
                      {border.cls}
                    </span>
                  </div>
                  <span className="font-nothing-code text-xs text-disabled">
                    {border.hex}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* BORDER RADIUS */}
          <div className="flex flex-col gap-8">
            <p className="subtitle text-xl text-title">border radius</p>
            <div className="flex flex-col">
              {BORDER_RADIUS.map((element) => (
                <div
                  key={element.cls}
                  className="grid grid-cols-[2rem_1fr_auto] items-center gap-6 py-5 border-b border-border"
                >
                  <div
                    className={`w-8 h-8 bg-raised border border-outline ${element.cls}`}
                  />
                  <div className="flex flex-col gap-1">
                    <span className="font-nothing-code text-sm text-body">
                      {element.label}
                    </span>
                    <span className="font-nothing-code text-xs text-disabled">
                      {element.cls}
                    </span>
                  </div>
                  <span className="font-nothing-code text-xs text-disabled">
                    {element.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
