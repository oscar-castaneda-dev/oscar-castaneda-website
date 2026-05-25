import { buildRows } from "./build-rows";
import { DuoRow } from "./duo-row";
import { FeaturedRow } from "./featured-row";
import { PROJECTS } from "@/data/projects";
import { TrioRow } from "./trio-row";
import { WideRow } from "./wide-row";
import type { ProjectRow } from "./types";

interface RowRenderer {
  featured: (
    row: ProjectRow,
    idx: number,
    startIndex: number,
  ) => React.ReactElement;
  wide: (
    row: ProjectRow,
    idx: number,
    startIndex: number,
  ) => React.ReactElement;
  duo: (row: ProjectRow, idx: number, startIndex: number) => React.ReactElement;
  trio: (
    row: ProjectRow,
    idx: number,
    startIndex: number,
  ) => React.ReactElement;
}

const ROW_RENDERERS: RowRenderer = {
  featured: (row, idx, startIndex) => (
    <FeaturedRow key={idx} items={row.items} startIndex={startIndex} />
  ),
  wide: (row, idx, startIndex) => (
    <WideRow key={idx} item={row.items[0]} startIndex={startIndex} />
  ),
  duo: (row, idx, startIndex) => (
    <DuoRow key={idx} items={row.items} startIndex={startIndex} />
  ),
  trio: (row, idx, startIndex) => (
    <TrioRow key={idx} items={row.items} startIndex={startIndex} />
  ),
};

export function WorkList() {
  const rows = buildRows(PROJECTS);

  const startIndices = rows.reduce<number[]>((acc, _, idx) => {
    const next = idx === 0 ? 1 : acc[idx - 1] + rows[idx - 1].items.length;
    return [...acc, next];
  }, []);

  return (
    <section className="py-16">
      <div className="container">
        <p className="subtitle text-xl text-caption mb-8">// work</p>
        <div className="flex flex-col gap-3">
          {rows.map((row, idx) =>
            ROW_RENDERERS[row.type](row, idx, startIndices[idx]),
          )}
        </div>
      </div>
    </section>
  );
}
