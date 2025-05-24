import { GitHubIcon } from "@/components/icons/github-icon";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { XIcon } from "@/components/icons/x-icon";

export function getSocialIcons(label: string) {
  switch (label) {
    case "github":
      return <GitHubIcon />;
    case "instagram":
      return <InstagramIcon />;
    case "twitter":
      return <XIcon />;
    default:
      return <XIcon />;
  }
}
