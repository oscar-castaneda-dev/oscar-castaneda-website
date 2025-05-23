import { SocialLink } from "../common/social-link";

const socialLiks = [
  { href: "https://x.com/iamoscar/", name: "twitter" },
  { href: "https://www.instagram.com/oscar_castaneda_dev", name: "instagram" },
  { href: "https://github.com/oscar-castaneda-dev/", name: "github" },
];

export function Footer() {
  return (
    <footer className="flex justify-between my-16 py-6 border-t">
      <div className="flex gap-x-2">
        <p>{new Date().getFullYear()} - </p>
        <p>Oscar Castaneda</p>
      </div>
      <ul className="flex flex-wrap gap-x-6 gap-y-2">
        {socialLiks.map((socialLink) => (
          <li key={socialLink.name}>
            <SocialLink href={socialLink.href} name={socialLink.name} />
          </li>
        ))}
      </ul>
    </footer>
  );
}
