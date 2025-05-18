import { PostGrid } from "@/components/blog/post-grid";
import { Hero } from "@/components/common/hero";
import { Separator } from "@/components/ui/separator";
import { getPosts } from "@/lib/postLoader";

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen">
      <Hero
        title="Daily dev log."
        subtitle="A developer&#39;s journal of progress sharing what I learn as I build."
      />
      <Separator className="my-12" />
      <h2 className="text-4xl font-bold mb-6">Recent coding notes</h2>
      <PostGrid posts={posts.slice(0, 4)} />
      <Separator className="my-16" />
      <h2 className="text-4xl font-bold mb-6">Latest from the blog</h2>
      <PostGrid columns={3} posts={posts} />
    </div>
  );
}
