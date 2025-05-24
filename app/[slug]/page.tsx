import { FeaturedImage } from "@/components/project/featured-image";
import { ProjectHeader } from "@/components/project/project-header";

export default function ProjectPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <ProjectHeader />
      <FeaturedImage />
    </div>
  );
}
