import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Speaker from "../Assets/image-speaker-zx9.png";

const HomeSpeaker1ShowCase = () => {
  return (
    <div className="container grid gap-4 px-10 py-16 rounded-lg bg-orange md:grid-cols-2 md:items-center md:gap-8 xl:gap-20">
      <div className="flex items-center justify-center">
        <Image src={Speaker} height={300} width={300} alt="Image Description" />
      </div>
      <div className="flex flex-col items-center justify-center text-center md:text-left md:items-start md:justify-start">
        <h1 className="text-5xl font-extrabold text-white mt-7 lg:text-6xl">
          ZX9
        </h1>
        <h1 className="text-5xl font-extrabold text-white lg:text-6xl">
          Speaker
        </h1>
        <p className="text-lg text-white mt-7">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <div className="grid w-full gap-3 mt-7 md:inline-flex">
          <Button
            size={"lg"}
            className="text-white bg-black border-black hover:bg-white hover:text-black"
          >
            Get started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeSpeaker1ShowCase;
