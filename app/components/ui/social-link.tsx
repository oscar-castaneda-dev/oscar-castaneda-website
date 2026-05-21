import { cn } from "@/lib/cn";
import { ArrowRightUpIcon } from "@/app/components/icons/arrow-right-up";

interface ExternalLinkProps {
  children: React.ReactNode;
  className?: string;
  href: string;
}

export function SocialLink({ children, className, href }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center gap-1 uppercase cursor-pointer",
        className,
      )}
    >
      <span className="inline-block group-hover:underline">{children}</span>
      <ArrowRightUpIcon className="transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}
