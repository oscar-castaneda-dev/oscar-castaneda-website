import { SocialLink } from "@/app/components/ui/social-link";
import { FooterNav } from "./footer-nav";

export function Footer() {
  return (
    <footer className="border-t border-border">
      {/* NAVIGATION SECTION */}
      <div className="container py-12 flex flex-col md:flex-row justify-between gap-12">
        <div className="flex flex-col gap-2">
          <p className="uppercase">oc.</p>
          <p className="text-caption">Tech Lead, AI Engineer</p>
        </div>
        <FooterNav />
      </div>
      {/* COPYRIGHT SECTION */}
      <div className="border-t border-border container py-8 flex flex-col md:flex-row justify-start md:justify-between text-body">
        <div className="flex items-cente mb-4 md:mb-0">
          {new Date().getFullYear()} - Oscar Castaneda
        </div>
        <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-4">
          <SocialLink href="https://github.com/oscar-castaneda-dev">
            github
          </SocialLink>
          <SocialLink href="https://x.com/iamoscar">twitter</SocialLink>
        </div>
      </div>
    </footer>
  );
}
