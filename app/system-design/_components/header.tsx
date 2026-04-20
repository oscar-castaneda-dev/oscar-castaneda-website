import { Heading } from "@/app/components/typography/heading";
import { Label } from "@/app/components/typography/label";
import { DotGrid } from "@/app/components/ui/dot-grid";

export function Header() {
  return (
    <section className="py-24 border-border border-b relative overflow-hidden">
      <DotGrid />
      <div className="contrainer relative">
        <Label className="mb-12">// SYSTEM · DESIGN</Label>
        <Heading size="hero">
          DESIGN
          <br />
          system
        </Heading>
      </div>
    </section>
  );
}
