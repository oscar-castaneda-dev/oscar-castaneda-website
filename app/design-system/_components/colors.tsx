import { Subtitle } from "@/app/components/typography/subtitle";
import {
  BACKGROUND_SCALE,
  COLORS,
  STATUS_COLORS,
  WHITE_SCALE,
} from "@/data/design-system";

export function Colors() {
  return (
    <section className="py-16 border-b border-border">
      <div className="container space-y-6">
        <Subtitle>01 - colors</Subtitle>
        {/* COLORS */}
        <div className="mb-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px border border-border bg-border overflow-hidden rounded">
          {COLORS.map((color) => (
            <div
              key={color.name}
              className={`${color.bg} py-8 px-6 flex flex-col justify-between text-lg`}
            >
              <span className={`font-nothing-subtitle ${color.text}`}>
                {color.name}
              </span>
              <span className={`font-nothing-code ${color.text}`}>
                {color.hex}
              </span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* WHITE SCALE */}
          <div>
            <Subtitle className="mb-6">white scale</Subtitle>
            <div className="bg-card border border-border rounded-xl p-6 flex flex-col">
              {WHITE_SCALE.map((whiteColor, index) => (
                <div
                  key={whiteColor.color}
                  className="flex flex-col gap-2 py-4 border-b border-border last:border-b-0"
                >
                  <span className="font-nothing-subtitle text-xs text-caption">
                    class - {whiteColor.color}
                  </span>
                  <span
                    className={`${whiteColor.color} font-nothing-code ${
                      index === 0
                        ? "text-2xl"
                        : index === 1
                          ? "text-xl"
                          : "text-sm"
                    }`}
                  >
                    {whiteColor.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* STATUS COLORS */}
          <div>
            <Subtitle className="mb-6">status colors</Subtitle>
            <div className="bg-card border border-border rounded-xl p-6 flex flex-col">
              {STATUS_COLORS.map((statusColor) => (
                <div
                  key={statusColor.color}
                  className="flex flex-col gap-2 py-4 border-b border-border last:border-b-0"
                >
                  <span className="font-nothing-subtitle text-xs text-caption">
                    class - {statusColor.color}
                  </span>
                  <span
                    className={`font-nothing-code text-xl ${statusColor.color}`}
                  >
                    {statusColor.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* BACKGROUND SCALE */}
          <div>
            <Subtitle className="mb-6">background scale</Subtitle>
            <div className="flex flex-col gap-px border border-border rounded-xl overflow-hidden bg-border">
              {BACKGROUND_SCALE.map((bg) => (
                <div
                  key={bg.color}
                  className={`${bg.color} px-6 py-5 flex flex-col gap-1`}
                >
                  <span className="font-nothing-subtitle text-xs text-caption">
                    class - {bg.name}
                  </span>
                  <span className="font-nothing-code text-caption">
                    {bg.hex}
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
