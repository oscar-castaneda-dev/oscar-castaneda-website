import { Link } from "@/components/common/link";
import { Logo } from "@/components/common/logo";
import { ModeToggle } from "@/components/ui/mode-toggle";

const links = [{ href: "/design-system", label: "Design System" }];

export function Header() {
  return (
    <header>
      <nav className="border-b border-gray-100 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Logo />
            <div className="flex items-center gap-x-4">
              {links.map((link) => (
                <Link
                  className="font-medium"
                  href={link.href}
                  key={link.label}
                  size={14}
                >
                  {link.label}
                </Link>
              ))}
              <ModeToggle />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
