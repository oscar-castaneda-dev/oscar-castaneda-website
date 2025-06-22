import { H1 } from "./heading";
import { Text } from "./text";

interface HeroProps {
  title: string;
  subtitle: string;
}

export function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="text-center mb-28 space-y-2">
      <H1 className="mb-4">{title}</H1>
      <Text size={24}>{subtitle}</Text>
    </section>
  );
}
