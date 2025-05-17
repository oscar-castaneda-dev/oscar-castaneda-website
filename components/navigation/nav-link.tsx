"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
}

export function NavLink({ children, href }: NavLinkProps) {
  const pathName = usePathname();

  const isActive = pathName === href;

  return (
    <Link
      href={href}
      className={`font-medium text-sm hover:text-gray-600 ${
        isActive ? "underline underline-offset-4" : "hover:underline"
      }`}
    >
      {children}
    </Link>
  );
}
