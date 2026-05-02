import { StatusDot } from "@/app/components/ui/status-dot";
import { Subtitle } from "@/app/components/typography/subtitle";
import { Text } from "@/app/components/typography/text";
import { WORK_EXPERIENCE } from "@/data/work-experience";

export function WorkExperience() {
  return (
    <section className="py-16 border-b border-border">
      <div className="container">
        <Subtitle className="mb-8">// experience</Subtitle>
        <div>
          {WORK_EXPERIENCE.map((company, index) => {
            const currentPosition = company.to === null;
            const num = String(index + 1).padStart(2, "0");

            return (
              <div
                key={company.name}
                className="flex items-start justify-between gap-6 py-6 border-b border-border last:border-b-0"
              >
                {/* COMPANY */}
                <div className="flex items-start gap-6">
                  <span className="font-nothing-subtitle text-disabled mt-1 shrink-0">
                    {num}
                  </span>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      {currentPosition && <StatusDot />}
                      <Text size={18} className="text-title capitalize">
                        {company.name}
                      </Text>
                    </div>
                    <Text size={14} color="caption" className="capitalize">
                      {company.role}
                    </Text>
                  </div>
                </div>
                {/* DURATION */}
                <span className="font-nothing-subtitle text-caption shrink-0 mt-1">
                  {company.from} - {currentPosition ? "now" : company.to}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
