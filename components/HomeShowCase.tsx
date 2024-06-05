import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Speaker from "../Assets/image-speaker-zx9.png";

const HomeShowCaseHero = () => {
  return (
    <div className="container rounded-lg  px-10 py-16 grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center bg-orange">
      <div className="flex justify-center items-center">
        <Image src={Speaker} height={300} width={300} alt="Image Description" />
      </div>
      <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
        <h1 className="text-white text-5xl font-extrabold lg:text-6xl mt-7">
          ZX9
        </h1>
        <h1 className="text-white text-5xl font-extrabold lg:text-6xl ">
          Speaker
        </h1>
        <p className="mt-7 text-lg text-white">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <div className="mt-7 grid gap-3 w-full md:inline-flex">
          <Button
            size={"lg"}
            className="bg-black  border-black text-white hover:text-black hover:bg-white"
          >
            Get started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeShowCaseHero;
