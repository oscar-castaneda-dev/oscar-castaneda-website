import { buildRows } from "./build-rows";
import { DuoRow } from "./duo-row";
import { FeaturedRow } from "./featured-row";
import { PROJECTS } from "@/data/projects";
import { Subtitle } from "@/app/components/typography/subtitle";
import { TrioRow } from "./trio-row";
import { WideRow } from "./wide-row";
import type { ProjectRow } from "./types";

interface RowRenderer {
  featured: (row: ProjectRow, idx: number) => React.ReactElement;
  wide: (row: ProjectRow, idx: number) => React.ReactElement;
  duo: (row: ProjectRow, idx: number) => React.ReactElement;
  trio: (row: ProjectRow, idx: number) => React.ReactElement;
}

const ROW_RENDERERS: RowRenderer = {
  featured: (row, idx) => <FeaturedRow key={idx} items={row.items} />,
  wide: (row, idx) => <WideRow key={idx} item={row.items[0]} />,
  duo: (row, idx) => <DuoRow key={idx} items={row.items} />,
  trio: (row, idx) => <TrioRow key={idx} items={row.items} />,
};

export function WorkList() {
  const rows = buildRows(PROJECTS);

  return (
    <section className="py-16">
      <div className="container">
        <Subtitle className="mb-8">// work</Subtitle>
        <div className="flex flex-col gap-3">
          {rows.map((row, idx) => ROW_RENDERERS[row.type](row, idx))}
        </div>
      </div>
    </section>
  );
}
