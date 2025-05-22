import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Oscar | Financial Software Developer",
    description:
      "I develop financial software with emphasis on visual design. Check out my projects and portfolio.",
    alternates: {
      canonical: "https://www.oscarcastaneda.dev",
    },
    openGraph: {
      title: "Oscar | Financial Software Developer",
      description:
        "I develop financial software with emphasis on visual design. Check out my projects and portfolio.",
      type: "website",
      url: "https://www.oscarcastaneda.dev",
      images: [
        {
          url: "https://www.oscarcastaneda.dev/blog-featured.webp",
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
      images: ["https://www.oscarcastaneda.dev/blog-featured.webp"],
    },
  };
}
