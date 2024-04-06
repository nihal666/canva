"use client";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const MobileNavbar = () => {
  const pathname = usePathname();

  return (
    <header className="header">
      <Link href={"/"} className="flex items-center gap-2 md:py-2">
        <Image
          src="/assets/images/logo-text.svg"
          alt="logo"
          width={180}
          height={28}
        />
      </Link>

      <nav className="flex gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/"></UserButton>

          <Sheet>
            <SheetTrigger>
              <Image
                src={"/assets/icons/menu.svg"}
                alt="hamburger-menu"
                width={32}
                height={32}
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <>
                <Image
                  src={"/assets/images/logo-text.svg"}
                  alt="hamburger-menu"
                  width={152}
                  height={23}
                />

                <ul className="header-nav_elements">
                  {navLinks.map((link, index) => {
                    const isActive = link.route === pathname;

                    return (
                      <li
                        key={index}
                        className={cn(
                          "sidebar-nav_element group",
                          isActive
                            ? "bg-purple-gradient text-white"
                            : "text-gray-700"
                        )}
                      >
                        <Link
                          href={link.route}
                          className="sidebar-link cursor-pointer"
                        >
                          <Image
                            src={link.icon}
                            alt={`${link.label} Icon`}
                            width={24}
                            height={24}
                            className={`${isActive && "brightness-200"}`}
                          />
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
          <Button asChild className="button bg-purple-gradient bg-cover">
            <Link href={"/sign-in"}> Login </Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNavbar;
