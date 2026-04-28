import { Card } from "./card";
import { Heading } from "@/app/components/typography/heading";
import { Subtitle } from "@/app/components/typography/subtitle";
import { ArrowRightUpIcon } from "../../icons/arrow-right-up";
import { ExternalLink } from "../external-link";

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
