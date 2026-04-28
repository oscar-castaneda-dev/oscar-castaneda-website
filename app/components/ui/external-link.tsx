import { cn } from "@/lib/cn";

interface ExternalLinkProps {
  children: React.ReactNode;
  className?: string;
  href: string;
  icon?: React.ReactNode;
}

export function ExternalLink({ children, className, href, icon }: ExternalLinkProps) {
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
      {icon}
    </a>
  );
}
