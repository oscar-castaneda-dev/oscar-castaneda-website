import Link from "next/link";

import { DotGrid } from "@/app/components/ui/dot-grid";
import { Heading } from "@/app/components/typography/heading";
import { Main } from "@/app/components/layout/main";
import { Subtitle } from "@/app/components/typography/subtitle";
import { Text } from "@/app/components/typography/text";

export default function NotFoundPage() {
  return (
    <Main className="relative justify-center">
      <DotGrid />
      <div className="container flex flex-col">
        <Subtitle className="mb-6">// error</Subtitle>
        <Heading className="mb-6">404</Heading>
        <Text size={18} className="mb-10">
          This page doesn&apos;t exist or was moved.
        </Text>
        <Link
          href="/"
          className="font-nothing-subtitle text-caption hover:text-body transition-colors duration-200"
        >
          ← back to home
        </Link>
      </div>
    </Main>
  );
}
