import { type BuildingProject } from "@/data/building";

interface ProjectColumn {
  label: string;
  items: string[];
  symbol: string;
  symbolClass: string;
}

export const columnGridClass: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-3",
};

export function getProjectColumns(project: BuildingProject) {
  const columns: ProjectColumn[] = [
    {
      label: "To Do",
      items: project.upcoming,
      symbol: "→",
      symbolClass: "text-body",
    },
    {
      label: "In Progress",
      items: project.inProgress,
      symbol: "◐",
      symbolClass: "text-warning",
    },
    {
      label: "Done",
      items: project.done,
      symbol: "✓",
      symbolClass: "text-success",
    },
  ];

  return columns.filter((column) => column.items.length > 0);
}
