import { Card } from "./card";
import { GitHubIcon } from "@/app/components/icons/github";
import { Heading } from "@/app/components/typography/heading";
import { LinkedInIcon } from "@/app/components/icons/linkedin";
import { Subtitle } from "@/app/components/typography/subtitle";

export function Contact() {
  return (
    <Card area="contact">
      <Subtitle color="body">contact</Subtitle>
      <div>
        <Heading size={36} as="h3" className="uppercase mb-4">
          reach out
        </Heading>
        <div className="flex flex-wrap gap-2">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-outline rounded px-2.5 py-1.5 hover:border-caption transition-colors duration-200"
          >
            <GitHubIcon size={20} />
            <span className="text-xs">github</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-outline rounded px-2.5 py-1.5 hover:border-caption transition-colors duration-200"
          >
            <LinkedInIcon size={20} />
            <span className="text-xs">linkedin</span>
          </a>
        </div>
      </div>
    </Card>
  );
}
