import NextLink from "next/link";

import { H2 } from "@/components/common/heading";
import { Link } from "@/components/common/link";
import { PillButton } from "../buttons/pill-button";
import { Text } from "@/components/common/text";

import type { Post } from "@/types/posts";
import { formatDate } from "@/lib/format-date";

interface PostCard {
  post: Post;
}

export function PostCard({ post }: PostCard) {
  return (
    <article className="border-b pb-12 last:border-b-0 border-gray-300 dark:border-gray-700">
      <div className="text-center">
        <H2 className="mb-2">
          <Link
            className="hover:text-gray-700 dark:hover:text-gray-400 transition-colors hover:no-underline"
            href={`/blog/${post.slug}`}
            size="inherit"
          >
            {post.title}
          </Link>
        </H2>
        <Text className="mb-6" size={14}>
          {formatDate(post.date)}
        </Text>
        <Text className="mb-8" size={18}>
          {post.excerpt}
        </Text>
        <NextLink href={`/blog/${post.slug}`}>
          <PillButton>Read more</PillButton>
        </NextLink>
      </div>
    </article>
  );
}
