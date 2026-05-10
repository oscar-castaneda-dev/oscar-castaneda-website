import { BuildingProject } from "@/data/building";

interface CompletedProjectProps {
  project: BuildingProject;
}

export function CompletedProject({}: CompletedProjectProps) {
  return (
    <div>
      <p>CompletedProject</p>
    </div>
  );
}
