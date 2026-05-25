import { type Project } from "@/data/projects";

interface DescriptionProps {
  project: Project;
}

export function Description({ project }: DescriptionProps) {
  return (
    <section className="py-16">
      <div className="container">
        <div className="max-w-xl mx-auto flex flex-col gap-4">
          <p className="subtitle text-xl text-caption mb-2">// about</p>
          {project.description.map((paragraph, index) => (
            <p key={index} className="text-xl">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
