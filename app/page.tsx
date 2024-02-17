import Link from "next/link";
import { client } from "@/lib/sanity";

import { ICompactDailyBlogPosts } from "@/types/sanity-schemas/daily-blog.types";
import { PostCard } from "@/components/PostCard";

export const revalidate = 1800;

async function getData(): Promise<ICompactDailyBlogPosts[]> {
  const query = `
    *[_type == "daily-blog"] | order(_createdAt desc) {
      title,
      "currentSlug": slug.current,
      "createdAt": _createdAt
    }
  `;

  const data = client.fetch(query);
  return data;
}

export default async function Home() {
  const data = (await getData()) ?? [];

  return (
    <div className="text-center">
      <section className="border-b-2 pb-20">
        <h1 className="text-5xl md:text-6xl mb-7">Oscar Castaneda</h1>
        <p>
          Web developer. I create digital products and document them daily on
          this website. My social networks:{" "}
          <Link
            href="https://github.com/oscar-castaneda-dev"
            target="_blank"
            className="underline"
          >
            github
          </Link>
          ,{" "}
          <Link
            href="https://twitter.com/oscar_casta_dev"
            target="_blank"
            className="underline"
          >
            twitter
          </Link>{" "}
          and{" "}
          <Link
            href="https://www.instagram.com/oscar.castaneda.dev/"
            target="_blank"
            className="underline"
          >
            instagram
          </Link>{" "}
          .
        </p>
      </section>
      <section>
        {data.map((post) => (
          <PostCard key={post.currentSlug} post={post} />
        ))}
      </section>
    </div>
  );
}
