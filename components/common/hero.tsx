interface HeroProps {
  title: string;
  subtitle: string;
}

export function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="my-16">
      <div className="max-w-4xl">
        <h1 className="text-5xl font-bold tracking-tight">
          {title} <span className="font-normal">{subtitle}</span>
        </h1>
      </div>
    </section>
  );
}
