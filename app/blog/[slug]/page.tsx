import { Main } from "@/app/components/layout/main";
import { BlogPostHero } from "./_components/blog-post-hero";

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: BlogPostProps) {
  await params;

  return (
    <Main>
      <BlogPostHero />
    </Main>
  );
}
