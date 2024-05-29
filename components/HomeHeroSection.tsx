import React from "react";
import { Button } from "./ui/button";
import HeadphonesImageDesktop from "../Assets/image-hero.jpg";
import Image from "next/image";

const HomeHeroSection = () => {
  return (
    <>
      <div
        className="relative w-full h-screen text-white bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${HeadphonesImageDesktop.src})` }}
      >
        <div className="container grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <h2 className="text-gray-400 uppercase tracking-wide text-sm">
              New Product
            </h2>
            <h1 className="text-white text-5xl font-extrabold lg:text-6xl mt-7">
              XX99 Mark II Headphones
            </h1>
            <p className="mt-7 text-lg text-gray-300">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
              <Button
                size={"lg"}
                className="bg-orange text-white hover:text-white hover:bg-lightOrange"
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
