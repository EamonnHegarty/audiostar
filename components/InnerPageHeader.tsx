import React from "react";

const InnerPageHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center justify-center w-full h-40 text-4xl font-bold text-center text-white bg-lightDark">
      <h1>{title}</h1>
    </div>
  );
};

export default InnerPageHeader;
