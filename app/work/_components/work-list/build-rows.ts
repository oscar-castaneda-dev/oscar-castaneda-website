import type { Project } from "@/data/projects";
import type { ProjectRow } from "../work-list/types";

export function buildRows(projects: Project[]) {
  const rows: ProjectRow[] = [];

  let index = 0;

  while (index < projects.length) {
    const remaining = projects.length - index;

    if (remaining >= 4) {
      rows.push({
        type: "featured",
        items: projects.slice(index, index + 3),
        startIndex: index,
      });
      rows.push({
        type: "wide",
        items: [projects[index + 3]],
        startIndex: index + 3,
      });
      index += 4;
    } else if (remaining === 3) {
      rows.push({
        type: "trio",
        items: projects.slice(index, index + 3),
        startIndex: index,
      });
      index += 3;
    } else if (remaining === 2) {
      rows.push({
        type: "duo",
        items: projects.slice(index, index + 2),
        startIndex: index,
      });
      index += 2;
    } else {
      rows.push({ type: "wide", items: [projects[index]], startIndex: index });
      index += 1;
    }
  }
}
