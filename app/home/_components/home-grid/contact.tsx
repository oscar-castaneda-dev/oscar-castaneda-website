import { Card } from "./card";
import { SocialLink } from "@/app/components/ui/social-link";

export function Contact() {
  return (
    <Card area="contact">
      <p className="subtitle text-xl text-body">contact</p>
      <h3 className="heading-36 uppercase">let&apos;s talk</h3>
      <div className="flex flex-col">
        <SocialLink href="https://github.com/oscar-castaneda-dev">
          github
        </SocialLink>
        <SocialLink href="https://x.com/iamoscar">twitter</SocialLink>
      </div>
    </Card>
  );
}
