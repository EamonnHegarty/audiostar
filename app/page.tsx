// app/page.tsx
import HomeHeroSection from "@/components/HomeHeroSection";
import HomeShowCaseHero from "@/components/HomeShowCaseHero";
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
        <HomeShowCaseHero />
      </div>
      <div>Footer will go here</div>
    </main>
  );
}
