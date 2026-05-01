import { Stat } from "@/app/components/ui/stats-bar";
import { YEARS_OF_EXPERIENCE } from "@/app/constants";

export const ABOUT_STATS: Stat[] = [
  {
    label: "base in",
    value: "mexico",
    fontClasses: "text-white",
  },
  {
    label: "experience",
    value: `${YEARS_OF_EXPERIENCE}+ years`,
    fontClasses: "text-white",
  },
  {
    label: "role",
    value: "tech lead",
    fontClasses: "text-white",
  },
  {
    label: "now",
    value: "building a swift app",
    fontClasses: "text-success",
  },
];
