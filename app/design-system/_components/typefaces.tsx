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
  24: "text-2xl",
  20: "text-xl",
  18: "text-lg",
  16: "text-base",
  14: "text-sm",
  12: "text-xs",
};

const textSizeClass: Record<number, string> = {
  12: "text-xs",
  14: "text-sm",
  16: "text-base",
  18: "text-lg",
  20: "text-xl",
  24: "text-2xl",
  30: "text-3xl",
  36: "text-4xl",
  48: "text-5xl",
  60: "text-6xl",
};

export function Typefaces() {
  return (
    <section className="py-16 border-b border-border">
      <div className="container">
        <div className="py-16">
          <p className="subtitle text-xl text-caption">02 - Typography</p>
        </div>
        <div className="flex flex-col gap-12">
          {/* FONT FAMILIES */}
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16 border-t border-border py-12">
            <div className="flex flex-col gap-1 pt-1">
              <p className="subtitle text-xl text-title">families</p>
              <p className="text-base leading-[1.7] text-disabled mb-4">
                3 typefaces
              </p>
            </div>
            <div className="flex flex-col gap-y-16">
              {/* Doto */}
              <div className="flex flex-col gap-y-3">
                <p className="font-nothing-dots text-5xl md:text-8xl lg:text-9xl text-title">
                  Doto
                </p>
                <div className="flex flex-col gap-y-1">
                  <p className="mb-4">
                    <span>Custom utility:</span>{" "}
                    <span className="text-disabled">font-nothing-dots</span>
                  </p>
                  <p className="text-disabled">Hero headings only</p>
                </div>
              </div>
              {/* Space Mono */}
              <div className="flex flex-col gap-y-3">
                <p className="font-mono text-5xl font-normal text-title">
                  Space Mono
                </p>
                <div className="flex flex-col gap-y-1 mt-1">
                  <p className="mb-4">
                    <span className="text-body">Custom utility:</span>{" "}
                    <span className="text-disabled">font-mono</span>
                  </p>
                  <p className="text-disabled">Used in subtitles and labels</p>
                </div>
              </div>
              {/* Space Grotesk */}
              <div className="flex flex-col gap-y-3">
                <p className="font-sans text-4xl font-light text-title">
                  Space Grotesk
                </p>
                <div className="flex flex-col gap-y-1 mt-1">
                  <p className="mb-4">
                    <span className="text-body">Custom utility:</span>{" "}
                    <span className="text-disabled">font-sans</span>
                  </p>
                  <p className="text-disabled">
                    Used across all body text and paragraphs
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* HEADINGS */}
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16 border-t border-border py-12">
            <div className="flex flex-col gap-1 pt-1">
              <p className="subtitle text-xl text-title">heading</p>
              <p className="text-base leading-[1.7] text-disabled mb-4">doto</p>
            </div>
            <div className="flex flex-col gap-y-12">
              {HEADING_SIZES.map((size) => (
                <div
                  key={size}
                  className="flex flex-col items-baseline gap-y-2"
                >
                  <h1 className={headingClass[size]}>Heading</h1>
                  <p className="text-base leading-[1.7] text-body">
                    {size}px - {headingClass[size]}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* SUBTITLE */}
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16 border-t border-border py-12">
            <div className="flex flex-col gap-1 pt-1">
              <p className="subtitle text-xl text-title">subtitle</p>
              <p className="text-base leading-[1.7] text-disabled mb-4">
                space mono
              </p>
            </div>
            <div className="flex flex-col gap-y-12">
              {SUBTITLE_SIZES.map((size) => (
                <div
                  key={size}
                  className="flex flex-col items-baseline gap-y-2"
                >
                  <p
                    className={`subtitle ${subtitleSizeClass[size]} text-caption`}
                  >
                    Subtitle
                  </p>
                  <p className="text-sm text-body">
                    {size}px - {subtitleSizeClass[size]}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* TEXT */}
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16 border-t border-border py-12">
            <div className="flex flex-col gap-1 pt-1">
              <p className="subtitle text-xl text-title">text</p>
              <p className="text-base leading-[1.7] text-disabled mb-4">
                space grotesk
              </p>
            </div>
            <div className="flex flex-col gap-y-12">
              {TEXT_SIZES.map((size) => (
                <div
                  key={size}
                  className="flex flex-col items-baseline gap-y-2"
                >
                  <p className={`${textSizeClass[size]} text-body`}>Text</p>
                  <p className="text-sm text-caption">
                    {size}px - {textSizeClass[size]}
                  </p>
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
                <p className="text-xs leading-[1.4] text-caption">
                  font-nothing-dots
                </p>
                <p className="text-5xl leading-[1.05] font-nothing-dots text-title">
                  Dots
                </p>
                <p className="text-5xl leading-[1.05] font-nothing-dots text-accent">
                  Dots
                </p>
              </div>
              {/* FONT-NOTHING-SUBTITLE */}
              <div className="flex flex-col gap-y-2">
                <p className="text-xs leading-[1.4] text-caption">
                  font-nothing-subtitle
                </p>
                <p className="text-base leading-[1.7] font-nothing-subtitle text-title">
                  font nothing subtitle
                </p>
                <p className="text-base leading-[1.7] font-nothing-subtitle text-caption">
                  font nothing subtitle
                </p>
                <p className="text-base leading-[1.7] font-nothing-subtitle text-disabled">
                  font nothing subtitle
                </p>
                <p className="text-base leading-[1.7] font-nothing-subtitle text-accent">
                  font nothing subtitle
                </p>
              </div>
              {/* FONT-NOTHING-CODE */}
              <div className="flex flex-col gap-y-2">
                <p className="text-xs leading-[1.4] text-caption">
                  font-nothing-code
                </p>
                <p className="text-base leading-[1.7] font-nothing-code text-body">
                  font nothing code
                </p>
                <p className="text-base leading-[1.7] font-nothing-code text-caption">
                  font nothing code
                </p>
                <p className="text-base leading-[1.7] font-nothing-code text-accent">
                  font nothing code
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
