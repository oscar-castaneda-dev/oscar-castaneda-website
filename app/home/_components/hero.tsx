import { DotGrid } from "@/app/components/ui/dot-grid";
import { Heading } from "@/app/components/typography/heading";
import { PROFILE_META } from "@/data/profile-meta";
import { Subtitle } from "@/app/components/typography/subtitle";
import { Text } from "@/app/components/typography/text";
import { ButtonPrimary } from "@/app/components/buttons/button-primary";

export function Hero() {
  return (
    <section className="py-24 relative overflow-hidden">
      <DotGrid />
      <div className="container relative z-10 space-y-6">
        <Subtitle>// AI WEB MOBILE</Subtitle>
        <Heading className="uppercase">
          oscar <br />
          castaneda
        </Heading>
        <Text className="max-w-2xl leading-normal">
          AI Engineer specializing in ML, NLP, and inference-powered digital
          products. Shipping web and mobile applications with AI at the core.
        </Text>
        <ButtonPrimary href="/" className="mb-16">
          View my work
        </ButtonPrimary>
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 border-t border-border py-6">
          {PROFILE_META.map(({ colorClass, label, value }) => (
            <div key={label} className="flex flex-col gap-1">
              <Subtitle>{label}</Subtitle>
              <Text className={`uppercase ${colorClass}`}>{value}</Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
