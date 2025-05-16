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
    <Link href="/" className=" group">
      <div className="relative">
        <div className="bg-white dark:bg-gray-700 rounded-md aspect-[4/3] mb-3 overflow-hidden border border-gray-100 dark:border-gray-600 relative">
          <Image
            src="/placeholder.svg"
            alt={`${project.title} thumbnail`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      <div>
        <h3 className="font-bold text-3xl leading-tight line-clamp-1">
          {project.title}
        </h3>
        <p className="line-clamp-1">{project.category}</p>
      </div>
    </Link>
  );
}
