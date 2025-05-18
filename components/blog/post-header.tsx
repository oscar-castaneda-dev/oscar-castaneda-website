import Image from "next/image";

import { Badge } from "../ui/badge";
import { Post } from "@/types/posts";
import { getPexelsPhoto } from "@/lib/pexels";
import Link from "next/link";
import { formatDate } from "@/utils/formatDate";
import { Separator } from "../ui/separator";
import { BackLink } from "../common/back-link";

export async function PostHeader({ post }: { post: Post }) {
  const photo = await getPexelsPhoto(post.imageId);

  return (
    <div>
      <div className="mt-6">
        <BackLink href="/blog" />
      </div>
      <div className="max-w-3xl mx-auto text-center mt-16 mb-12 space-y-4">
        <Badge>{post.category}</Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
          {post.title}
        </h1>
        <p>{post.excerpt}</p>
        <Separator className="max-w-2xs mx-auto" />
        <time dateTime={post.date}>{formatDate(post.date)}</time>
      </div>
      <div className="text-center">
        <div className="relative w-full rounded-lg overflow-hidden max-w-5xl mx-auto aspect-[16/9] md:aspect-[21/9] lg:h-[600px] lg:aspect-auto mb-6">
          <Image
            src={photo.src.large || "/placeholder.svg"}
            alt={photo.alt}
            fill
            quality={85}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1000px"
            className="object-cover object-center"
            blurDataURL={photo.src.tiny}
            loading="lazy"
          />
        </div>
        <p className="text-xs italic">
          Photo by{" "}
          <Link href={photo.url} target="_blank" className="underline">
            {photo.photographer}
          </Link>{" "}
          from Pexels.
        </p>
      </div>
    </div>
  );
}
