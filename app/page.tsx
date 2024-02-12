import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { client } from "@/lib/sanity";

import { ICompactDailyBlogPosts } from "@/types/sanity-schemas/daily-blog.types";
import { formatDate } from "@/utils/date";
import Link from "next/link";

async function getData(): Promise<ICompactDailyBlogPosts[]> {
  const query = `
    *[_type == "daily-blog"] | order(_createdAt desc) {
      title,
      smallDescription,
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
    <div>
      {data.map((post) => (
        <Card key={post.currentSlug}>
          <CardContent className="mt-5 text-center">
            <small>{formatDate(post.createdAt)}</small>
            <h2 className="text-lg line-clamp-2 mt-2 font-semibold">
              {post.title}
            </h2>
            <p className="line-clamp-3 text-sm  text-gray-600 dark:text-gray-300">
              {post.smallDescription}
            </p>
            <Button className="mt-4">
              <Link href={`daily-blog/${post.currentSlug}`}>Read More</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
