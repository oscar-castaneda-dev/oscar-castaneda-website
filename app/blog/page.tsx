import type { Metadata } from "next";
import { Main } from "@/app/components/layout/main";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on AI engineering, building products, and working at the intersection of ML and software.",
  openGraph: {
    title: "Blog — Oscar Castaneda",
    description:
      "Thoughts on AI engineering, building products, and working at the intersection of ML and software.",
    url: "/blog",
  },
  twitter: {
    title: "Blog — Oscar Castaneda",
    description:
      "Thoughts on AI engineering, building products, and working at the intersection of ML and software.",
  },
};
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
