import Link from "next/link";
import { NavLink } from "./nav-link";

export function Nav() {
  return (
    <header className="border-b border-border">
      <div className="container py-6 flex justify-between items-center">
        <Link href="/" className="font-nothing-label text-white text-sm">
          [ OC ]
        </Link>
        <nav className="flex items-center gap-8">
          <NavLink href="/#work">WORK</NavLink>
          <NavLink href="/about">ABOUT</NavLink>
          <NavLink href="/#contact">CONTACT</NavLink>
        </nav>
      </div>
    </header>
  );
}
