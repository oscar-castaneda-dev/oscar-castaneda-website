import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: {
    id: number;
    category: string;
    title: string;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group">
      <Link href="/">
        <div className="rounded-md aspect-[4/3] mb-3 overflow-hidden relative">
          <Image
            src="/placeholder.svg"
            alt={`${project.title} thumbnail`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <div>
        <Link href="/">
          <h3 className="font-bold group-hover:underline text-3xl leading-tight line-clamp-1">
            {project.title}
          </h3>
        </Link>
        <p className="line-clamp-1">{project.category}</p>
      </div>
    </div>
  );
}
