import { WorkCard } from "./work-card";
import type { Project } from "@/data/projects";

interface FeaturedRowProps {
  items: Project[];
}

export function FeaturedRow({ items }: FeaturedRowProps) {
  const [featured, small1, small2] = items;

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-[3fr_2fr] md:grid-rows-[260px_260px]">
      <div className="h-70 md:h-auto md:row-span-2">
        <WorkCard project={featured} variant="featured" />
      </div>
      <div className="h-50 md:h-auto">
        <WorkCard project={small1} variant="small" />
      </div>
      <div className="h-50 md:h-auto">
        <WorkCard project={small2} variant="small" />
      </div>
    </div>
  );
}
