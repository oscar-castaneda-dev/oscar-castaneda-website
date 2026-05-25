import Image from "next/image";
import Link from "next/link";

import { formatNumber } from "@/app/lib/format-number";
import type { Project } from "@/data/projects";
import type { WorkCardVariant } from "./types";

interface WorkCardProps {
  project: Project;
  projectNumber: number;
  variant: WorkCardVariant;
}

export function WorkCard({ project, projectNumber, variant }: WorkCardProps) {
  const num = formatNumber(projectNumber);

  return (
    <Link
      href={`/work/${project.slug}`}
      className="relative block h-full overflow-hidden rounded-lg border border-border bg-card group transition-colors duration-200 hover:border-outline"
    >
      <Image
        src={project.img}
        alt={project.title}
        fill
        loading="eager"
        sizes={
          variant === "featured"
            ? "(min-width: 768px) 60vw, 100vw"
            : variant === "wide"
              ? "100vw"
              : "(min-width: 768px) 30vw, 100vw"
        }
        className="object-cover opacity-50 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/15 to-transparent transition-opacity duration-300 group-hover:opacity-0" />
      <div className="absolute inset-0 flex flex-col justify-between p-5 transition-opacity duration-300 group-hover:opacity-0">
        <div className="flex">
          <span className="subtitle text-xl text-body">
            {num} - {project.category}
          </span>
        </div>
        <div>
          <h2 className="heading-36 uppercase mb-1">{project.title}</h2>
          <p className="subtitle text-xl text-caption">{project.year}</p>
        </div>
      </div>
    </Link>
  );
}
