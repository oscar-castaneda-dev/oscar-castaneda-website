export interface Project {
  category: string;
  img: string;
  slug: string;
  title: string;
  year: string;
}

export const PROJECTS: Project[] = [
  {
    category: "01 -web",
    img: "/images/placeholder.svg",
    slug: "datex",
    title: "datex",
    year: "2026",
  },
  {
    category: "02 - web",
    img: "/images/placeholder.svg",
    slug: "pulso",
    title: "pulso",
    year: "2026",
  },
  {
    category: "03 - dashboard",
    img: "/images/placeholder.svg",
    slug: "nori",
    title: "nori",
    year: "2026",
  },
  {
    category: "04 - mobile app",
    img: "/images/placeholder.svg",
    slug: "signa",
    title: "signa",
    year: "2026",
  },
];
