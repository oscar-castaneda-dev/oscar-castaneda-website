import { BuildingProject } from "@/data/building";

interface PendingProjectProps {
  project: BuildingProject;
}

export function PendingProject({ project }: PendingProjectProps) {
  return (
    <section className="space-y-12">
      {/* HEADER PENDING CARD */}
      <div className="bg-card border border-border rounded-2xl p-8">
        <div className="flex items-center gap-2 mb-6">
          <p className="subtitle text-xs">queued</p>
        </div>
        <h2 className="heading-44 mb-2">{project.name}</h2>
        <p className="subtitle text-xs">
          {project.type} - {project.year}
        </p>
      </div>
      {/* COLUMNS - TO DO */}
      <p className="subtitle text-sm block mb-8">to do</p>
      <div className="grid grid-cols-1 gap-4">
        {project.upcoming.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-3 py-3 border-t border-border"
          >
            <p className="text-sm shrink-0">→</p>
            <p className="text-sm">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
