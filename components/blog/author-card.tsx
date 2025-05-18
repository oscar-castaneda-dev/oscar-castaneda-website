import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";

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
        <p>Financial software development</p>
      </div>
    </div>
  );
}
