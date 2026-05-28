import Link from "next/link";

import { FOOTER_NAV_LINKS } from "@/constants/footer-nav-links";

export function FooterNav() {
  return (
    <div className="flex flex-col gap-4">
      <p className="subtitle text-xl">Navigate</p>
      <nav className="flex flex-col items-start md:items-end gap-3">
        {FOOTER_NAV_LINKS.map(({ href, label }) => (
          <Link
            key={label}
            href={href}
            className="text-caption hover:text-body hover:underline transition-colors duration-150"
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
