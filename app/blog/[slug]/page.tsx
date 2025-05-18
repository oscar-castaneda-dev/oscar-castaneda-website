import { notFound } from "next/navigation";

import { PostHeader } from "@/components/blog/post-header";
import { getPost } from "@/lib/postLoader";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) return notFound();

  return (
    <article className="space-y-12">
      <PostHeader post={post} />
      <div className="max-w-4xl mx-auto">
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}
