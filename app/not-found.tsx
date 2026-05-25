import Link from "next/link";

import { DotGrid } from "@/app/components/ui/dot-grid";
import { Main } from "@/app/components/layout/main";

export default function NotFoundPage() {
  return (
    <Main className="relative justify-center">
      <DotGrid />
      <div className="container flex flex-col">
        <p className="subtitle text-xl text-caption mb-6">// error</p>
        <h1 className="heading-64 mb-6">404</h1>
        <p className="text-lg mb-10">
          This page doesn&apos;t exist or was moved.
        </p>
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
