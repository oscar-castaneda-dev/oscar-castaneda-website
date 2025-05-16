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
            src="/road.webp"
            alt={`${project.title} thumbnail`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      <div className="text-center">
        <h3 className="font-medium text-gray-800 dark:text-gray-100">
          {project.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {project.category}
        </p>
      </div>
    </Link>
  );
}
