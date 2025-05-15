import Image from "next/image";
import Link from "next/link";

import { Badge } from "../ui/badge";
import { PostPreview } from "@/data/samplePosts";

export function PostCard({ post }: { post: PostPreview }) {
  return (
    <div className="relative overflow-hidden space-y-3 group">
      <div className="w-full overflow-hidden aspect-[3/4] rounded-lg">
        <Link href="/">
          <Image
            src="/road.webp"
            alt="placeholder"
            width={300}
            height={400}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
      </div>
      <div>
        <div className="flex items-center space-x-2">
          {post.categories.map((category) => (
            <Badge key={category} variant="secondary">
              {category}
            </Badge>
          ))}
        </div>
      </div>
      <Link href="/">
        <h3
          className="font-bold text-3xl leading-tight line-clamp-2 group-hover:underline mb-3"
          title={post.title}
        >
          {post.title}
        </h3>
      </Link>
      <p className="line-clamp-2">{post.excerpt}</p>
    </div>
  );
}
