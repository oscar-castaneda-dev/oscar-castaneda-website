import Image from "next/image";
import { Badge } from "../ui/badge";

export function PostHeader() {
  return (
    <div>
      <div className="max-w-3xl mx-auto text-center my-16 space-y-6">
        <Badge>Coding Journey</Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
          What I Learned Building a CI/CD Pipeline from Scratch
        </h1>
        <p>
          A hands-on recap of setting up a CI/CD pipeline using GitHub Actions
          and Docker, including lessons learned along the way.
        </p>
      </div>
      <div className="relative w-full rounded-lg overflow-hidden max-w-5xl mx-auto aspect-[16/9] md:aspect-[21/9] lg:h-[600px] lg:aspect-auto">
        <Image
          src="/placeholder.webp"
          alt="placeholder image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1000px"
          className="object-cover object-center"
          priority
        />
      </div>
    </div>
  );
}
