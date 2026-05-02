import { ABOUT_STATS } from "@/data/about-stats";
import { AboutHero } from "./_components/about-hero";
import { Main } from "@/app/components/layout/main";
import { StatsBar } from "../components/ui/stats-bar";
import { TechStack } from "./_components/tech-stack";
import { WorkExperience } from "./_components/work-experience";

export default function AboutPage() {
  return (
    <Main>
      <AboutHero />
      <StatsBar items={ABOUT_STATS} />
      <WorkExperience />
      <TechStack />
    </Main>
  );
}
