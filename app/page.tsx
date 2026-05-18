import { Main } from "@/app/components/layout/main";
import { HomeGrid } from "@/app/home/_components/home-grid";
import { HomeHero } from "./home/_components/home-hero";

export default function Home() {
  return (
    <Main>
      <HomeHero />
      <HomeGrid />
    </Main>
  );
}
