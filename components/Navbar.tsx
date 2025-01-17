import Image from "next/image";
import Link from "next/link";
import React from "react";

import { SignedIn, UserButton } from "@clerk/nextjs";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          alt="ZOOM Logo"
          width={32}
          height={32}
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          Rental
        </p>
      </Link>

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
