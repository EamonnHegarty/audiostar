"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { Button } from "./ui/button";

type ProductCardProps = {
  id: number;
  image: StaticImageData;
  isNewProduct: boolean;
  title: string;
  description: string;
  imageFirstOnLarge?: boolean;
};

// fairly unoptimised, tech debt to improve
const ProductCard = (props: ProductCardProps) => {
  const { id, image, isNewProduct, title, description, imageFirstOnLarge } =
    props;
  const router = useRouter();

  const handleClick = () => {
    router.push(`/headphones/${id}`);
  };

  return (
    <>
      {/* For small screens */}
      <div className="container flex flex-col gap-4 px-10 py-16 bg-white rounded-lg md:hidden">
        <div className="flex items-center justify-center">
          <div className="w-full h-full overflow-hidden rounded-lg">
            <Image
              src={image}
              alt="Image Description"
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center text-black">
          <h1 className="text-5xl font-extrabold mt-7 lg:text-5xl">{title}</h1>
          <p className="text-lg mt-7">{description}</p>
          <div className="grid w-full gap-3 mt-7 sm:inline-flex">
            <Button
              size={"lg"}
              className="text-white bg-orange hover:bg-lightOrange hover:text-white"
              onClick={handleClick}
            >
              SEE PRODUCT
            </Button>
          </div>
        </div>
      </div>

      {/* For medium and larger screens */}
      <div className="container hidden md:grid gap-4 px-10 py-16 rounded-lg md:grid-cols-2 md:items-center md:gap-8 xl:gap-20">
        {imageFirstOnLarge ? (
          <>
            <div className="flex items-center justify-center mt-8 md:mt-0">
              <div className="w-full h-full overflow-hidden rounded-lg">
                <Image
                  src={image}
                  alt="Image Description"
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center text-black md:items-start md:justify-start md:text-left">
              <h1 className="text-5xl font-extrabold mt-7 lg:text-5xl">
                {title}
              </h1>
              <p className="text-lg mt-7">{description}</p>
              <div className="grid w-full gap-3 mt-7 sm:inline-flex">
                <Button
                  size={"lg"}
                  className="text-white bg-orange hover:bg-lightOrange hover:text-white"
                  onClick={handleClick}
                >
                  SEE PRODUCT
                </Button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center py-16 justify-center text-center text-black md:items-start md:justify-start md:text-left">
              <h1 className="text-5xl font-extrabold mt-7 lg:text-5xl">
                {title}
              </h1>
              <p className="text-lg mt-7">{description}</p>
              <div className="grid w-full gap-3 mt-7 sm:inline-flex">
                <Button
                  size={"lg"}
                  className="text-white bg-orange hover:bg-lightOrange hover:text-white"
                  onClick={handleClick}
                >
                  SEE PRODUCT
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center mt-8 md:mt-0">
              <div className="w-full h-full overflow-hidden rounded-lg">
                <Image
                  src={image}
                  alt="Image Description"
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProductCard;
