import { Main } from "@/app/components/layout/main";
import { ProjectGrid } from "@/app/components/ui/project-grid";
import { HomeHero } from "./home/_components/home-hero";

export default function Home() {
  return (
    <Main>
      <HomeHero />
      <ProjectGrid />
    </Main>
  );
}
