export interface PostPreview {
  id: string;
  title: string;
  excerpt: string;
  categories: string[];
}

export const posts: PostPreview[] = [
  {
    id: "1",
    title: "How I Solved a Tricky Bug in Production",
    excerpt:
      "Today I walk through a subtle bug I encountered in production, how I identified the root cause, and the fix that finally worked.",
    categories: ["Debugging"],
  },
  {
    id: "2",
    title: "Optimizing React Components for Performance",
    excerpt:
      "In this post, I share practical tips I used to reduce re-renders and improve load times in a real-world React app.",
    categories: ["React", "Performance"],
  },
  {
    id: "3",
    title: "What I Learned Building a CI/CD Pipeline from Scratch",
    excerpt:
      "A hands-on recap of setting up a CI/CD pipeline using GitHub Actions and Docker, including lessons learned along the way.",
    categories: ["DevOps", "Automation", "Infrastructure"],
  },
  {
    id: "4",
    title: "Why I Switched from REST to GraphQL",
    excerpt:
      "After years working with REST APIs, I finally gave GraphQL a shot. Here's why it changed the way I think about API design.",
    categories: ["API Design", "GraphQL"],
  },
  {
    id: "5",
    title: "Styling Dark Mode with Tailwind CSS",
    excerpt:
      "I recently implemented dark mode using Tailwind and here's how I handled toggles, theming, and system preference detection.",
    categories: ["CSS"],
  },
  {
    id: "6",
    title: "My Favorite VS Code Extensions in 2025",
    excerpt:
      "A quick rundown of the extensions that boost my productivity as a frontend developer.",
    categories: ["Tooling", "Productivity", "Editor Setup"],
  },
  {
    id: "7",
    title: "The Day I Broke Production (And What I Learned)",
    excerpt:
      "A painful but important lesson in responsibility, rollback strategies, and team communication.",
    categories: ["Postmortem"],
  },
  {
    id: "8",
    title: "Getting Started with Zustand for State Management",
    excerpt:
      "Zustand is a minimal alternative to Redux. In this post, I cover how to set it up and when it makes sense to use it.",
    categories: ["State Management", "React"],
  },
  {
    id: "9",
    title: "Improving Web Vitals in a Next.js App",
    excerpt:
      "Core Web Vitals are critical for user experience. Here’s what I did to improve LCP, FID, and CLS in production.",
    categories: ["Next.js", "Performance", "UX"],
  },
];
