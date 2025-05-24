import Image from "next/image";

export function FeaturedImage() {
  return (
    <div className="mb-20">
      <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl bg-zinc-100">
        <Image
          src="/placeholder.svg"
          alt="placeholder image"
          width={1920}
          height={1080}
          className="w-ful h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
}
