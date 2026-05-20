import { DotGrid } from "@/app/components/ui/dot-grid";
import { PROFILE_META } from "@/data/profile-meta";
import { ButtonPrimary } from "@/app/components/buttons/button-primary";

export function HomeHero() {
  return (
    <section className="py-24 relative overflow-hidden">
      <DotGrid />
      <div className="container relative z-10 space-y-6">
        <p className="subtitle text-xl text-caption">// AI WEB MOBILE</p>
        <h1 className="heading-64 uppercase">
          oscar <br />
          castaneda
        </h1>
        <p className="max-w-2xl">
          AI Engineer specializing in ML, NLP, and inference-powered digital
          products. Shipping web and mobile applications with AI at the core.
        </p>
        <ButtonPrimary href="/work" className="mb-16">
          View my work
        </ButtonPrimary>
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 border-t border-border py-6">
          {PROFILE_META.map(({ colorClass, label, value }) => (
            <div key={label} className="flex flex-col gap-1">
              <p className="subtitle text-xl text-caption">{label}</p>
              <p className={`uppercase ${colorClass}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
