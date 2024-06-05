import React from "react";
import HomeImageSpeaker from "../Assets/image-speaker-zx7.jpg";
import { Button } from "./ui/button";

const HomeSpeakerShowCase = () => {
  return (
    <div
      className="my-20 flex items-center rounded-lg bg-cover bg-center p-6 text-white md:p-16 lg:p-28"
      style={{ backgroundImage: `url(${HomeImageSpeaker.src})` }}
    >
      <div className="container grid gap-4 md:grid-cols-2 md:items-center md:gap-8 xl:gap-20">
        <div>
          <h1 className="mt-7 text-4xl font-extrabold text-black md:text-6xl">
            ZX7 SPEAKER
          </h1>
          <div className="mt-7 grid w-full gap-3 sm:inline-flex">
            <Button
              size={"lg"}
              className="border-black bg-black text-white hover:bg-white hover:text-black"
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
