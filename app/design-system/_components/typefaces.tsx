import {
  HEADING_SIZES,
  SUBTITLE_SIZES,
  TEXT_SIZES,
} from "@/data/design-system";

const headingClass: Record<number, string> = {
  64: "heading-64",
  48: "heading-48",
  44: "heading-44",
  36: "heading-36",
};

const subtitleSizeClass: Record<number, string> = {
  20: "text-xl",
  24: "text-2xl",
  30: "text-3xl",
  36: "text-4xl",
};

const textSizeClass: Record<number, string> = {
  12: "text-xs leading-[1.4]",
  14: "text-sm leading-[1.5]",
  16: "text-base leading-[1.7]",
  18: "text-lg leading-[1.4]",
  20: "text-xl leading-[1.4]",
  24: "text-2xl leading-[1.2]",
  30: "text-3xl leading-[1.2]",
  36: "text-4xl leading-[1.1]",
  48: "text-5xl leading-[1.05]",
  60: "text-6xl leading-[1.0]",
};

export function Typefaces() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="py-16">
          <p className="subtitle text-xl text-caption">02 - Typography</p>
        </div>
        <div className="flex flex-col gap-12">
          {/* HEADINGS */}
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16 border-t border-border py-12">
            <div className="flex flex-col gap-1 pt-1">
              <p className="subtitle text-xl text-title">heading</p>
              <p className="text-base leading-[1.7] text-disabled mb-4">doto</p>
              <div className="flex flex-col gap-1 mt-4">
                <p className="subtitle text-xl text-title">props</p>
                <p className="text-base leading-[1.7] text-title">size</p>
                <p className="text-base leading-[1.7] text-caption">64, 48, 44</p>
                <p className="text-base leading-[1.7] text-title">as</p>
                <p className="text-base leading-[1.7] text-caption">h1, h2, h3</p>
              </div>
            </div>
            <div className="flex flex-col gap-y-12">
              {HEADING_SIZES.map((size) => (
                <div
                  key={size}
                  className="flex flex-col items-baseline gap-y-2"
                >
                  <h1 className={headingClass[size]}>Heading</h1>
                  <p className="text-base leading-[1.7] text-body">{size}px</p>
                </div>
              ))}
            </div>
          </div>
          {/* SUBTITLE */}
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16 border-t border-border py-12">
            <div className="flex flex-col gap-1 pt-1">
              <p className="subtitle text-xl text-title">subtitle</p>
              <p className="text-base leading-[1.7] text-disabled mb-4">space mono</p>
              <div className="flex flex-col gap-1 mt-4">
                <p className="subtitle text-xl text-title">props</p>
                <p className="text-base leading-[1.7] text-title">size</p>
                <p className="text-base leading-[1.7] text-caption">20, 24, 30, 36</p>
                <p className="text-base leading-[1.7] text-title">color</p>
                <p className="text-base leading-[1.7] text-caption">
                  caption, disabled, white, body, success, warning, accent
                </p>
                <p className="text-base leading-[1.7] text-title">as</p>
                <p className="text-base leading-[1.7] text-caption">span, p, div</p>
              </div>
            </div>
            <div className="flex flex-col gap-y-12">
              {SUBTITLE_SIZES.map((size) => (
                <div
                  key={size}
                  className="flex flex-col items-baseline gap-y-2"
                >
                  <p className={`subtitle ${subtitleSizeClass[size]} text-caption`}>Subtitle</p>
                  <p className="text-xs leading-[1.4] text-body">{size}px</p>
                </div>
              ))}
            </div>
          </div>
          {/* TEXT */}
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16 border-t border-border py-12">
            <div className="flex flex-col gap-1 pt-1">
              <p className="subtitle text-xl text-title">text</p>
              <p className="text-base leading-[1.7] text-disabled mb-4">space grotesk</p>
              <div className="flex flex-col gap-1 mt-4">
                <p className="subtitle text-xl text-title">props</p>
                <p className="text-base leading-[1.7] text-title">size</p>
                <p className="text-base leading-[1.7] text-caption">
                  12, 14, 16, 18, 20, 24, 30, 36, 48, 60
                </p>
                <p className="text-base leading-[1.7] text-title">color</p>
                <p className="text-base leading-[1.7] text-caption">body, caption</p>
              </div>
            </div>
            <div className="flex flex-col gap-y-12">
              {TEXT_SIZES.map((size) => (
                <div
                  key={size}
                  className="flex flex-col items-baseline gap-y-2"
                >
                  <p className={`${textSizeClass[size]} text-body`}>Text</p>
                  <p className="text-xs leading-[1.4] text-caption">{size}px</p>
                </div>
              ))}
            </div>
          </div>
          {/* CUSTOM CLASSES */}
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16 border-t border-border py-12">
            <div className="flex flex-col gap-1 pt-1">
              <p className="subtitle text-xl text-title">custom classes</p>
              <p className="text-base leading-[1.7] text-disabled">
                utility classes that apply specific styles to any text component
              </p>
            </div>
            <div className="flex flex-col gap-y-12">
              {/* FONT-NOTHING-DOTS */}
              <div className="flex flex-col gap-y-2">
                <p className="text-xs leading-[1.4] text-caption">font-nothing-dots</p>
                <p className="text-5xl leading-[1.05] font-nothing-dots text-title">Dots</p>
                <p className="text-5xl leading-[1.05] font-nothing-dots text-accent">Dots</p>
              </div>
              {/* FONT-NOTHING-SUBTITLE */}
              <div className="flex flex-col gap-y-2">
                <p className="text-xs leading-[1.4] text-caption">font-nothing-subtitle</p>
                <p className="text-base leading-[1.7] font-nothing-subtitle text-title">font nothing subtitle</p>
                <p className="text-base leading-[1.7] font-nothing-subtitle text-caption">font nothing subtitle</p>
                <p className="text-base leading-[1.7] font-nothing-subtitle text-disabled">font nothing subtitle</p>
                <p className="text-base leading-[1.7] font-nothing-subtitle text-accent">font nothing subtitle</p>
              </div>
              {/* FONT-NOTHING-CODE */}
              <div className="flex flex-col gap-y-2">
                <p className="text-xs leading-[1.4] text-caption">font-nothing-code</p>
                <p className="text-base leading-[1.7] font-nothing-code text-body">font nothing code</p>
                <p className="text-base leading-[1.7] font-nothing-code text-caption">font nothing code</p>
                <p className="text-base leading-[1.7] font-nothing-code text-accent">font nothing code</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
