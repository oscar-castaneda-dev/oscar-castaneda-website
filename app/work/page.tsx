import { Main } from "@/app/components/layout/main";
import { WorkHero } from "./_components/work-hero";
import { WorkList } from "./_components/work-list";

export default function WorkPage() {
  return (
    <Main>
      <WorkHero />
      <WorkList />
    </Main>
  );
}
