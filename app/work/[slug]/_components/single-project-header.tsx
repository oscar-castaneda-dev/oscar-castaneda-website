import { DotGrid } from "@/app/components/ui/dot-grid";
import { Project } from "@/data/projects";
import { Subtitle } from "@/app/components/typography/subtitle";
import { Heading } from "@/app/components/typography/heading";
import { ButtonPrimary } from "@/app/components/buttons/button-primary";
import { ButtonSecondary } from "@/app/components/buttons/button-secondary";
import { Text } from "@/app/components/typography/text";
import { GitHubIcon } from "@/app/components/icons/github";
import { ArrowRightUpIcon } from "@/app/components/icons/arrow-right-up";
import Image from "next/image";
import { StatsBar } from "@/app/components/ui/stats-bar";

interface SingleProjectHeaderProps {
  project: Project;
}

export function SingleProjectHeader({ project }: SingleProjectHeaderProps) {
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
    <section className="py-16 relative overflow-hidden">
      <DotGrid />
      <div className="container relative mb-8">
        <Subtitle className="mb-2">// case study</Subtitle>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-8 mb-4">
          <div>
            <Heading size={48} className="uppercase">
              {project.title}
            </Heading>
            <Text color="body" className="capitalize">
              {project.summary}
            </Text>
          </div>
          <div className="flex gap-3 shrink-0">
            <ButtonPrimary href={project.projectUrl}>
              live site <ArrowRightUpIcon size={24} />
            </ButtonPrimary>
            {project.githubUrl && (
              <ButtonSecondary href={project.githubUrl}>
                github <GitHubIcon size={24} />
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
