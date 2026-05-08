import { Logo } from "../ui/logo";
import { NAV_LINKS } from "@/app/constants/nav-links";
import { NavLink } from "./nav-link";

export function Nav() {
  return (
    <header className="border-b border-border">
      <div className="container py-6 flex justify-between items-center">
        <Logo />
        <nav className="flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <NavLink key={label} href={href}>
              /{label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
