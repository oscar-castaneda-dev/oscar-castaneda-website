import { Features } from "./features";
import { ImageCard } from "./image-card";
import { ImageModal } from "./image-modal";
import { Industry } from "./industry";
import { Project } from "@/data/projects";
import { Subtitle } from "@/app/components/typography/subtitle";
import { Stat } from "./stat";

interface SingleProjectGridProps {
  project: Project;
}

export function SingleProjectGrid({ project }: SingleProjectGridProps) {
  const { features, gallery, industry, stats } = project;

  const statGridClasses = [
    "col-start-1 col-end-3 row-start-4",
    "col-start-3 col-end-5 row-start-4",
    "col-start-5 col-end-7 row-start-4",
  ];

  // ┌──────────────┬──────────────┐
  // │              │    IMG2      │
  // │    IMG1      ├──────────────┤
  // │              │   INDUSTRY   │
  // ├──────────────┼──────────────┤
  // │              │              │
  // │ KEY FEATURES │    IMG3      │
  // │              │              │
  // ├──────┬───────┼──────────────┤
  // │ TIME │ COST  │    NOTE      │
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
              index={0}
              priority
              src={gallery[0].src}
            />
            {/* IMG2 */}
            <ImageCard
              alt={gallery[1].alt}
              className="aspect-square col-start-4 col-end-7 row-start-1"
              index={1}
              src={gallery[1].src}
            />
            {/* INDUSTRY */}
            <Industry
              className="col-start-4 col-end-7 row-start-2"
              value={industry}
            />
            {/* KEY FEATURES */}
            <Features
              className="col-start-1 col-end-4 row-start-3"
              features={features}
            />
            {/* IMG3 */}
            <ImageCard
              alt={gallery[2].alt}
              className="aspect-square col-start-4 col-end-7 row-start-3"
              index={2}
              src={gallery[2].src}
            />
            {/* STATS */}
            {stats.map((stat, index) => (
              <Stat
                key={stat.title}
                className={statGridClasses[index]}
                index={index}
                stat={stat}
              />
            ))}
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
