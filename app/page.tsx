import { Hero } from "@/components/common/hero";

export default async function Home() {
  return (
    <div className="min-h-screen">
      <Hero
        title="Hey, I&#39;m Oscar."
        subtitle="Today I learned something and wrote about it."
      />
      <h2 className="text-3xl font-bold mb-6">Daily dev blog</h2>
    </div>
  );
}
