import { Dispatch, SetStateAction } from "react";

import { cn } from "@/lib/cn";
import { Logo } from "@/app/components/ui/logo";
import { NAV_LINKS } from "@/constants/nav-links";
import Link from "next/link";

interface MobileDrawerProps {
  open: boolean;
  pathname: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export function MobileDrawer({ open, pathname, setOpen }: MobileDrawerProps) {
  return (
    <div
      aria-hidden={!open}
      className={cn(
        "fixed inset-0 z-50 bg-surface flex flex-col transition-transform duration-300 ease-out",
        open ? "translate-x-0" : "translate-x-full pointer-events-none",
      )}
    >
      <div className="container py-6 flex justify-between items-center border-b border-border">
        <Logo setOpen={setOpen} />
        <button
          aria-label="close menu"
          className="font-nothing-subtitle text-caption hover:text-title transition-colors duration-150 cursor-pointer"
          onClick={() => setOpen(false)}
        >
          [close]
        </button>
      </div>
      <nav className="container pt-16 flex flex-col gap-10">
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={label}
            className={cn(
              "font-nothing-subtitle text-2xl",
              pathname === href
                ? "text-success"
                : "text-title hover:text-caption transition-colors duration-150",
            )}
            href={href}
            onClick={() => setOpen(false)}
          >
            /{label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
