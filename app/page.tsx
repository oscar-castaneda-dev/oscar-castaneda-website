import { Hero } from "@/components/common/hero";
import { ProjectGrid } from "@/components/home/project-grid";
import { Separator } from "@/components/ui/separator";

export default async function Home() {
  return (
    <div>
      <Hero
        title="Hey! I&#39;m Oscar."
        subtitle="I develop financial software with emphasis on visual design."
      />
      <Separator className="my-12" />
      <h2 className="text-4xl font-bold mb-6">Projects</h2>
      <ProjectGrid />
    </div>
  );
}

export { generateMetadata } from "./metadata";
