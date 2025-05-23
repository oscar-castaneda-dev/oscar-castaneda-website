import { Metadata } from "next";

export function generateMetadata(): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const featuredImagePath = "/blog-featured.webp";

  return {
    title: "Oscar | Financial Software Developer",
    description:
      "I develop financial software with emphasis on visual design. Check out my projects and portfolio.",
    alternates: {
      canonical: baseUrl,
    },
    openGraph: {
      title: "Oscar | Financial Software Developer",
      description:
        "I develop financial software with emphasis on visual design. Check out my projects and portfolio.",
      type: "website",
      url: baseUrl,
      images: [
        {
          url: `${featuredImagePath}`,
          width: 1200,
          height: 630,
          alt: "Oscar - Financial Software Developer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Oscar | Financial Software Developer",
      description:
        "I develop financial software with emphasis on visual design.",
      images: [`${featuredImagePath}`],
    },
  };
}
