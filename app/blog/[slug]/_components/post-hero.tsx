import Image from "next/image";

import { DotGrid } from "@/app/components/ui/dot-grid";

export function PostHero() {
  return (
    <section className="pt-24 pb-16 relative overflow-hidden">
      <DotGrid />
      <div className="container relative">
        <div className="mx-auto max-w-4xl flex flex-col items-center text-center gap-6">
          <h1 className="heading-48">
            Designing websites faster with shadcn/ui
          </h1>
          <p className="text-lg text-body max-w-md">
            A step-by-step guide to building a modern, responsive blog using
            React and Tailwind CSS.
          </p>
          {/* AUTHOR AND DATE */}
          <div className="flex flex-col items-center uppercase tracking-widest border-t border-border pt-4">
            <Image
              src="/images/avatar.webp"
              alt="Oscar Castaneda"
              width={200}
              height={200}
              className="w-12 h-12 rounded-full border border-border object-cover object-center grayscale shrink-0 mb-3"
            />
            <p className="text-sm">Oscar Castaneda</p>
            <p className="text-xs text-body">May 18, 2026</p>
          </div>
        </div>
        {/* COVER IMAGE */}
        <div className="mt-8 mx-auto max-w-5xl border border-border bg-card relative overflow-hidden aspect-video">
          <Image
            src="/images/montain.webp"
            alt="Post cover"
            fill
            sizes="(max-width: 1024px) 100vw, 1280px"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
