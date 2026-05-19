import { Main } from "@/app/components/layout/main";
import { PostHero } from "./_components/post-hero";
import { PostContent } from "./_components/post-content";
import { PostSignature } from "./_components/post-signature";

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: BlogPostProps) {
  await params;

  return (
    <Main>
      <PostHero />
      <PostContent />
      <PostSignature />
    </Main>
  );
}
