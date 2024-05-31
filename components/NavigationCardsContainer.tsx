import React from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import CardHeadphones from "../Assets/image-category-thumbnail-headphones.png";
import CardSpeakers from "../Assets/image-category-thumbnail-speakers.png";
import CardEarphones from "../Assets/image-category-thumbnail-earphones.png";

const NavigationCardsContainer = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 my-20">
      <CustomCard />
      <CustomCard />
      <CustomCard />
    </div>
  );
};

export default NavigationCardsContainer;

const CustomCard = () => {
  return (
    <Card className="p-10">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};
