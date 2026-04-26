import { Main } from "@/app/components/layout/main";
import { ProjectGrid } from "@/app/components/ui/project-grid";
import { Hero } from "./home/hero";

export default function Home() {
  return (
    <Main>
      <Hero />
      <ProjectGrid />
    </Main>
  );
}
