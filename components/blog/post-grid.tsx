import { PostPreview } from "@/data/samplePosts";
import { PostCard } from "./post-card";

interface PostGridProps {
  columns?: 3 | 4;
  posts: PostPreview[];
}

const columnClasses = {
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
};

export function PostGrid({ columns = 4, posts }: PostGridProps) {
  return (
    <section
      className={`grid gap-x-6 gap-y-16 grid-cols-1 md:grid-cols-2 ${columnClasses[columns]}`}
    >
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
}
