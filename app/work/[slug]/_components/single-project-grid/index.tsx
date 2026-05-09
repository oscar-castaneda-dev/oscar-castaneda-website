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

  return (
    <>
      <section className="pb-24">
        <div className="container">
          <Subtitle className="mb-3">// the work</Subtitle>
          <div className="single-project-grid">
            {/* IMG1 */}
            <ImageCard
              alt={gallery[0].alt}
              area="img1"
              className="min-h-72"
              index={0}
              priority
              src={gallery[0].src}
            />
            {/* IMG2 */}
            <ImageCard
              alt={gallery[1].alt}
              area="img2"
              className="aspect-square"
              index={1}
              src={gallery[1].src}
            />
            {/* INDUSTRY */}
            <Industry area="industry" value={industry} />
            {/* KEY FEATURES */}
            <Features area="features" features={features} />
            {/* IMG3 */}
            <ImageCard
              alt={gallery[2].alt}
              area="img3"
              className="aspect-square"
              index={2}
              src={gallery[2].src}
            />
            {/* STATS */}
            {stats.map((stat, index) => (
              <Stat
                key={stat.title}
                area={`stat${index + 1}`}
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
