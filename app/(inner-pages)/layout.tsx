"use client";
import React, { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import InnerPageHeader from "@/components/InnerPageHeader";
import NavigationCardsContainer from "@/components/NavigationCardsContainer";

const Layout = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  let title = "";

  switch (pathname) {
    case "/headphones":
      title = "HEADPHONES";
      break;
    case "/speakers":
      title = "SPEAKERS";
      break;
    case "/earphones":
      title = "EARPHONES";
      break;
    default:
      title = "";
  }

  return (
    <>
      <InnerPageHeader title={title} />
      <div className="container">
        {children}
        <NavigationCardsContainer />
      </div>
    </>
  );
};

export default Layout;
