import { PostCard } from "@/components/blog/post-card";
import { Hero } from "@/components/common/hero";
import { getPosts } from "@/lib/posts-service";

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <div>
      <Hero
        title="Daily dev log"
        subtitle="A developer's journal of progress sharing what I learn as I build."
      />
      <div className="space-y-12">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
