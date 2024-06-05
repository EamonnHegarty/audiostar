import React from "react";
import { Button } from "./ui/button";
import HeadphonesImageDesktop from "../Assets/image-hero.jpg";

const HomeHeroSection = () => {
  return (
    <>
      <div
        className="flex h-screen w-full items-center bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${HeadphonesImageDesktop.src})` }}
      >
        <div className="container grid gap-4 md:grid-cols-2 md:items-center md:gap-8 xl:gap-20">
          <div>
            <h2 className="text-sm uppercase tracking-wide text-gray-400">
              New Product
            </h2>
            <h1 className="mt-7 text-5xl font-extrabold text-white lg:text-6xl">
              XX99 Mark II Headphones
            </h1>
            <p className="mt-7 text-lg text-gray-300">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <div className="mt-7 grid w-full gap-3 sm:inline-flex">
              <Button
                size={"lg"}
                className="bg-orange text-white hover:bg-lightOrange hover:text-white"
              >
                Get started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHeroSection;
