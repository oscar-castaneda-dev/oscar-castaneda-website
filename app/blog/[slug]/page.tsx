import { AuthorCard } from "@/components/blog/author-card";
import { BackLink } from "@/components/common/back-link";
import { formatDate } from "@/lib/format-date";
import { getPost } from "@/lib/posts-service";
import { H1 } from "@/components/common/heading";
import { notFound } from "next/navigation";
import { Text } from "@/components/common/text";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) return notFound();

  return (
    <div>
      <BackLink href="/" />
      <article className="space-y-8">
        <header className="text-center space-y-6 my-8">
          <H1 className="text-5xl font-bold">{post.title}</H1>
          <Text className="mb-6" size={14}>
            {formatDate(post.date)}
          </Text>
        </header>
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <AuthorCard />
      </article>
    </div>
  );
}
