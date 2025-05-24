import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Button } from "../ui/button";
import { GitHubIcon } from "../icons/github-icon";

export function ProjectHeader() {
  return (
    <div className="flex flex-col items-center text-center  py-12">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w4xl">
        My Budget Plan
      </h1>
      <p className="text-xl text-zinc-500 mb-8 max-w-2xl">
        My Budget Plan is a personal finance app that helps users track
        expenses, set budgets, and gain clarity over their spending.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/">
          <Button
            size="lg"
            className="gap-2 px-8 py-6 rounded-xl cursor-pointer"
          >
            View Live Platform
            <ArrowUpRight className="size-4" />
          </Button>
        </Link>
        <Link href="/">
          <Button
            variant="outline"
            size="lg"
            className="gap-2 px-8 py-6 rounded-xl cursor-pointer"
          >
            <GitHubIcon className="size-4" />
            View Live Platform
          </Button>
        </Link>
      </div>
    </div>
  );
}
