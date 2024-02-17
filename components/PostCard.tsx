import Link from "next/link";

import { formatDate } from "@/utils/date";
import { ICompactDailyBlogPosts } from "@/types/sanity-schemas/daily-blog.types";

interface IProps {
  post: ICompactDailyBlogPosts;
}

export function PostCard(props: IProps) {
  const { post } = props;

  return (
    <article className="mt-20 mb-32 md:mb-40">
      <time dateTime={post.createdAt} className="text-sm">
        {formatDate(post.createdAt)}
      </time>
      <h2 className="text-4xl md:text-5xl mt-2">
        <Link
          href={`daily-blog/${post.currentSlug}`}
          className="hover:underline decoration-emerald-400"
        >
          {post.title}
        </Link>
      </h2>
    </article>
  );
}
