import React from "react";
import Image from "next/image";
import BestGear from "../Assets/image-best-gear.jpg";

const MissionStatement = () => {
  return (
    <div className="container grid gap-4 px-10 py-16 bg-white rounded-lg md:grid-cols-2 md:items-center md:gap-8 xl:gap-20">
      <div className="flex flex-col items-center justify-center px-4 text-center text-black md:items-start md:justify-start md:text-left">
        <h1 className="text-5xl font-extrabold mt-7 lg:text-5xl">
          BRINGING YOU THE <span className="text-orange">BEST</span> AUDIO GEAR
        </h1>
        <p className="text-lg mt-7">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="flex items-center justify-center mt-8 md:mt-0">
        <div className="w-full h-full overflow-hidden rounded-lg">
          <Image
            src={BestGear}
            alt="Image Description"
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default MissionStatement;
