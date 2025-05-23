import { Metadata } from "next";
import { getPosts } from "@/lib/postLoader";

export async function generateMetadata(): Promise<Metadata> {
  const posts = await getPosts();
  const recentPostTitles = posts
    .slice(0, 3)
    .map((post) => post.title)
    .join(", ");

  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://oscarcastaneda.dev";
  const url = `${baseUrl}/blog`;
  const featuredImagePath = "/blog-featured.jpg";

  return {
    title: "Daily dev log | Development Blog",
    description: `A developer's journal of progress sharing what I learn as I build. Recent posts: ${recentPostTitles}`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "Daily dev log | Development Blog",
      description: `A developer's journal of progress sharing what I learn as I build. Recent posts: ${recentPostTitles}`,
      type: "website",
      url,
      images: [
        {
          url: `${baseUrl}${featuredImagePath}`,
          width: 1200,
          height: 630,
          alt: "Daily dev log featured image",
          type: "image/jpeg",
        },
      ],
      siteName: "Oscar Castaneda",
    },
    twitter: {
      card: "summary_large_image",
      title: "Daily dev log | Development Blog",
      description:
        "A developer's journal of progress sharing what I learn as I build.",
      images: [`${baseUrl}${featuredImagePath}`],
    },
  };
}
