import { WorkCard } from "./work-card";
import type { Project } from "@/data/projects";

interface WideRowProps {
  startIndex: number;
  item: Project;
}

export function WideRow({ item, startIndex }: WideRowProps) {
  return (
    <div className="h-50 md:h-65">
      <WorkCard project={item} projectNumber={startIndex} variant="wide" />
    </div>
  );
}
