import { links } from "@/utils/links";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Facebook, InstagramIcon, TwitchIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-6 text-white bg-black ">
      <div className="container p-6 mx-auto">
        <div className="flex flex-col text-center md:flex-row md:justify-between md:items-center md:text-left">
          <div className="">
            <h1 className="mb-4 text-4xl font-extrabold hover:text-orange">
              audiostar
            </h1>
          </div>
          <div className="flex flex-col items-center md:flex-row md:space-x-6">
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
        </div>
        <div className="flex flex-col mt-8 md:flex-row md:justify-between md:items-center">
          <div className="text-center md:text-left md:w-1/2">
            <p className="mb-8 text-lg text-gray-300 md:mb-0">
              Audiophile is an all in one stop to fulfill your audio needs.
              We’re a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <p className="my-16 text-lg text-gray-300">
              Copyright 2024. All Rights Reserved
            </p>
          </div>
          <div className="flex justify-center mt-4 space-x-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <Facebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <TwitchIcon />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
