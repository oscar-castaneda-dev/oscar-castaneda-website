import { WorkCard } from "./work-card";
import type { Project } from "@/data/projects";

interface TrioRowProps {
  startIndex: number;
  items: Project[];
}

export function TrioRow({ items, startIndex }: TrioRowProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {items.map((project, i) => (
        <div key={project.slug} className="h-50 sm:h-70">
          <WorkCard project={project} projectNumber={startIndex + i} variant="small" />
        </div>
      ))}
    </div>
  );
}
