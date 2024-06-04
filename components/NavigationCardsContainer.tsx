import React from "react";
import { navigationCardsContent } from "@/utils/navigationCardsContent";
import NavigationCard from "./NavigationCard";

const NavigationCardsContainer = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 my-20">
      {navigationCardsContent.map((content) => (
        <NavigationCard
          image={content.image}
          title={content.title}
          key={content.id}
        />
      ))}
    </div>
  );
};

export default NavigationCardsContainer;