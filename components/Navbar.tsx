"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { links } from "@/utils/links";
import DropdownLinks from "./DropdownLinks";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-lightDark">
      <div className="container mx-auto flex items-center justify-between p-6 text-white">
        <div className="flex items-center">
          <Link href="/">
            <span className="mx-2 text-2xl font-bold hover:text-orange">
              audiostar
            </span>
          </Link>
        </div>
        <div className="hidden flex-1 justify-center lg:flex">
          {links.map((link) => (
            <Button
              asChild
              key={link.id}
              variant="link"
              className="text-white hover:text-orange"
            >
              <Link href={link.href}>
                <span>{link.text}</span>
              </Link>
            </Button>
          ))}
        </div>
        <div className="flex items-center">
          <DropdownLinks />
        </div>
        <div className="hidden items-center lg:flex">
          <span>
            <ShoppingCart className="cursor-pointer text-white hover:text-orange" />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
