import { Main } from "@/app/components/layout/main";
import { BlogPostHero } from "./_components/blog-post-hero";
import { PostContent } from "./_components/post-content";

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: BlogPostProps) {
  await params;

  return (
    <Main>
      <BlogPostHero />
      <PostContent />
    </Main>
  );
}
