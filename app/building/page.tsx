import { BUILDING_PROJECTS } from "@/data/building";
import { Main } from "@/app/components/layout/main";

import { ActiveProject } from "./_components/active-project";

export default function BuildingPage() {
  const activeProjects = BUILDING_PROJECTS.filter(
    (project) => project.status === "active",
  );

  const completedProjects = BUILDING_PROJECTS.filter(
    (project) => project.status === "completed",
  );

  const pendingProjects = BUILDING_PROJECTS.filter(
    (project) => project.status === "pending",
  );

  return (
    <Main className="container py-16 space-y-24">
      {/* ACTIVE PROJECTS */}
      {activeProjects.length > 0 && (
        <>
          {activeProjects.map((activeProject) => (
            <ActiveProject key={activeProject.slug} project={activeProject} />
          ))}
        </>
      )}

      {/* COMPLETED PROJECTS */}
      {completedProjects.length > 0 && (
        <>
          {completedProjects.map((completedProject) => (
            <ActiveProject
              key={completedProject.slug}
              project={completedProject}
            />
          ))}
        </>
      )}

      {/* PENDING PROJECTS */}
      {pendingProjects.length > 0 && (
        <>
          {pendingProjects.map((pendingProject) => (
            <ActiveProject key={pendingProject.slug} project={pendingProject} />
          ))}
        </>
      )}
    </Main>
  );
}
