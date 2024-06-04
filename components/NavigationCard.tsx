import React from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import { StaticImageData } from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

type NavigationCardProps = {
  image: StaticImageData;
  title: string;
  href: string;
};

const NavigationCard = (props: NavigationCardProps) => {
  const { image, title, href } = props;
  return (
    <Card className="p-4 flex flex-col jusitfy-center items-center bg-backgroundGray">
      <CardHeader>
        <Image alt="Headphones" height={200} src={image} />
      </CardHeader>
      <CardContent>
        <CardTitle>{title}</CardTitle>
      </CardContent>
      <CardFooter>
        <Link href={href}>
          <div className="flex cols-2 items-center justify-center align-center hover:text-orange">
            <p>SHOP</p>
            <ChevronRight className="text-orange" />
          </div>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default NavigationCard;
