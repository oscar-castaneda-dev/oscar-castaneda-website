import { Blog } from "./blog";
import { Building } from "./building";
import { Contact } from "./contact";
import { Experience } from "./experience";
import { Location } from "./location";
import { ProjectCard } from "./project-card";
import { PROJECTS } from "@/data/projects";
import { Reading } from "./reading";
import { Role } from "./role";

export function ProjectGrid() {
  return (
    <section className="container mb-24 project-grid">
      <ProjectCard area="project1" project={PROJECTS[0]} featured />
      <Experience />
      <Role />
      <Building />
      <Location />
      <ProjectCard area="project2" project={PROJECTS[1]} />
      <Blog />
      <Reading />
      <ProjectCard area="project3" project={PROJECTS[2]} />
      <ProjectCard area="project4" project={PROJECTS[3]} />
      <Contact />
    </section>
  );
}
