import { Gallery } from "@/components/project/gallery";
import { InfoPanel } from "@/components/project/info-panel";
import { ProjectHeader } from "@/components/project/project-header";
import { TwoColumnLayout } from "@/components/project/two-column-layout";

export default function ProjectPage() {
  return (
    <div className="my-12">
      <ProjectHeader />
      <TwoColumnLayout>
        <Gallery />
        <InfoPanel />
      </TwoColumnLayout>
    </div>
  );
}
