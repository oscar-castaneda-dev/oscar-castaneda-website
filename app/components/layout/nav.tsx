import { NavLink } from "./nav-link";
import { Logo } from "../ui/logo";

export function Nav() {
  return (
    <header className="border-b border-border">
      <div className="container py-6 flex justify-between items-center">
        <Logo />
        <nav className="flex items-center gap-8">
          <NavLink href="/about">about</NavLink>
        </nav>
      </div>
    </header>
  );
}
