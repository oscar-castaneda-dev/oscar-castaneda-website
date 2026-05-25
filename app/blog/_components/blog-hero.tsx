import { DotGrid } from "@/app/components/ui/dot-grid";
import { BlogFeaturedCard } from "@/app/blog/_components/blog-featured-card";

export function BlogHero() {
  return (
    <section className="py-16 relative overflow-hidden ">
      <DotGrid />
      <div className="container relative border-b pb-16 border-border">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* LEFT COLUMNS */}
          <div className="col-span-1 lg:col-span-3 flex flex-col">
            <p className="subtitle text-xl mb-2 text-caption">// writing</p>
            <h1 className="heading-48 uppercase mb-4">Blog</h1>
            <div className="flex flex-col gap-y-4 max-w-lg mb-6">
              <p>
                I write about building for the web, shipping AI products, and
                leading engineering teams. Less theory — more things that
                actually make it to production.
              </p>
            </div>
          </div>
          {/* RIGHT COLUMN */}
          <div className="hidden lg:block lg:col-span-2">
            <BlogFeaturedCard
              date="May 15, 2026"
              excerpt="The tools are moving fast. Here's what's actually worth paying attention to."
              href="/blog/abc"
              image="/images/montain.webp"
              imageAlt="something"
              title="How AI Is Changing the Way We Build for the Web"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
