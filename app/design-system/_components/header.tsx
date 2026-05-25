import { DotGrid } from "@/app/components/ui/dot-grid";

export function Header() {
  return (
    <section className="py-24 border-border border-b relative">
      <DotGrid />
      <div className="container space-y-8">
        <p className="subtitle text-xl text-caption">// system design</p>
        <h1 className="heading-64 uppercase">
          design
          <br />
          system
        </h1>
        <p className="text-lg max-w-96">
          Components, tokens, and patterns that make up this site.
        </p>
      </div>
    </section>
  );
}
