"use client";
import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import classnames from "classnames";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { Box, Container, Flex } from "@radix-ui/themes";
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
  const { status, data: session } = useSession();

  return (
    <div className="border-b py-4 mb-5 px-4">
      <Container>
        <Flex justify="between">
          <Flex align="center" gap="3">
            <Link href="/">
              <AiFillBug />
            </Link>
            <ul className="flex space-x-4">
              {menus.map((e) => {
                return (
                  <li key={e.href}>
                    <Link
                      className={classnames({
                        "text-zinc-500": pathName !== e.href,
                        "hover:text-zinc-800 transition-colors": true,
                        "text-zinc-900": pathName === e.href,
                      })}
                      href={e.href}
                    >
                      {e.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Flex>
          <Box>
            {status === "authenticated" && (
              <Link href="/api/auth/signout">Log Out</Link>
            )}
            {status === "unauthenticated" && (
              <Link href="/api/auth/signin">Log In</Link>
            )}
          </Box>
        </Flex>
      </Container>
    </div>
  );
};

export default NavBar;
