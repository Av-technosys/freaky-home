"use client";

import { usePathname } from "next/navigation";
import Navbar from "../app/components/Navbar";

export default function NavbarClient() {
  const pathname = usePathname();

  const variant: "dark" | "light" =
    pathname === "/" ? "dark" : "light";

  return <Navbar variant={variant} />;
}