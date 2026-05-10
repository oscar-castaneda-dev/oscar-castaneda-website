import Link from "next/link";

import { BuildingProject } from "@/data/building";
import { Heading } from "@/app/components/typography/heading";
import { ProgressBar } from "@/app/components/ui/progress-bar";
import { StatusDot } from "@/app/components/ui/status-dot";
import { Text } from "@/app/components/typography/text";

interface ActiveProjectProps {
  project: BuildingProject;
}

export function ActiveProject({ project }: ActiveProjectProps) {
  const total =
    project.done.length + project.inProgress.length + project.upcoming.length;

  const progress = Math.round((project.done.length / total) * 100);

  return (
    <section className="space-y-12">
      {/* HEADER ACTIVE CARD */}
      <Link
        href={`/work/${project.slug}`}
        className="bg-green-surface border border-green-border rounded-2xl p-8 block transition-colors duration-200 hover:border-green-400/40 hover:bg-[#0d2210]"
      >
        <div className="flex items-center gap-2 mb-6">
          <StatusDot />
          <Text size={12} className="font-nothing-subtitle">
            Currently Building
          </Text>
        </div>
        <Heading size={44} as="h2" className="text-green-400 mb-2">
          {project.name}
        </Heading>
        <Text size={12} className="font-nothing-subtitle">
          {project.type} - {project.year}
        </Text>
      </Link>
      {/* PROGRESS BAR */}
      <div className="space-y-3">
        <div className="flex justify-between items-baseline">
          <Text size={12} className="font-nothing-subtitle">
            progress
          </Text>
          <Text size={48}>{progress}%</Text>
        </div>
        <ProgressBar total={total} filled={project.done.length} />
      </div>
    </section>
  );
}
