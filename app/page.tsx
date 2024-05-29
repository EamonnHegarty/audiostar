// app/page.tsx
import HomeHeroSection from "@/components/HomeHeroSection";
import React from "react";

export default function Home() {
  return (
    <main>
      <div>
        <HomeHeroSection />
      </div>
      <h1 className="text-4xl font-bold">Welcome to Audiostar</h1>
      <p className="mt-4 text-lg">This is the home page content.</p>
    </main>
  );
}
