import Image from "next/image";

interface BlogFeaturedCardProps {
  date: string;
  excerpt: string;
  href: string;
  image: string;
  imageAlt: string;
  title: string;
}

export function BlogFeaturedCard({
  date,
  excerpt,
  href,
  image,
  imageAlt,
  title,
}: BlogFeaturedCardProps) {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <a
        href={href}
        className="block relative w-full aspect-square overflow-hidden group"
      >
        <Image
          src={image}
          alt={imageAlt}
          loading="eager"
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </a>
      <div className="p-5 flex flex-col gap-3">
        <p className="subtitle text-body">{date}</p>
        <a href={href}>
          <p className="text-2xl">{title}</p>
        </a>
        <p className="text-caption">{excerpt}</p>
      </div>
    </div>
  );
}
