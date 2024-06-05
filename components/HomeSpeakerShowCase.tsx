import React from "react";
import HomeImageSpeaker from "../Assets/image-speaker-zx7.jpg";
import { Button } from "./ui/button";

const HomeSpeakerShowCase = () => {
  return (
    <div
      className="my-20 text-white bg-cover bg-center flex items-center rounded-lg h-80 "
      style={{ backgroundImage: `url(${HomeImageSpeaker.src})` }}
    >
      <div className="container grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        <div>
          <h1 className="text-black  font-extrabold text-6xl mt-7">
            ZX7 SPEAKER
          </h1>
          <div className="mt-7 grid gap-3 w-full sm:inline-flex">
            <Button
              size={"lg"}
              className="bg-black  border-black text-white hover:text-black hover:bg-white"
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
