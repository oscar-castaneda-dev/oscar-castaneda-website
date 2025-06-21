import { PostCard } from "@/components/blog/post-card";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { getPosts } from "@/lib/posts-service";

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
