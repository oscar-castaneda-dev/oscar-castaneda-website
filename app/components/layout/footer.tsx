import Link from "next/link";

import { ArrowRightUpIcon } from "@/app/components/icons/arrow-right-up";
import { ExternalLink } from "@/app/components/ui/external-link";
import { NAV_LINKS } from "@/app/constants/nav-links";
import { Subtitle } from "@/app/components/typography/subtitle";
import { Text } from "@/app/components/typography/text";

export function Footer() {
  return (
    <footer className="border-t border-border">
      {/* NAVIGATION SECTION */}
      <div className="container py-12 flex flex-col md:flex-row justify-between gap-12">
        <div className="flex flex-col gap-2">
          <Text color="title" className="uppercase">
            oc.
          </Text>
          <Text color="caption">Tech Lead, AI Engineer</Text>
        </div>
        <div className="flex flex-col gap-4">
          <Subtitle>Navigate</Subtitle>
          <nav className="flex flex-col items-start md:items-end gap-3">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="text-body hover:text-title transition-colors duration-150"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      {/* COPYRIGHT SECTION */}
      <div className="border-t border-border container py-8 flex flex-col md:flex-row justify-start md:justify-between text-body">
        <div className="flex items-cente mb-4 md:mb-0">
          {new Date().getFullYear()} - Oscar Castaneda
        </div>
        <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-4">
          <ExternalLink
            href="https://github.com/oscar-castaneda-dev"
            icon={<ArrowRightUpIcon />}
          >
            github
          </ExternalLink>
          <ExternalLink
            href="https://x.com/iamoscar"
            icon={<ArrowRightUpIcon />}
          >
            twitter
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
}
