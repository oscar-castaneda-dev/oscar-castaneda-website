import { Subtitle } from "@/app/components/typography/subtitle";
import {
  BACKGROUND_SCALE,
  COLORS,
  STATUS_COLORS,
  WHITE_SCALE,
} from "@/data/system-design";

export function Colors() {
  return (
    <section className="py-16 border-b border-carbon">
      <div className="container space-y-6">
        <Subtitle>01 - colors</Subtitle>
        {/* COLORS */}
        <div className="mb-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px border border-carbon bg-carbon overflow-hidden rounded">
          {COLORS.map((color) => (
            <div
              key={color.name}
              className={`${color.bg} py-8 px-6 flex flex-col justify-between text-lg`}
            >
              <span className={`font-nothing-subtitle ${color.text}`}>
                {color.name}
              </span>
              <span className={`font-nothing-mono ${color.text}`}>
                {color.hex}
              </span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* WHITE SCALE */}
          <div>
            <Subtitle className="mb-6">white scale</Subtitle>
            <div className="bg-void border border-carbon rounded-xl p-6 flex flex-col">
              {WHITE_SCALE.map((whiteColor) => (
                <div
                  key={whiteColor.color}
                  className="flex flex-col gap-2 py-4 border-b border-carbon last:border-b-0"
                >
                  <div
                    className={`flex items-center gap-2 ${whiteColor.color}`}
                  >
                    <span className="font-nothing-subtitle text-xs">
                      {whiteColor.color}
                    </span>
                    <span className="font-nothing-subtitle text-xs">
                      - {whiteColor.label}
                    </span>
                  </div>
                  <span className={`${whiteColor.color} font-nothing-mono`}>
                    {whiteColor.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* STATUS COLORS */}
          <div>
            <Subtitle className="mb-6">status colors</Subtitle>
            <div className="bg-void border border-carbon rounded-xl p-6 flex flex-col gap-4">
              {STATUS_COLORS.map((statusColor) => (
                <div
                  key={statusColor.color}
                  className="flex justify-between items-baseline gap-4"
                >
                  <span className="font-nothing-subtitle text-xs text-ash">
                    {statusColor.color}
                  </span>
                  <span
                    className={`font-nothing-mono text-xs ${statusColor.color}`}
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
            <div className="flex flex-col gap-px border border-carbon rounded-xl overflow-hidden">
              {BACKGROUND_SCALE.map((backgroundScale) => (
                <div
                  key={backgroundScale.color}
                  className={`${backgroundScale.color} px-5 py-3 flex justify-between items-center`}
                >
                  <span className="font-nothing-subtitle text-xs text-ash">
                    {backgroundScale.name}
                  </span>
                  <span className="font-nothing-subtitle text-xs text-ash">
                    {backgroundScale.label}
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
