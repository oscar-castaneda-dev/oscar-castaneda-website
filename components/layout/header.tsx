import { Logo } from "../common/logo";
import NavLink from "../navigation/nav-link";
import { ModeToggle } from "../ui/mode-toggle";

const navigationLinks = [{ href: "/blog", label: "Blog" }];

export function Header() {
  return (
    <header className="py-4 flex items-center justify-between border-b">
      <Logo />
      <nav className="space-x-6">
        {navigationLinks.map((link) => (
          <NavLink key={link.label} href={link.href}>
            {link.label}
          </NavLink>
        ))}
        <ModeToggle />
      </nav>
    </header>
  );
}
