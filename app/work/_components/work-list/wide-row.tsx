import { WorkCard } from "./work-card";
import type { Project } from "@/data/projects";

interface WideRowProps {
  item: Project;
}

export function WideRow({ item }: WideRowProps) {
  return (
    <div className="h-50 md:h-65">
      <WorkCard project={item} variant="wide" />
    </div>
  );
}
