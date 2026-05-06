import type { Project } from "@/data/projects";

export type WorkCardVariant = "featured" | "small" | "wide";

export interface ProjectRow {
  items: Project[];
  startIndex: number;
  type: "featured" | "wide" | "duo" | "trio";
}
