import { Subtitle } from "@/app/components/typography/subtitle";
import { COLORS } from "@/data/system-design";

export function Colors() {
  return (
    <section className="py-16 border-b border-carbon">
      <div className="container space-y-6">
        <Subtitle>01 - colors</Subtitle>
        {/* COLORS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px border border-carbon bg-carbon overflow-hidden rounded">
          {COLORS.map((color) => (
            <div
              key={color.name}
              className={`${color.bg} py-8 px-6 flex flex-col justify-between text-lg`}
            >
              <span className={`font-nothing-label ${color.text}`}>
                {color.name}
              </span>
              <span className={`font-nothing-mono ${color.text}`}>
                {color.hex}
              </span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* TEXT HIERARCHY */}
          <Subtitle>text hierarchy</Subtitle>
          <div className="bg-void border border-carbon rounded-xl p-6 flex flex-col gap-4"></div>
          {/* SEMANTIC STATUS */}
          {/* SURFACE STACK */}
        </div>
      </div>
    </section>
  );
}
