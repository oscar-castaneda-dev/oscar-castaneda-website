import { Hero } from "@/components/common/hero";
import { ProjectGrid } from "@/components/home/project-grid";

export default async function Home() {
  return (
    <div>
      <Hero
        title="Hey! I&#39;m Oscar."
        subtitle="I develop financial software with emphasis on visual design."
      />
      <ProjectGrid />
    </div>
  );
}
