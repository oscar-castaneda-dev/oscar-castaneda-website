import { YEARS_OF_EXPERIENCE } from "@/app/constants";

export function Experience() {
  return (
    <div
      className="bg-card border border-border rounded-lg p-5 flex flex-col justify-between min-h-40"
      style={{ gridArea: "experience" }}
    >
      <p className="subtitle text-xl text-body">experience</p>
      <div>
        <h3 className="heading-48">{YEARS_OF_EXPERIENCE}</h3>
        <p className="text-xs">years</p>
      </div>
    </div>
  );
}
