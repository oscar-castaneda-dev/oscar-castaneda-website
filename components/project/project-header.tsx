import { ArrowUpRight } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { GitHubIcon } from "../icons/github-icon";
import Link from "next/link";

export function ProjectHeader() {
  return (
    <header className="mb-16 max-w-4xl space-y-6">
      <Badge
        variant="outline"
        className="px-4 py-1.5 text-sm font-medium rounded-2xl"
      >
        Web Development
      </Badge>
      <h1 className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
        My Budget Plan
      </h1>
      <p className="text-lg md:text-xl max-w-2xl">
        A comprehensive redesign of a legacy banking platform, transforming
        complex financial workflows into intuitive, user-centered experiences
        that increased customer satisfaction by 87%.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link href="/" target="_blank">
          <Button size="lg" className="gap-2 px-6 cursor-pointer">
            View Live Project <ArrowUpRight className="size-4" />
          </Button>
        </Link>
        <Link href="/" target="_blank">
          <Button
            size="lg"
            variant="outline"
            className="gap-2 px-6 cursor-pointer"
          >
            <GitHubIcon /> View Source Code
          </Button>
        </Link>
      </div>
    </header>
  );
}
