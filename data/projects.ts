export interface Project {
  category: string;
  description1: string;
  description2: string;
  duration: string;
  githubUrl: string | null;
  img: string;
  projectUrl: string;
  slug: string;
  stack: string;
  status: "shipped" | "in progress";
  summary: string;
  title: string;
  year: string;
}

export const PROJECTS: Project[] = [
  {
    category: "web",
    description1: "",
    description2: "",
    duration: "4 months",
    githubUrl: "https://github.com/oscar-castaneda-dev",
    img: "/images/placeholder.svg",
    projectUrl: "https://www.google.com/",
    slug: "datex",
    stack: "nextjs, typescript",
    status: "in progress",
    summary: "data analysis platform",
    title: "datex",
    year: "2026",
  },
  {
    category: "web",
    description1: "",
    description2: "",
    duration: "4 months",
    githubUrl: "https://github.com/oscar-castaneda-dev",
    img: "/images/placeholder.svg",
    projectUrl: "https://www.google.com/",
    slug: "pulso",
    stack: "nextjs, typescript",
    status: "in progress",
    summary: "data analysis platform",
    title: "pulso",
    year: "2026",
  },
  {
    category: "web, app",
    description1: "",
    description2: "",
    duration: "4 months",
    githubUrl: "https://github.com/oscar-castaneda-dev",
    img: "/images/placeholder.svg",
    projectUrl: "https://www.google.com/",
    slug: "nori",
    stack: "nextjs, typescript",
    status: "in progress",
    summary: "data analysis platform",
    title: "nori",
    year: "2026",
  },
  {
    category: "app",
    description1: "",
    description2: "",
    duration: "4 months",
    githubUrl: "https://github.com/oscar-castaneda-dev",
    img: "/images/placeholder.svg",
    projectUrl: "https://www.google.com/",
    slug: "signa",
    stack: "nextjs, typescript",
    status: "in progress",
    summary: "data analysis platform",
    title: "signa",
    year: "2026",
  },
];
