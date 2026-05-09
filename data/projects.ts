export interface Project {
  appStoreUrl: string | null;
  category: string;
  cost: string;
  description: string[];
  duration: string;
  features: string[];
  gallery: {
    alt: string;
    src: string;
  }[];
  githubUrl: string | null;
  img: string;
  industry: string;
  note: string;
  projectUrl: string | null;
  slug: string;
  stack: string;
  status: "shipped" | "in progress";
  summary: string;
  title: string;
  year: string;
}

export const PROJECTS: Project[] = [
  {
    appStoreUrl: "https://www.google.com/",
    category: "web",
    cost: "$20usd",
    description: [
      "A data analysis platform focused on turning complex datasets into clear, actionable insights through a fast and minimal interface. Built for exploration, reporting, and decision making, the experience prioritizes readability, structure, and reducing unnecessary friction when working with large amounts of information.",
      "Every part of the platform was designed around clarity and speed. From dashboard organization to data visualization flows, the goal was to create an experience that feels lightweight, intuitive, and easy to navigate, allowing users to focus on understanding the data instead of learning the interface.",
    ],
    duration: "2 months",
    features: [
      "real-time analytics",
      "csv export",
      "role-based access",
      "custom dashboards",
    ],
    gallery: [
      {
        alt: "Project gallery image 01",
        src: "/images/placeholder.svg",
      },
      {
        alt: "Project gallery image 02",
        src: "/images/placeholder.svg",
      },
      {
        alt: "Project gallery image 03",
        src: "/images/placeholder.svg",
      },
    ],
    githubUrl: "https://github.com/oscar-castaneda-dev",
    img: "/images/placeholder.svg",
    industry: "fintech",
    note: "Originally started as an internal tool.",
    projectUrl: "https://www.google.com/",
    slug: "datex",
    stack: "nextjs, typescript",
    status: "in progress",
    summary: "data analysis platform",
    title: "datex",
    year: "2026",
  },
  {
    appStoreUrl: "https://www.google.com/",
    category: "web",
    cost: "$20usd",
    description: [
      "A data analysis platform built to transform raw information into clear, useful insights.",
      "Designed around simple flows, readable dashboards, and fast exploration without unnecessary complexity.",
    ],
    duration: "2 months",
    features: [
      "real-time analytics",
      "csv export",
      "role-based access",
      "custom dashboards",
    ],
    gallery: [
      {
        alt: "Project gallery image 01",
        src: "/images/placeholder.svg",
      },
      {
        alt: "Project gallery image 02",
        src: "/images/placeholder.svg",
      },
      {
        alt: "Project gallery image 03",
        src: "/images/placeholder.svg",
      },
    ],
    githubUrl: "https://github.com/oscar-castaneda-dev",
    img: "/images/placeholder.svg",
    industry: "fintech",
    note: "Originally started as an internal tool.",
    projectUrl: "https://www.google.com/",
    slug: "pulso",
    stack: "nextjs, typescript",
    status: "in progress",
    summary: "data analysis platform",
    title: "pulso",
    year: "2026",
  },
  {
    appStoreUrl: "https://www.google.com/",
    category: "web, app",
    cost: "$20usd",
    description: [
      "A data analysis platform built to transform raw information into clear, useful insights.",
      "Designed around simple flows, readable dashboards, and fast exploration without unnecessary complexity.",
    ],
    duration: "2 months",
    features: [
      "real-time analytics",
      "csv export",
      "role-based access",
      "custom dashboards",
    ],
    gallery: [
      {
        alt: "Project gallery image 01",
        src: "/images/placeholder.svg",
      },
      {
        alt: "Project gallery image 02",
        src: "/images/placeholder.svg",
      },
      {
        alt: "Project gallery image 03",
        src: "/images/placeholder.svg",
      },
    ],
    githubUrl: "https://github.com/oscar-castaneda-dev",
    img: "/images/placeholder.svg",
    industry: "fintech",
    note: "Originally started as an internal tool.",
    projectUrl: "https://www.google.com/",
    slug: "nori",
    stack: "nextjs, typescript",
    status: "in progress",
    summary: "data analysis platform",
    title: "nori",
    year: "2026",
  },
  {
    appStoreUrl: "https://www.google.com/",
    category: "app",
    cost: "$20usd",
    description: [
      "A data analysis platform built to transform raw information into clear, useful insights.",
      "Designed around simple flows, readable dashboards, and fast exploration without unnecessary complexity.",
    ],
    duration: "2 months",
    features: [
      "real-time analytics",
      "csv export",
      "role-based access",
      "custom dashboards",
    ],
    gallery: [
      {
        alt: "Project gallery image 01",
        src: "/images/placeholder.svg",
      },
      {
        alt: "Project gallery image 02",
        src: "/images/placeholder.svg",
      },
      {
        alt: "Project gallery image 03",
        src: "/images/placeholder.svg",
      },
    ],
    githubUrl: "https://github.com/oscar-castaneda-dev",
    img: "/images/placeholder.svg",
    industry: "fintech",
    note: "Originally started as an internal tool.",
    projectUrl: "https://www.google.com/",
    slug: "signa",
    stack: "nextjs, typescript",
    status: "in progress",
    summary: "data analysis platform",
    title: "signa",
    year: "2026",
  },
];
