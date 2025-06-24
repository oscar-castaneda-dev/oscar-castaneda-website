import { ChevronLeft } from "lucide-react";
import NextLink from "next/link";

interface BackLinkProps {
  href: string;
}

export function BackLink({ href }: BackLinkProps) {
  return (
    <NextLink className="flex items-center gap-x-1 hover:underline" href={href}>
      <ChevronLeft className="size-4" /> Back
    </NextLink>
  );
}
