import { notFound } from "next/navigation";

import { AuthorCard } from "@/components/blog/author-card";
import { PostHeader } from "@/components/blog/post-header";
import { getPostCached } from "@/lib/postUtils";
import { getPexelsPhotoCached } from "@/lib/pexelUtils";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;

  const post = await getPostCached(slug);

  if (!post) return notFound();

  const photo = await getPexelsPhotoCached(post.imageId);

  return (
    <article className="space-y-12">
      <PostHeader post={post} photo={photo} />
      <div className="max-w-4xl mx-auto">
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <AuthorCard />
      </div>
    </article>
  );
}

export { generateMetadata } from "./metadata";
export { generateStaticParams } from "./staticParams";
