import { Main } from "@/app/components/layout/main";
import { BlogHero } from "./_components/blog-hero";
import { BlogGrid } from "./_components/blog-grid";

export default function BlogPage() {
  return (
    <Main>
      <BlogHero />
      <BlogGrid />
    </Main>
  );
}
