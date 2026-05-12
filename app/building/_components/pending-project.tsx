import { BuildingProject } from "@/data/building";
import { Heading } from "@/app/components/typography/heading";
import { Text } from "@/app/components/typography/text";

interface PendingProjectProps {
  project: BuildingProject;
}

export function PendingProject({ project }: PendingProjectProps) {
  return (
    <section className="space-y-12">
      {/* HEADER PENDING CARD */}
      <div className="bg-card border border-border rounded-2xl p-8">
        <div className="flex items-center gap-2 mb-6">
          <Text size={12} className="font-nothing-subtitle">
            queued
          </Text>
        </div>
        <Heading size={44} as="h2" className="mb-2">
          {project.name}
        </Heading>
        <Text size={12} className="font-nothing-subtitle">
          {project.type} - {project.year}
        </Text>
      </div>
      {/* COLUMNS - TO DO */}
      <Text size={14} className="font-nothing-subtitle block mb-8">
        To Do
      </Text>
      <div className="grid grid-cols-1 gap-4">
        {project.upcoming.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-3 py-3 border-t border-border"
          >
            <Text size={14} className="shrink-0">
              →
            </Text>
            <Text size={14}>{item}</Text>
          </div>
        ))}
      </div>
    </section>
  );
}
