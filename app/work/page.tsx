import type { Metadata } from "next";
import { Main } from "@/app/components/layout/main";

export const metadata: Metadata = {
  title: "Work",
  description:
    "A selection of products and interfaces I've designed and built — from AI-powered web apps to mobile applications.",
  openGraph: {
    title: "Work — Oscar Castaneda",
    description:
      "A selection of products and interfaces I've designed and built — from AI-powered web apps to mobile applications.",
    url: "/work",
  },
  twitter: {
    title: "Work — Oscar Castaneda",
    description:
      "A selection of products and interfaces I've designed and built — from AI-powered web apps to mobile applications.",
  },
};
import { WorkHero } from "./_components/work-hero";
import { WorkList } from "./_components/work-list";

export default function WorkPage() {
  return (
    <Main>
      <WorkHero />
      <WorkList />
    </Main>
  );
}
