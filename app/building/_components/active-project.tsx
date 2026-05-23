import Link from "next/link";

import { BuildingProject } from "@/data/building";
import { getProjectColumns, columnGridClass } from "./columns";
import { ProgressBar } from "@/app/components/ui/progress-bar";
import { StatusDot } from "@/app/components/ui/status-dot";

interface ActiveProjectProps {
  project: BuildingProject;
}

export function ActiveProject({ project }: ActiveProjectProps) {
  const total =
    project.done.length + project.inProgress.length + project.upcoming.length;

  const progress = Math.round((project.done.length / total) * 100);

  const columns = getProjectColumns(project);

  return (
    <section className="space-y-12">
      {/* HEADER ACTIVE CARD */}
      <Link
        href={`/work/${project.slug}`}
        className="bg-green-surface border border-green-border rounded-2xl p-8 block transition-colors duration-200 hover:border-green-400/40 hover:bg-[#0d2210]"
      >
        <div className="flex items-center gap-2 mb-6">
          <StatusDot />
          <p className="subtitle text-xs">currently building</p>
        </div>
        <h2 className="heading-44 text-green-400 mb-2">{project.name}</h2>
        <p className="subtitle text-xs">
          {project.type} - {project.year}
        </p>
      </Link>
      {/* PROGRESS BAR */}
      <div className="space-y-3">
        <div className="flex justify-between items-baseline">
          <p className="subtitle text-xs">progress</p>
          <p className="text-5xl">{progress}%</p>
        </div>
        <ProgressBar total={total} filled={project.done.length} />
      </div>
      {/* COLUMNS - TO DO, IN PROGRESS, DONE */}
      <div className={`grid ${columnGridClass[columns.length]} gap-8`}>
        {columns.map((column) => (
          <div key={column.label}>
            <p className="subtitle text-sm block mb-4">{column.label}</p>
            {column.items.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 py-3 border-t border-border"
              >
                <p className={`text-sm shrink-0 ${column.symbolClass}`}>
                  {column.symbol}
                </p>
                <p className="text-sm">{item}</p>
              </div>
            ))}
            <div className="border-t border-border" />
          </div>
        ))}
      </div>
    </section>
  );
}
