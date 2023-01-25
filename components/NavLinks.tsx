"use client";

//! NEXT.JS
import { usePathname } from "next/navigation";

//! CONSTANT
import { categories } from "../constants";

//! COMPONENTS
import NavLink from "./NavLink";

const NavLinks = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname?.split("/").pop() === path;
  };

  return (
    <nav className="grid grid-cols-4 md:grid-cols-7 text-xs md:text-sm gap-4 pb-10 max-w-6xl mx-auto border-b">
      {categories.map((item) => (
        <NavLink key={item} category={item} isActive={isActive(item)} />
      ))}
    </nav>
  );
};

export default NavLinks;
