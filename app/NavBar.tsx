import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";
const NavBar = () => {
  const menus = [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Issue",
      href: "/issues",
    },
  ];
  return (
    <div className="flex border-b h-14 items-center mb-5 space-x-4 px-4">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-4">
        {menus.map((e) => (
          <li key={e.href}>
            <Link href="/">{e.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
