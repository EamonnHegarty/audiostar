import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Speaker from "../Assets/image-speaker-zx9.png";

const HomeShowCaseHero = () => {
  return (
    <div className="container grid gap-4 rounded-lg bg-orange px-10 py-16 md:grid-cols-2 md:items-center md:gap-8 xl:gap-20">
      <div className="flex items-center justify-center">
        <Image src={Speaker} height={300} width={300} alt="Image Description" />
      </div>
      <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
        <h1 className="mt-7 text-5xl font-extrabold text-white lg:text-6xl">
          ZX9
        </h1>
        <h1 className="text-5xl font-extrabold text-white lg:text-6xl">
          Speaker
        </h1>
        <p className="mt-7 text-lg text-white">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <div className="mt-7 grid w-full gap-3 md:inline-flex">
          <Button
            size={"lg"}
            className="border-black bg-black text-white hover:bg-white hover:text-black"
          >
            Get started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeShowCaseHero;
