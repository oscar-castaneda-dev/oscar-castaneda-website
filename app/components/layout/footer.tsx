import { ArrowRightUpIcon } from "@/app/components/icons/arrow-right-up";
import { ExternalLink } from "@/app/components/ui/external-link";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container py-8 flex flex-col md:flex-row justify-start md:justify-between text-body">
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
