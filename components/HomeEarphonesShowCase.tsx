import React from "react";
import { Button } from "./ui/button";
import HomeEarphones from "../Assets/image-earphones-yx1.jpg";
import Image from "next/image";

const HomeEarphonesShowCase = () => {
  return (
    <div className="flex items-center w-full my-20 text-white bg-center bg-cover">
      <div className="grid w-full gap-4 md:grid-cols-2">
        <div className="w-full h-full overflow-hidden rounded-lg">
          <Image
            src={HomeEarphones}
            alt="headphones"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full p-6 rounded-lg bg-backgroundGray md:p-0">
          <h1 className="text-4xl font-extrabold text-black">YX1 EARPHONES</h1>
          <div className="flex justify-center w-full mt-7">
            <Button
              size={"lg"}
              className="text-white bg-black border-black hover:bg-white hover:text-black"
            >
              Get started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeEarphonesShowCase;
