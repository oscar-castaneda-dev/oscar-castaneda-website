import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Text } from "@/components/common/text";
import { XIcon } from "../icons/x-icon";
import { InstagramIcon } from "../icons/instagram-icon";
import { GitHubIcon } from "../icons/github-icon";
import { LinkedinIcon } from "../icons/linkedin-icon";
import { Separator } from "../ui/separator";

export function AuthorCard() {
  return (
    <div className="flex flex-col items-center gap-y-1">
      <Separator className="mb-4 max-w-32" />
      <Avatar>
        <AvatarImage src="/avatar.jpeg" />
        <AvatarFallback>OC</AvatarFallback>
      </Avatar>
      <Text weight="semibold">Oscar Castaneda</Text>
      <Text className="mb-5" size={14}>
        Web Developer
      </Text>
      <div className="flex gap-x-5">
        <GitHubIcon />
        <LinkedinIcon />
        <XIcon />
        <InstagramIcon />
      </div>
    </div>
  );
}
