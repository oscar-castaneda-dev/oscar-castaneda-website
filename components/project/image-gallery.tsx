import Image from "next/image";

import { blurDataURL } from "@/conts/blur-placeholder";

export function ImageGallery() {
  return (
    <section className="border">
      <div className="relative w-full h-[1054px] rounded-lg overflow-hidden bg-gray-100 cursor-pointer">
        <Image
          fill
          alt="placeholder"
          src="/placeholder.svg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          className="object-cover transition-opacity duration-300"
          blurDataURL={blurDataURL}
        />
      </div>
    </section>
  );
}
