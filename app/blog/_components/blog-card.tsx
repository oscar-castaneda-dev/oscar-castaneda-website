import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  date: string;
  href: string;
  image: string;
  imageAlt: string;
  title: string;
}

export function BlogCard({
  date,
  href,
  image,
  imageAlt,
  title,
}: BlogCardProps) {
  return (
    <Link
      href={href}
      className="group relative block rounded-xl overflow-hidden aspect-4/3"
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        loading="eager"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/80" />
      <div className="absolute top-4 left-4">
        <p className="subtitle text-xs">{date}</p>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-20 flex flex-col justify-start px-4 pt-2 pb-3">
        <p className="text-lg line-clamp-2 leading-snug">{title}</p>
      </div>
    </Link>
  );
}
