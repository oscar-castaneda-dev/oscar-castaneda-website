import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { getSocialIcons } from "@/lib/social-icons";
import { Separator } from "../ui/separator";
import { SocialIconLink } from "../common/social-icon-link";
import { socialLiks } from "@/conts/socialLinks";

export function AuthorCard() {
  return (
    <div>
      <Separator className="max-w-2xs my-12 mx-auto" />
      <div className="flex flex-col items-center">
        <p className="uppercase text-sm mb-4">Author</p>
        <Avatar className="size-16 mb-4">
          <AvatarImage src="/avatar.webp" />
          <AvatarFallback>OC</AvatarFallback>
        </Avatar>
        <h4 className="font-bold text-lg">Oscar Castaneda</h4>
        <p className="mb-4">Financial software development</p>
        <div className="flex gap-x-4">
          {socialLiks.map((socialLink) => (
            <SocialIconLink
              key={socialLink.label}
              href={socialLink.href}
              label={socialLink.label}
              icon={getSocialIcons(socialLink.label)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
