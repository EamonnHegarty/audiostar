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
      <div className="container flex items-center justify-between p-6 mx-auto text-white">
        <div className="flex items-center">
          <Link href="/">
            <span className="mx-2 text-3xl font-bold hover:text-orange">
              audiostar
            </span>
          </Link>
        </div>
        <div className="justify-center flex-1 hidden space-x-6 lg:flex ">
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
        <div className="items-center hidden lg:flex">
          <span>
            <ShoppingCart className="text-white cursor-pointer hover:text-orange" />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
