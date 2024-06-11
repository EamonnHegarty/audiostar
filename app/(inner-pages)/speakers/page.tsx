import ProductCard from "@/components/ProductCard";
import { speakersProducts } from "@/utils/products";
import React from "react";

const Page = () => {
  return (
    <div className="my-16">
      {speakersProducts.map((product) => (
        <ProductCard
          id={product.id}
          key={product.id}
          image={product.image}
          isNewProduct={product.isNewProduct}
          title={product.title}
          description={product.description}
          imageFirstOnLarge={product.isImageFirstOnLarge}
        />
      ))}
    </div>
  );
};

export default Page;
