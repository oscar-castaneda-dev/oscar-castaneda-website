import { ModeToggle } from "../ui/mode-toggle";
import { Logo } from "../common/logo";

export function Header() {
  return (
    <header className="py-4 flex items-center justify-between border-b">
      <Logo />
      <div>
        <ModeToggle />
      </div>
    </header>
  );
}
