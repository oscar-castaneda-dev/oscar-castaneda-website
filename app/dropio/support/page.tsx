import type { Metadata } from "next";
import { Main } from "@/app/components/layout/main";
import { DotGrid } from "@/app/components/ui/dot-grid";

export const metadata: Metadata = {
  title: "Support — Dropio",
  description:
    "Get help with Dropio, the manual subscription tracking app for iPhone. Email us at support@oscarcastaneda.dev.",
};

export default function DriopioSupportPage() {
  return (
    <Main>
      <section className="relative flex-1 flex items-center overflow-hidden border-b border-border min-h-[80vh]">
        <DotGrid />
        <div className="container relative py-24">
          <div className="max-w-2xl">
            <p className="font-nothing-subtitle text-xs text-body mb-12">
              Dropio · Support
            </p>

            <h1 className="heading-44 uppercase mb-10">
              Need help
              <br />
              with Dropio?
            </h1>

            <p className="font-sans text-xl text-body mb-10 max-w-sm leading-relaxed">
              Send us an email and we&apos;ll get back to you as soon as
              possible.
            </p>

            <a
              href="mailto:support@oscarcastaneda.dev"
              className="font-mono text-2xl text-success hover:text-green-400 hover:underline transition-colors duration-200"
            >
              support@oscarcastaneda.dev
            </a>
          </div>
        </div>
      </section>

      <div className="py-8">
        <div className="container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-nothing-subtitle text-sm text-caption">
            Dropio is a manual subscription tracking app for iPhone.
          </p>
          <p className="font-nothing-subtitle text-sm text-caption">
            Built by Permanent Software.
          </p>
        </div>
      </div>
    </Main>
  );
}
