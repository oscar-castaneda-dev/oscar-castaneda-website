import { BuildingProject } from "@/data/building";

interface PendingProjectProps {
  project: BuildingProject;
}

export function PendingProject({}: PendingProjectProps) {
  return (
    <div>
      <p>PendingProject</p>
    </div>
  );
}
