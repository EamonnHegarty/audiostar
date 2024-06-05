import React from "react";
import { Button } from "./ui/button";
import HomeEarphones from "../Assets/image-earphones-yx1.jpg";
import Image from "next/image";

const HomeEarphonesShowCase = () => {
  return (
    <div className="my-20 flex w-full items-center bg-cover bg-center text-white">
      <div className="grid w-full gap-4 md:grid-cols-2">
        <div className="h-full w-full overflow-hidden rounded-lg">
          <Image
            src={HomeEarphones}
            alt="headphones"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="flex w-full flex-col items-center justify-center rounded-lg bg-backgroundGray p-6 md:p-0">
          <h1 className="text-4xl font-extrabold text-black">YX1 EARPHONES</h1>
          <div className="mt-7 flex w-full justify-center">
            <Button
              size={"lg"}
              className="border-black bg-black text-white hover:bg-white hover:text-black"
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
