import { ModeToggle } from "../ui/mode-toggle";
import { Logo } from "../common/logo";
import Link from "next/link";

export function Header() {
  return (
    <header className="py-4 flex items-center justify-between border-b">
      <Logo />
      <nav className="space-x-6">
        <Link
          href="/blog"
          className="font-medium text-sm hover:text-gray-600 hover:underline"
        >
          Blog
        </Link>
        <ModeToggle />
      </nav>
    </header>
  );
}
