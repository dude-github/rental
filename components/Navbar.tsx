"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { SignedIn, UserButton } from "@clerk/nextjs";
import MobileNav from "./MobileNav";
// import { sidebarLinks } from "@/constants";
// import { usePathname } from "next/navigation";
// import { cn } from "@/lib/utils";

const Navbar = () => {
  // const pathName = usePathname();
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10 ">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          alt="Rental Logo"
          width={32}
          height={32}
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          Rental
        </p>
      </Link>
      {/* <div className="flex justify-center items-center">
        {sidebarLinks.map((link) => {
          const isActive =
            pathName === link.route || pathName.startsWith(`$(link.route)/`);

          return (
            <Link
              href={link.route}
              key={link.label}
              className={cn(
                "flex gap-4 items-center p-4 rounded-xl justify-start",
                {
                  "bg-blue-1": isActive,
                }
              )}
            >
              <Image
                src={link.imageUrl}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className="text-lg font-semibold max-lg:hidden">
                {link.label}
              </p>
            </Link>
          );
        })}
      </div> */}

      <div className="flex-between gap-5">
        {/* Clerk - User Management  */}
        <SignedIn>
          <UserButton />
        </SignedIn>
        {/* MobileNav  */}
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
