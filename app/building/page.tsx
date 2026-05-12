import { ActiveProject } from "./_components/active-project";
import { BUILDING_PROJECTS } from "@/data/building";
import { CompletedProject } from "./_components/completed-project";
import { Main } from "@/app/components/layout/main";
import { PendingProject } from "./_components/pending-project";

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
          <div className="border-t border-border" />
          {completedProjects.map((completedProject) => (
            <CompletedProject
              key={completedProject.slug}
              project={completedProject}
            />
          ))}
        </>
      )}

      {/* PENDING PROJECTS */}
      {pendingProjects.length > 0 && (
        <>
          <div className="border-t border-border" />
          {pendingProjects.map((pendingProject) => (
            <PendingProject
              key={pendingProject.slug}
              project={pendingProject}
            />
          ))}
        </>
      )}
    </Main>
  );
}
