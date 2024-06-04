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
    <Card className="p-6 flex flex-col jusitfy-center items-center bg-backgroundGray">
      <CardHeader>
        <Image alt="Headphones" height={250} src={image} />
      </CardHeader>
      <CardContent>
        <CardTitle>{title}</CardTitle>
      </CardContent>
      <CardFooter>
        <p>SHOP</p>
        <Link href={href}>
          <ChevronRight className="text-orange cursor-pointer hover:bg-white rounded-full ml-1 transition-all" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default NavigationCard;
