import { ModeToggle } from "@/components/ui/mode-toggle";
import { getPosts } from "@/lib/postLoader";
import Link from "next/link";

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="p-4">
      <div className="flex items-center gap-x-4">
        <h1>Hello World</h1>
        <ModeToggle />
      </div>
      <div>
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
