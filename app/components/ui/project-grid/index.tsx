import { Building } from "./building";
import { Experience } from "./experience";
import { Location } from "./location";
import { ProjectCard } from "./project-card";
import { PROJECTS } from "@/data/projects";
import { Role } from "./role";
import { Something } from "./something";
import { Stack } from "./stack";
import { Contact } from "./contact";

export function ProjectGrid() {
  return (
    <section className="container mb-24 project-grid">
      <ProjectCard area="project1" project={PROJECTS[0]} featured />
      <Experience />
      <Role />
      <Building />
      <Location />
      <ProjectCard area="project2" project={PROJECTS[1]} />
      <Something />
      <Stack />
      <ProjectCard area="project3" project={PROJECTS[2]} />
      <ProjectCard area="project4" project={PROJECTS[3]} />
      <Contact />
    </section>
  );
}
