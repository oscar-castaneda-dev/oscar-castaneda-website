import type { Post } from "@/types/posts";
import Link from "next/link";

interface PostCard {
  post: Post;
}

export function PostCard({ post }: PostCard) {
  return (
    <article className="mb-6">
      <h2>
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h2>
      <small>{post.date}</small>
      <p>{post.excerpt}</p>
    </article>
  );
}
