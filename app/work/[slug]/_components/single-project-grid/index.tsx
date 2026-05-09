import { Subtitle } from "@/app/components/typography/subtitle";
import { Project } from "@/data/projects";
import { ImageModal } from "./image-modal";
import { ImageCard } from "./image-card";
import { Industry } from "./industry";

interface SingleProjectGridProps {
  project: Project;
}

export function SingleProjectGrid({ project }: SingleProjectGridProps) {
  const { gallery, industry } = project;

  // ┌──────────────┬──────────────┐
  // │              │    IMG2      │
  // │    IMG1      ├──────────────┤
  // │              │   INDUSTRY   │
  // ├──────────────┼──────────────┤
  // │              │              │
  // │ KEY FEATURES │    IMG3      │
  // │              │              │
  // ├──────┬───────┼──────────────┤
  // │ TIME │ COST  │    USERS     │
  // └──────┴───────┴──────────────┘

  return (
    <>
      <section className="pb-24">
        <div className="container">
          <Subtitle className="mb-3">// the work</Subtitle>
          <div className="flex flex-col gap-3 md:grid md:grid-cols-6">
            {/* IMG1 */}
            <ImageCard
              alt={gallery[0].alt}
              className="min-h-72 col-start-1 col-end-4 row-start-1 row-end-3"
              index={1}
              priority
              src={gallery[0].src}
            />
            {/* IMG2 */}
            <ImageCard
              alt={gallery[1].alt}
              className="aspect-square col-start-4 col-end-7 row-start-1"
              index={2}
              priority
              src={gallery[1].src}
            />
            {/* INDUSTRY */}
            <Industry
              className="col-start-4 col-end-7 row-start-2"
              value={industry}
            />
            {/* KEY FEATURES */}
          </div>
        </div>
      </section>
      {/* MODAL */}
      {gallery.map((image, index) => (
        <ImageModal key={index} alt={image.alt} index={index} src={image.src} />
      ))}
    </>
  );
}
