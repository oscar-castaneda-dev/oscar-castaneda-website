import { Metadata } from "next";
import { notFound } from "next/navigation";

import { getPostCached } from "@/lib/postUtils";
import { getPexelsPhotoCached } from "@/lib/pexelUtils";

interface MetaDataProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: MetaDataProps): Promise<Metadata> {
  const { slug } = await params;

  const post = await getPostCached(slug);

  if (!post) return notFound();

  const photo = await getPexelsPhotoCached(post.imageId);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const url = `${baseUrl}/blog/${slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url,
      images: [
        {
          url: photo.src.large,
          width: photo.width,
          height: photo.height,
          alt: photo.alt || post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [photo.src.large],
    },
  };
}
