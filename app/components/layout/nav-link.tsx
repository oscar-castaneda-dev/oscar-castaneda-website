"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        "font-nothing-subtitle",
        pathname === href ? "text-success" : "text-title hover:underline",
      )}
    >
      {children}
    </Link>
  );
}
