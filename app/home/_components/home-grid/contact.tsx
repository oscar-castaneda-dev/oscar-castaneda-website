import { ArrowRightUpIcon } from "@/app/components/icons/arrow-right-up";
import { Card } from "./card";
import { ExternalLink } from "@/app/components/ui/external-link";
import { Heading } from "@/app/components/typography/heading";
import { Subtitle } from "@/app/components/typography/subtitle";

export function Contact() {
  return (
    <Card area="contact">
      <Subtitle color="body">contact</Subtitle>
      <Heading size={36} className="uppercase">
        let&apos;s talk
      </Heading>
      <div className="flex flex-col">
        <ExternalLink
          href="https://github.com/oscar-castaneda-dev"
          icon={<ArrowRightUpIcon />}
        >
          github
        </ExternalLink>
        <ExternalLink href="https://x.com/iamoscar" icon={<ArrowRightUpIcon />}>
          twitter
        </ExternalLink>
      </div>
    </Card>
  );
}
