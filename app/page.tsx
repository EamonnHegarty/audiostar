// app/page.tsx
import HomeHeroSection from "@/components/HomeHeroSection";
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
      </div>
    </main>
  );
}
