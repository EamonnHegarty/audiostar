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
    <Card className="flex flex-col items-center p-4 jusitfy-center bg-backgroundGray">
      <CardHeader>
        <Image alt="Headphones" height={200} src={image} />
      </CardHeader>
      <CardContent>
        <CardTitle>{title}</CardTitle>
      </CardContent>
      <CardFooter>
        <Link href={href}>
          <div className="flex items-center justify-center cols-2 align-center hover:text-orange">
            <p>SHOP</p>
            <ChevronRight className="text-orange" />
          </div>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default NavigationCard;
