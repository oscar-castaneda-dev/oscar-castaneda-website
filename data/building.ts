export type ProjectStatus = "active" | "completed" | "pending";

export interface BuildingProject {
  done: string[];
  inProgress: string[];
  name: string;
  slug: string;
  status: ProjectStatus;
  type: string;
  upcoming: string[];
  year: number;
}

export const BUILDING_PROJECTS: BuildingProject[] = [
  {
    done: [
      "Market research",
      "Tech stack decision",
      "Repo setup",
      "DB schema v1",
    ],
    inProgress: ["Auth system", "Ingestion API", "Dashboard layout"],
    name: "Datex",
    slug: "datex",
    status: "active",
    type: "Side Project",
    upcoming: ["Payment integration", "Public beta", "Docs site"],
    year: 2026,
  },
  {
    done: [
      "Market research",
      "Design system",
      "Auth + onboarding",
      "Core dashboard",
      "Mobile app",
      "Public launch",
    ],
    inProgress: [],
    name: "Pulso",
    slug: "pulso",
    status: "completed",
    type: "Side Project",
    upcoming: [],
    year: 2025,
  },
  {
    done: [],
    inProgress: [],
    name: "Nori",
    slug: "nori",
    status: "pending",
    type: "Side Project",
    upcoming: [
      "Market research",
      "Tech stack decision",
      "MVP scope",
      "Repo setup",
    ],
    year: 2026,
  },
];
