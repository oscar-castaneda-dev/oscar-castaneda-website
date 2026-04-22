import { DotGrid } from "@/app/components/ui/dot-grid";
import { Heading } from "@/app/components/typography/heading";
import { Subtitle } from "@/app/components/typography/subtitle";
import { Text } from "@/app/components/typography/text";

export function Header() {
  return (
    <section className="py-24 border-border border-b relative">
      <DotGrid />
      <div className="container space-y-8">
        <Subtitle>// system design</Subtitle>
        <Heading size={64} className="uppercase">
          design
          <br />
          system
        </Heading>
        <Text size={24} className="max-w-96">
          Components, tokens, and patterns that make up this site.
        </Text>
      </div>
    </section>
  );
}
