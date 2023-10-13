"use client";
import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import classnames from "classnames";
import { usePathname } from "next/navigation";
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

  const pathName = usePathname();

  return (
    <div className="flex border-b h-14 items-center mb-5 space-x-4 px-4">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-4">
        {menus.map((e) => {
          const classNames = classnames({
            "text-zinc-500": true,
            "hover:text-zinc-600": true,
            "text-zinc-900": pathName === e.href,
          });
          return (
            <li key={e.href}>
              <Link className={classNames} href={e.href}>
                {e.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBar;
