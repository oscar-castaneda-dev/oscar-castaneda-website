import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function BackLink({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-x-2 font-medium transition-colors hover:text-primary/80"
    >
      <ArrowLeft />
      Back
    </Link>
  );
}
