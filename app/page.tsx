import { Main } from "@/app/components/layout/main";
import { ProjectGrid } from "@/app/components/ui/project-grid";

export default function Home() {
  return (
    <Main>
      <section className="container py-16">
        <ProjectGrid />
      </section>
    </Main>
  );
}
