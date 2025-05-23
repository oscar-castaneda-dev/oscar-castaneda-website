import { ProjectCard } from "./project-card";
import { projects } from "@/data/sampleProjects";

export function ProjectGrid() {
  return (
    <section className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}
