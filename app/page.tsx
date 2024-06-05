// app/page.tsx
import HomeEarphonesShowCase from "@/components/HomeEarphonesShowCase";
import HomeHeroSection from "@/components/HomeHeroSection";
import HomeShowCase from "@/components/HomeShowCase";
import HomeSpeakerShowCase from "@/components/HomeSpeakerShowCase";
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
        <HomeShowCase />
        <HomeSpeakerShowCase />
        <HomeEarphonesShowCase />
      </div>
    </main>
  );
}
