import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/cn";
import { formatNumber } from "@/app/lib/format-number";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  area: string;
  className?: string;
  featured?: boolean;
  project: Project;
  projectNumber: number;
}

export function ProjectCard({
  area,
  className,
  featured = false,
  project,
  projectNumber,
}: ProjectCardProps) {
  const { category, img, slug, title, year } = project;

  const num = formatNumber(projectNumber);

  return (
    <Link
      href={`/work/${slug}`}
      className={cn(
        "relative block overflow-hidden rounded-lg border border-border bg-card group transition-colors duration-200 hover:border-outline min-h-60",
        className,
      )}
      style={{ gridArea: area }}
    >
      <Image
        src={img}
        alt={title}
        fill
        loading="eager"
        sizes={
          featured
            ? "(min-width: 1024px) 60vw, 100vw"
            : "(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw"
        }
        className="object-cover opacity-50 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/15 to-transparent transition-opacity duration-300 group-hover:opacity-0" />
      <div className="absolute inset-0 flex flex-col justify-between p-5 transition-opacity duration-300 group-hover:opacity-0">
        <p className="subtitle text-xl text-body">
          {num} - {category}
        </p>
        <div>
          <h2
            className={cn(
              "uppercase mb-1",
              featured ? " heading-44" : "heading-36",
            )}
          >
            {title}
          </h2>
          <p className="subtitle text-xl text-caption">{year}</p>
        </div>
      </div>
    </Link>
  );
}
