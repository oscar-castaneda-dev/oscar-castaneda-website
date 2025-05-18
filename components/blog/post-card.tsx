import Image from "next/image";
import Link from "next/link";

import { Badge } from "../ui/badge";
import { Post } from "@/types/posts";
import { getPexelsPhoto } from "@/lib/pexels";

export async function PostCard({ post }: { post: Post }) {
  const photo = await getPexelsPhoto(post.imageId);

  return (
    <div className="relative overflow-hidden space-y-3 group">
      <div className="w-full overflow-hidden aspect-[3/4] rounded-lg">
        <Link href={`/blog/${post.slug}`}>
          <Image
            src={photo.src.large || "/placeholder.svg"}
            alt={photo.alt}
            width={300}
            height={400}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            quality={85}
            placeholder="blur"
            blurDataURL={photo.src.tiny}
            loading="lazy"
          />
        </Link>
      </div>
      <div>
        <div className="flex items-center space-x-2">
          <Badge variant="secondary">{post.category}</Badge>
        </div>
      </div>
      <Link href="/blog/example">
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
