import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface SocialLinkProps {
  href: string;
  name: string;
}

export function SocialLink({ href, name }: SocialLinkProps) {
  return (
    <Link
      className="group flex items-center hover:text-blue-600 transition-colors"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="hover:underline mr-0.5">{name}</span>
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:scale-125 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}
