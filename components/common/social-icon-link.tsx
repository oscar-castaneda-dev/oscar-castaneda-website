import Link from "next/link";

interface SocialIconLink {
  href: string;
  label: string;
  icon: React.ReactNode;
}

export function SocialIconLink({ href, label, icon }: SocialIconLink) {
  return (
    <Link href={href} aria-label={label}>
      {icon}
      <span className="sr-only">{label}</span>
    </Link>
  );
}
