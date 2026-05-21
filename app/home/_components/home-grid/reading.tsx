import { Card } from "./card";

export function Reading() {
  return (
    <Card area="reading">
      <p className="subtitle text-xl text-caption">currently reading</p>
      <div>
        <div className="border-b border-border py-6 mb-1">
          <p className="text-sm mb-2 uppercase">data science</p>
          <h3 className="heading-36 uppercase line-clamp-2" title="Python for data analysis">Python for data analysis</h3>
        </div>
        <p className="text-sm">Wes McKinney</p>
      </div>
    </Card>
  );
}
