import React from "react";
import { Button } from "./ui/button";
import HeadphonesImageDesktop from "../Assets/image-hero.jpg";

const HomeHeroSection = () => {
  return (
    <>
      <div
        className="flex items-center w-full h-screen text-white bg-center bg-cover"
        style={{ backgroundImage: `url(${HeadphonesImageDesktop.src})` }}
      >
        <div className="container grid gap-4 md:grid-cols-2 md:items-center md:gap-8 xl:gap-20">
          <div>
            <h2 className="text-sm tracking-wide text-gray-400 uppercase">
              New Product
            </h2>
            <h1 className="text-5xl font-extrabold text-white mt-7 lg:text-6xl">
              XX99 Mark II Headphones
            </h1>
            <p className="text-lg text-gray-300 mt-7">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <div className="grid w-full gap-3 mt-7 sm:inline-flex">
              <Button
                size={"lg"}
                className="text-white bg-orange hover:bg-lightOrange hover:text-white"
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
