import { Card } from "./card";
import { Subtitle } from "@/app/components/typography/subtitle";
import { TECH_STACK } from "@/data/tech-stack";
import { Badge } from "../badge";

export function Stack() {
  return (
    <Card area="stack">
      <Subtitle>stack</Subtitle>
      <div className="flex flex-wrap gap-2">
        {TECH_STACK.map((techStack) => (
          <Badge key={techStack}>{techStack}</Badge>
        ))}
      </div>
    </Card>
  );
}
