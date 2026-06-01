import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { loadOgFonts } from "@/lib/og-font";
import { OgImageLayout } from "@/lib/og-image";
import { PROJECTS } from "@/data/projects";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) notFound();

  const fonts = await loadOgFonts();

  return new ImageResponse(
    <OgImageLayout
      label={`// work · ${project.category}`}
      title={project.title}
      description={project.summary}
    />,
    { ...size, fonts },
  );
}
