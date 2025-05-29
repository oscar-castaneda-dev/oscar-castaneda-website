interface TwoColumnLayoutProps {
  children: React.ReactNode;
}

export function TwoColumnLayout({ children }: TwoColumnLayoutProps) {
  return (
    <section className="grid gap-8 grid-cols-1 lg:grid-cols-[1fr_400px]">
      {children}
    </section>
  );
}
