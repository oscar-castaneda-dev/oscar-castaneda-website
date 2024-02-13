import { client } from "@/lib/sanity";
import { IDailyBlogPost } from "@/types/sanity-schemas/daily-blog.types";
import { formatDate } from "@/utils/date";
import { PortableText } from "@portabletext/react";

export const revalidate = 1800;

async function getData(slug: string): Promise<IDailyBlogPost> {
  const query = `
    *[_type == "daily-blog" && slug.current == "${slug}"] {
      "currentSlug": slug.current,
      title,
      content,
      "createdAt": _createdAt
    }[0]
  `;

  const data = await client.fetch(query);
  return data;
}

interface IProps {
  params: {
    slug: string;
  };
}

export default async function DailyBlogPost(params: IProps) {
  const {
    params: { slug },
  } = params;

  const data = (await getData(slug)) ?? {};
  const { title, content, createdAt } = data;

  return (
    <div>
      <h1 className="mt-2 block text-4xl text-center leading-8 font-bold tracking-tight">
        {title}
      </h1>
      <p className="text-center mt-4">{formatDate(createdAt)}</p>
      <div className="mt-[60px] prose prose-xl dark:prose-invert">
        <PortableText value={content} />
      </div>
    </div>
  );
}
