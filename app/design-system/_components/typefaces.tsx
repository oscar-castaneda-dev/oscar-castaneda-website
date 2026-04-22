import { Heading } from "@/app/components/typography/heading";
import { Subtitle } from "@/app/components/typography/subtitle";
import { Text } from "@/app/components/typography/text";
import {
  HEADING_SIZES,
  SUBTITLE_SIZES,
  TEXT_SIZES,
} from "@/data/design-system";

export function Typefaces() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="py-16">
          <Subtitle>02 - Typography</Subtitle>
        </div>
        <div className="flex flex-col gap-12">
          {/* HEADINGS */}
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16 border-t border-border py-12">
            <div className="flex flex-col gap-1 pt-1">
              <Subtitle className="text-title">heading</Subtitle>
              <Text className="text-disabled mb-4">doto</Text>
              <div className="flex flex-col gap-1 mt-4">
                <Subtitle className="text-title">props</Subtitle>
                <Text className="text-title">size</Text>
                <Text className="text-caption">64, 48, 44</Text>
                <Text className="text-title">as</Text>
                <Text className="text-caption">h1, h2, h3</Text>
              </div>
            </div>
            <div className="flex flex-col gap-y-12">
              {HEADING_SIZES.map((size) => (
                <div
                  key={size}
                  className="flex flex-col items-baseline gap-y-2"
                >
                  <Heading size={size}>Heading</Heading>
                  <Text>{size}px</Text>
                </div>
              ))}
            </div>
          </div>
          {/* SUBTITLE */}
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16 border-t border-border py-12">
            <div className="flex flex-col gap-1 pt-1">
              <Subtitle className="text-title">subtitle</Subtitle>
              <Text className="text-disabled mb-4">space mono</Text>
              <div className="flex flex-col gap-1 mt-4">
                <Subtitle className="text-title">props</Subtitle>
                <Text className="text-title">size</Text>
                <Text className="text-caption">20, 24, 30, 36</Text>
                <Text className="text-title">color</Text>
                <Text className="text-caption">caption, disabled, white, body, success, warning, accent</Text>
                <Text className="text-title">as</Text>
                <Text className="text-caption">span, p, div</Text>
              </div>
            </div>
            <div className="flex flex-col gap-y-12">
              {SUBTITLE_SIZES.map((size) => (
                <div
                  key={size}
                  className="flex flex-col items-baseline gap-y-2"
                >
                  <Subtitle size={size}>Subtitle</Subtitle>
                  <Text size={12}>{size}px</Text>
                </div>
              ))}
            </div>
          </div>
          {/* TEXT */}
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16 border-t border-border py-12">
            <div className="flex flex-col gap-1 pt-1">
              <Subtitle className="text-title">text</Subtitle>
              <Text className="text-disabled mb-4">space grotesk</Text>
              <div className="flex flex-col gap-1 mt-4">
                <Subtitle className="text-title">props</Subtitle>
                <Text className="text-title">size</Text>
                <Text className="text-caption">12, 14, 16, 18, 20, 24, 30, 36, 48, 60</Text>
                <Text className="text-title">color</Text>
                <Text className="text-caption">body, caption</Text>
              </div>
            </div>
            <div className="flex flex-col gap-y-12">
              {TEXT_SIZES.map((size) => (
                <div
                  key={size}
                  className="flex flex-col items-baseline gap-y-2"
                >
                  <Text size={size}>Text</Text>
                  <Text size={12} color="caption">
                    {size}px
                  </Text>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
