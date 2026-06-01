import type { Metadata } from "next";
import { Main } from "@/app/components/layout/main";

export const metadata: Metadata = {
  title: {
    absolute: "Oscar Castaneda",
  },
  description:
    "AI Engineer specializing in ML, NLP, and inference-powered digital products. Shipping web and mobile applications with AI at the core.",
  openGraph: {
    title: "Oscar Castaneda",
    description:
      "AI Engineer specializing in ML, NLP, and inference-powered digital products. Shipping web and mobile applications with AI at the core.",
    url: "/",
  },
  twitter: {
    title: "Oscar Castaneda",
    description:
      "AI Engineer specializing in ML, NLP, and inference-powered digital products. Shipping web and mobile applications with AI at the core.",
  },
};
import { HomeGrid } from "@/app/home/_components/home-grid";
import { HomeHero } from "./home/_components/home-hero";

export default function Home() {
  return (
    <Main>
      <HomeHero />
      <HomeGrid />
    </Main>
  );
}
