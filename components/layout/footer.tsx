import { socialLiks } from "@/conts/socialLinks";
import { SocialLink } from "../common/social-link";

export function Footer() {
  return (
    <footer className="flex justify-between my-16 py-6 border-t">
      <div className="flex gap-x-2">
        <p>{new Date().getFullYear()} - </p>
        <p>Oscar Castaneda</p>
      </div>
      <ul className="flex flex-wrap gap-x-6 gap-y-2">
        {socialLiks.map((socialLink) => (
          <li key={socialLink.label}>
            <SocialLink href={socialLink.href} name={socialLink.label} />
          </li>
        ))}
      </ul>
    </footer>
  );
}
