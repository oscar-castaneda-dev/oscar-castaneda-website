"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

import { BurgerButton } from "../ui/burger-button";
import { MobileDrawer } from "./mobile-drawer";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <BurgerButton onClick={() => setOpen(true)} />
      <MobileDrawer open={open} pathname={pathname} setOpen={setOpen} />
    </>
  );
}
