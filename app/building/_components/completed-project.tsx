import Link from "next/link";

import { BuildingProject } from "@/data/building";
import { ProgressBar } from "@/app/components/ui/progress-bar";

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
            <p className="subtitle text-xs">completed</p>
          </div>
          <h2 className="heading-44 text-indigo-400 mb-2">{project.name}</h2>
          <p className="subtitle text-xs">
            {project.type} - {project.year}
          </p>
        </div>
      </Link>
      {/* PROGRESS BAR */}
      <div className="space-y-3">
        <div className="flex justify-between items-baseline">
          <p className="subtitle text-xs">progress</p>
          <p className="text-5xl">100%</p>
        </div>
        <ProgressBar
          total={project.done.length}
          filled={project.done.length}
          filledClassName="bg-indigo-400"
        />
      </div>
      {/* COLUMN DONE */}
      <p className="subtitle text-sm block mb-8">done</p>
      <div className="grid grid-cols-1 gap-4">
        {project.done.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-3 py-3 border-t border-border"
          >
            <p className="text-sm text-indigo-400 shrink-0">✓</p>
            <p className="text-sm">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
