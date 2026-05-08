import Image from "next/image";
import Link from "next/link";

import { Heading } from "@/app/components/typography/heading";
import { Subtitle } from "@/app/components/typography/subtitle";

import type { WorkCardVariant } from "./types";
import type { Project } from "@/data/projects";
import { formatNumber } from "@/app/lib/format-number";

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
          <Subtitle color="body" as="span">
            {num} - {project.category}
          </Subtitle>
        </div>
        <div>
          <Heading size={36} as="h2" className="uppercase">
            {project.title}
          </Heading>
          <Subtitle color="caption" className="mt-1">
            {project.year}
          </Subtitle>
        </div>
      </div>
    </Link>
  );
}
