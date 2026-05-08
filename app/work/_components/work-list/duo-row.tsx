import { WorkCard } from "./work-card";
import type { Project } from "@/data/projects";

interface DuoRowProps {
  startIndex: number;
  items: Project[];
}

export function DuoRow({ items, startIndex }: DuoRowProps) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {items.map((project, i) => (
        <div key={project.slug} className="h-50 md:h-70">
          <WorkCard project={project} projectNumber={startIndex + i} variant="small" />
        </div>
      ))}
    </div>
  );
}
