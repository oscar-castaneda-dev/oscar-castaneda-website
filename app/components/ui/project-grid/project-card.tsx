import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/cn";
import { Heading } from "@/app/components/typography/heading";
import { Subtitle } from "@/app/components/typography/subtitle";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  area: string;
  featured?: boolean;
  className?: string;
}

export function ProjectCard({
  project,
  area,
  featured = false,
  className,
}: ProjectCardProps) {
  const { category, img, slug, title, year } = project;

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
        <Subtitle color="body">{category}</Subtitle>
        <div>
          <Heading size={featured ? 44 : 36} as="h2" className="uppercase">
            {title}
          </Heading>
          <Subtitle size={20} color="caption" className="mt-1">
            {year}
          </Subtitle>
        </div>
      </div>
    </Link>
  );
}
