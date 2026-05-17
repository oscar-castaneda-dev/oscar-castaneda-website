import { Subtitle } from "@/app/components/typography/subtitle";
import { BlogCard } from "./blog-card";

const POSTS = [
  {
    slug: "ai-changing-web",
    date: "May 15, 2026",
    excerpt:
      "The tools are moving fast. Here's what's actually worth paying attention to.",
    image: "/images/montain.webp",
    imageAlt: "AI and the web",
    title: "How AI Is Changing the Way We Build for the Web",
  },
  {
    slug: "shipping-fast",
    date: "Apr 28, 2026",
    excerpt:
      "Speed without chaos. The systems I've built to ship every week without burning out the team.",
    image: "/images/montain.webp",
    imageAlt: "Shipping fast",
    title: "The Art of Shipping Fast Without Breaking Things",
  },
  {
    slug: "engineering-leadership",
    date: "Mar 10, 2026",
    excerpt:
      "What no one tells you when you go from writing code to managing the people who do.",
    image: "/images/montain.webp",
    imageAlt: "Engineering leadership",
    title: "What I Learned in My First Year as an Engineering Lead",
  },
  {
    slug: "design-systems",
    date: "Feb 20, 2026",
    excerpt:
      "A design system is only as good as the discipline around it. Here's how we enforce ours.",
    image: "/images/montain.webp",
    imageAlt: "Design systems",
    title: "Building a Design System That Actually Gets Used",
  },
  {
    slug: "typescript-tips",
    date: "Jan 14, 2026",
    excerpt:
      "Five TypeScript patterns I reach for constantly that make codebases significantly easier to maintain.",
    image: "/images/montain.webp",
    imageAlt: "TypeScript tips",
    title: "TypeScript Patterns That Earn Their Keep",
  },
  {
    slug: "nextjs-app-router",
    date: "Dec 3, 2025",
    excerpt:
      "The App Router changed how I think about data fetching. Here's my current mental model.",
    image: "/images/montain.webp",
    imageAlt: "Next.js App Router",
    title: "Six Months With the Next.js App Router",
  },
];

export function BlogGrid() {
  return (
    <section className="container pb-16">
      <Subtitle className="mb-8">// all posts</Subtitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {POSTS.map((post) => (
          <BlogCard
            key={post.slug}
            date={post.date}
            href={`/blog/${post.slug}`}
            image={post.image}
            imageAlt={post.imageAlt}
            title={post.title}
          />
        ))}
      </div>
    </section>
  );
}
