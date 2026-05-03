import { PROJECTS } from "./projects";

const totalNumberOfProjects = String(PROJECTS.length).padStart(2, "0");

export const WORK_META = [
  { label: "total projects", value: totalNumberOfProjects },
  { label: "areas", value: "Web, Mobile, AI" },
  { label: "latest", value: PROJECTS[0].year },
];
