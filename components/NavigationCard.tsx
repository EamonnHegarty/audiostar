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

type NavigationCardProps = {
  image: StaticImageData;
  title: string;
};

const NavigationCard = (props: NavigationCardProps) => {
  const { image, title } = props;
  return (
    <Card className="p-10 flex flex-col jusitfy-center items-center bg-backgroundGray">
      <CardHeader>
        <Image alt="Headphones" height={250} src={image} />
      </CardHeader>
      <CardContent>
        <CardTitle>{title}</CardTitle>
      </CardContent>
      <CardFooter>
        <p>SHOP</p>
        <ChevronRight className="navIcon" />
      </CardFooter>
    </Card>
  );
};

export default NavigationCard;
