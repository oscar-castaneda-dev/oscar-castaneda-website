import { ProjectCard } from "./project-card";
import { projects } from "@/data/sampleProjects";

export function ProjectGrid() {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
