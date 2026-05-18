"use client";

import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface LogoProps {
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

export function Logo({ setOpen }: LogoProps) {
  return (
    <Link
      href="/"
      onClick={() => setOpen?.(false)}
      className="group font-nothing-code text-title hover:no-underline before:content-['[_'] after:content-['_]']"
    >
      <span className="relative inline-block font-nothing-code uppercase">
        oc
        <span className="absolute bottom-0 left-0 w-full border-b border-title opacity-0 group-hover:opacity-100" />
      </span>
    </Link>
  );
}
