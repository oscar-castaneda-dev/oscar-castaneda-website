import { BuildingProject } from "@/data/building";

interface ActiveProjectProps {
  project: BuildingProject;
}

export function ActiveProject({}: ActiveProjectProps) {
  return (
    <div>
      <p>ActiveProject</p>
    </div>
  );
}
