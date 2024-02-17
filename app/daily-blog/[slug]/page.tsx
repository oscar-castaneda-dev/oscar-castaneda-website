import { Metadata } from "next";

import { client } from "@/lib/sanity";
import { IDailyBlogPost } from "@/types/sanity-schemas/daily-blog.types";
import { formatDate } from "@/utils/date";
import { PortableText } from "@portabletext/react";

export const revalidate = 1800;

interface IProps {
  params: {
    slug: string;
  };
}

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

export const generateMetadata = async (params: IProps): Promise<Metadata> => {
  const data = (await getData(params.params.slug)) ?? {};
  const { title } = data;

  return {
    title: `${title}`,
  };
};

export default async function DailyBlogPost(params: IProps) {
  const {
    params: { slug },
  } = params;

  const data = (await getData(slug)) ?? {};
  const { title, content, createdAt } = data;

  return (
    <div>
      <div className="text-center mb-16 md:mb-28">
        <time className="text-sm">{formatDate(createdAt)}</time>
        <h1 className="text-5xl md:text-7xl mt-9">{title}</h1>
      </div>
      <div className="prose prose-neutral prose-xl dark:prose-invert">
        <PortableText value={content} />
      </div>
    </div>
  );
}
