export interface Project {
  category: string;
  img: string;
  slug: string;
  title: string;
  year: string;
}

export const PROJECTS: Project[] = [
  {
    category: "finance",
    img: "/images/placeholder.svg",
    slug: "finexy",
    title: "finexy",
    year: "2026",
  },
  {
    category: "Mobile App",
    img: "/images/placeholder.svg",
    slug: "ronas",
    title: "ronas",
    year: "2026",
  },
  {
    category: "app",
    img: "/images/placeholder.svg",
    slug: "nixtio",
    title: "nixtio",
    year: "2026",
  },
  {
    category: "app",
    img: "/images/placeholder.svg",
    slug: "social-ai",
    title: "SocialAI",
    year: "2026",
  },
];
