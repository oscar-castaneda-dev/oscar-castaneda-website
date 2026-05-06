import type { Project } from "@/data/projects";
import type { ProjectRow } from "./types";

type BlockPattern = (projects: Project[], i: number) => ProjectRow[];

const BLOCK_PATTERNS: BlockPattern[] = [
  // P0:
  // ┌──────────┬─────┐
  // │          │  1  │
  // │    0     ├─────┤
  // │          │  2  │
  // ├──────────┴─────┤
  // │       3        │
  // └────────────────┘
  (projects, index) => [
    {
      type: "featured",
      items: projects.slice(index, index + 3),
      startIndex: index,
    },
    { type: "wide", items: [projects[index + 3]], startIndex: index + 3 },
  ],
  // P1:
  // ┌───────┬───────┐
  // │   0   │   1   │
  // ├───────┼───────┤
  // │   2   │   3   │
  // └───────┴───────┘
  (projects, index) => [
    { type: "duo", items: projects.slice(index, index + 2), startIndex: index },
    {
      type: "duo",
      items: projects.slice(index + 2, index + 4),
      startIndex: index + 2,
    },
  ],
  // P2:
  // ┌────────────────┐
  // │       0        │
  // ├─────┬─────┬────┤
  // │  1  │  2  │  3 │
  // └─────┴─────┴────┘
  (projects, index) => [
    { type: "wide", items: [projects[index]], startIndex: index },
    {
      type: "trio",
      items: projects.slice(index + 1, index + 4),
      startIndex: index + 1,
    },
  ],
  // P3:
  // ┌─────┬─────┬────┐
  // │  0  │  1  │  2 │
  // ├─────┴─────┴────┤
  // │       3        │
  // └────────────────┘
  (projects, index) => [
    {
      type: "trio",
      items: projects.slice(index, index + 3),
      startIndex: index,
    },
    { type: "wide", items: [projects[index + 3]], startIndex: index + 3 },
  ],
];

export function buildRows(projects: Project[]): ProjectRow[] {
  const rows: ProjectRow[] = [];
  let i = 0;
  let blockIndex = 0;

  while (i < projects.length) {
    const remaining = projects.length - i;

    if (remaining >= 4) {
      const pattern = BLOCK_PATTERNS[blockIndex % BLOCK_PATTERNS.length];
      rows.push(...pattern(projects, i));
      blockIndex++;
      i += 4;
    } else if (remaining === 3) {
      rows.push({
        type: "trio",
        items: projects.slice(i, i + 3),
        startIndex: i,
      });
      i += 3;
    } else if (remaining === 2) {
      rows.push({
        type: "duo",
        items: projects.slice(i, i + 2),
        startIndex: i,
      });
      i += 2;
    } else {
      rows.push({ type: "wide", items: [projects[i]], startIndex: i });
      i += 1;
    }
  }

  return rows;
}
