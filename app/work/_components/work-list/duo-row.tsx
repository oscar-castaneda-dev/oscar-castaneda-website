import { WorkCard } from "./work-card";
import type { Project } from "@/data/projects";

interface DuoRowProps {
  items: Project[];
}

export function DuoRow({ items }: DuoRowProps) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {items.map((project) => (
        <div key={project.slug} className="h-50 md:h-70">
          <WorkCard project={project} variant="small" />
        </div>
      ))}
    </div>
  );
}
