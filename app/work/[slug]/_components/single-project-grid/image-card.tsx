import Image from "next/image";

import { cn } from "@/lib/cn";

interface ImageCardProps {
  alt: string;
  className?: string;
  index: number;
  priority?: boolean;
  src: string;
}

export function ImageCard({
  alt,
  className,
  index,
  priority = false,
  src,
}: ImageCardProps) {
  return (
    <button
      className={cn(
        "relative overflow-hidden rounded-lg border border-border bg-card block w-full cursor-zoom-in",
        className,
      )}
      popoverTarget={`lightbox-${index}`}
    >
      <Image
        alt={alt}
        className="object-cover opacity-90 transition-opacity duration-300 hover:opacity-100"
        fill
        loading={priority ? "eager" : "lazy"}
        priority={priority}
        src={src}
      />
    </button>
  );
}
