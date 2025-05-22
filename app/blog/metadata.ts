import { Metadata } from "next";
import { getPosts } from "@/lib/postLoader";

export async function generateMetadata(): Promise<Metadata> {
  const posts = await getPosts();
  const recentPostTitles = posts
    .slice(0, 3)
    .map((post) => post.title)
    .join(", ");

  return {
    title: "Daily dev log | Development Blog",
    description: `A developer's journal of progress sharing what I learn as I build. Recent posts: ${recentPostTitles}`,
    alternates: {
      canonical: "https://www.oscarcastaneda.dev/blog",
    },
    openGraph: {
      title: "Daily dev log | Development Blog",
      description: `A developer's journal of progress sharing what I learn as I build. Recent posts: ${recentPostTitles}`,
      type: "website",
      url: "https://www.oscarcastaneda.dev/blog",
      images: [
        {
          url: "https://www.oscarcastaneda.dev/blog-featured.webp",
          width: 1200,
          height: 630,
          alt: "Daily dev log featured image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Daily dev log | Development Blog",
      description: `A developer's journal of progress sharing what I learn as I build.`,
      images: ["https://www.oscarcastaneda.dev/blog-featured.webp"],
    },
  };
}
