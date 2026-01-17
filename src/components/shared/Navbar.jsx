"use client";
import Link from "next/link";
import Logo from "../Logo";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { IoMdMenu } from "react-icons/io";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import Image from "next/image";
import { signOut } from "next-auth/react";
const Navbar = ({ session }) => {
  const pathname = usePathname();
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "All products", href: "/all-products" },
    { name: "Add Product", href: "/add-product" },
  ];

  return (
    <nav className="px-5 border-b flex justify-between items-center h-16">
      <div className="flex items-center">
      {/* Mobile view */}
      <div className="md:hidden flex items-center gap-2">
        <Sheet>
          <SheetTrigger>
            <IoMdMenu size={26} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <Logo />
              </SheetTitle>
              <SheetDescription>
                {" "}
                Browse categories, explore products, and access your account
                quickly from here.
              </SheetDescription>
            </SheetHeader>
            <ul className="px-5 space-y-3">
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  className={`border-b-2 py-2 ${
                    pathname == link.href && "text-secondary  border-secondary"
                  }`}
                >
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
            {
              session?.user?<div className="px-5"><Button onClick={()=>signOut()} variant="outline" className={"w-full"}>
                  Sign Out
                </Button></div>:(<div className="flex flex-col gap-3  px-5">
              <Link href={"/login"}>
                <Button variant="outline" className={"w-full"}>
                  Login
                </Button>
              </Link>
              <Link href={"/register"}>
                <Button variant="secondary" className={"w-full"}>
                  Sign Up
                </Button>
              </Link>
            </div>)
            }
          </SheetContent>
        </Sheet>
      </div>
        <Logo />
      </div>
      {/* desktop view */}
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={` ${
              pathname == link.href &&
              "text-secondary font-bold border-b border-secondary"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {!session?.user ? (
        <div className=" space-x-3">
          <Link href={"/login"}>
            <Button variant="outline">Login</Button>
          </Link>
          <Link href={"/register"}>
            <Button variant="secondary">Sign Up</Button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-row-reverse items-center gap-5">
          <Button onClick={()=>signOut()} variant="outline" className={"hidden md:flex"}>Sign Out</Button>
          <Image
            src={session?.user?.image}
            alt="user image"
            width={100}
            height={100}
            className="rounded-full h-12 w-12"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
