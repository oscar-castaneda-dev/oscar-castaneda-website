import { notFound } from "next/navigation";

import { Description } from "./_components/description";
import { Main } from "@/app/components/layout/main";
import { PROJECTS } from "@/data/projects";
import { SingleProjectGrid } from "./_components/single-project-grid";
import { SingleProjectHeader } from "./_components/single-project-header";

interface SingleWorkPageProps {
  params: Promise<{ slug: string }>;
}

export default async function SingleWorkPage({ params }: SingleWorkPageProps) {
  const { slug } = await params;

  const project = PROJECTS.find((project) => slug === project.slug);

  if (!project) notFound();

  return (
    <Main>
      <SingleProjectHeader project={project} />
      <Description project={project} />
      <SingleProjectGrid project={project} />
    </Main>
  );
}
