import Link from "next/link";

import { BuildingProject } from "@/data/building";
import { Heading } from "@/app/components/typography/heading";
import { ProgressBar } from "@/app/components/ui/progress-bar";
import { Text } from "@/app/components/typography/text";

interface CompletedProjectProps {
  project: BuildingProject;
}

export function CompletedProject({ project }: CompletedProjectProps) {
  return (
    <div className="space-y-6">
      {/* HEADER COMPLETED CARD */}
      <Link
        href={`/work/${project.slug}`}
        className="bg-indigo-surface border border-indigo-border rounded-2xl p-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 sm:gap-8 transition-colors duration-200 hover:border-indigo-500/40 hover:bg-[#0f0f20]"
      >
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Text size={12} className="font-nothing-subtitle">
              completed
            </Text>
          </div>
          <Heading size={44} as="h2" className="text-indigo-400 mb-2">
            {project.name}
          </Heading>
          <Text size={12} className="font-nothing-subtitle">
            {project.type} - {project.year}
          </Text>
        </div>
        <div className="sm:text-right shrink-0">
          <Text
            size={12}
            className="font-nothing-subtitle text-indigo-300 block mb-8"
          >
            progress
          </Text>
          <Text size={48} className="text-indigo-400">
            100%
          </Text>
        </div>
      </Link>
      {/* PROGRESS BAR */}
      <ProgressBar
        total={project.done.length}
        filled={project.done.length}
        filledClassName="bg-indigo-400"
      />
      {/* COLUMN DONE */}
      <Text size={14} className="font-nothing-subtitle block mb-2">
        done
      </Text>
      <div className="grid grid-cols-1 gap-4">
        {project.done.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-3 py-3 border-t border-border"
          >
            <Text size={14} className="text-indigo-400 shrink-0">
              ✓
            </Text>
            <Text size={14}>{item}</Text>
          </div>
        ))}
      </div>
    </div>
  );
}
