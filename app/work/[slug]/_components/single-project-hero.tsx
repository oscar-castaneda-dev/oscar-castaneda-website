import { DotGrid } from "@/app/components/ui/dot-grid";
import { Project } from "@/data/projects";
import { ButtonPrimary } from "@/app/components/buttons/button-primary";
import { ButtonSecondary } from "@/app/components/buttons/button-secondary";
import { GitHubIcon } from "@/app/components/icons/github";
import { ArrowRightUpIcon } from "@/app/components/icons/arrow-right-up";
import Image from "next/image";
import { StatsBar } from "@/app/components/ui/stats-bar";
import { AppStoreIcon } from "@/app/components/icons/app-store";

interface SingleProjectHeroProps {
  project: Project;
}

export function SingleProjectHero({ project }: SingleProjectHeroProps) {
  const projectStats = [
    {
      label: "year",
      value: project.year,
    },
    {
      label: "platform",
      value: project.category,
    },
    {
      label: "stack",
      value: project.stack,
    },
    {
      label: "status",
      value: project.status,
      fontClasses:
        project.status === "shipped" ? "text-success" : "text-warning",
    },
  ];

  return (
    <section className="pt-16 relative overflow-hidden">
      <DotGrid />
      <div className="container relative mb-8">
        <p className="subtitle text-xl text-caption mb-2">// case study</p>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-8 mb-6">
          <div>
            <h1 className="heading-48 uppercase">{project.title}</h1>
            <p className="text-body capitalize">{project.summary}</p>
          </div>
          <div className="flex gap-3 shrink-0">
            {project.projectUrl && (
              <ButtonPrimary
                href={project.projectUrl}
                ariaLabel="Visit live site"
              >
                <span className="hidden md:inline">live site</span>
                <ArrowRightUpIcon size={24} />
              </ButtonPrimary>
            )}
            {project.githubUrl && (
              <ButtonSecondary
                href={project.githubUrl}
                ariaLabel="View on GitHub"
              >
                <span className="hidden md:inline">github</span>
                <GitHubIcon size={24} />
              </ButtonSecondary>
            )}
            {project.appStoreUrl && (
              <ButtonSecondary
                href={project.appStoreUrl}
                ariaLabel="Download on the App Store"
              >
                <span className="hidden md:inline">app store</span>
                <AppStoreIcon size={36} />
              </ButtonSecondary>
            )}
          </div>
        </div>
        <div className="relative w-full aspect-video rounded-xl overflow-hidden">
          <Image
            src={project.img}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 1280px"
          />
        </div>
      </div>
      <StatsBar items={projectStats} />
    </section>
  );
}
