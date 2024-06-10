// app/page.tsx
import HomeEarphonesShowCase from "@/components/HomeEarphonesShowCase";
import HomeHeroSection from "@/components/HomeHeroSection";
import HomeSpeaker1ShowCase from "@/components/HomeSpeaker1ShowCase";
import HomeSpeaker2ShowCase from "@/components/HomeSpeaker2ShowCase";

import NavigationCardsContainer from "@/components/NavigationCardsContainer";
import React from "react";

export default function Home() {
  return (
    <main>
      <div>
        <HomeHeroSection />
      </div>
      <div className="container">
        <NavigationCardsContainer />
        <HomeSpeaker1ShowCase />
        <HomeSpeaker2ShowCase />
        <HomeEarphonesShowCase />
      </div>
    </main>
  );
}
