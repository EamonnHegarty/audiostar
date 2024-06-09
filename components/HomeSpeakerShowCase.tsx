import React from "react";
import HomeImageSpeaker from "../Assets/image-speaker-zx7.jpg";
import { Button } from "./ui/button";

const HomeSpeakerShowCase = () => {
  return (
    <div
      className="flex items-center p-6 my-20 text-white bg-center bg-cover rounded-lg md:p-16 lg:p-28"
      style={{ backgroundImage: `url(${HomeImageSpeaker.src})` }}
    >
      <div className="container grid gap-4 md:grid-cols-2 md:items-center md:gap-8 xl:gap-20">
        <div>
          <h1 className="text-4xl font-extrabold text-black mt-7 md:text-6xl">
            ZX7 SPEAKER
          </h1>
          <div className="grid w-full gap-3 mt-7 sm:inline-flex">
            <Button
              size={"lg"}
              className="text-white bg-black border-black  hover:bg-white hover:text-black"
            >
              SEE PRODUCT
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSpeakerShowCase;
