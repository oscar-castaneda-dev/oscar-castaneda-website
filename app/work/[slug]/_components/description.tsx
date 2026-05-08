import { Project } from "@/data/projects";
import { Subtitle } from "@/app/components/typography/subtitle";
import { Text } from "@/app/components/typography/text";

interface DescriptionProps {
  project: Project;
}

export function Description({ project }: DescriptionProps) {
  return (
    <section className="py-16">
      <div className="container">
        <div className="max-w-xl mx-auto flex flex-col gap-4">
          <Subtitle className="mb-2">// about</Subtitle>
          {project.description.map((paragraph, index) => (
            <Text key={index} size={20}>
              {paragraph}
            </Text>
          ))}
        </div>
      </div>
    </section>
  );
}
