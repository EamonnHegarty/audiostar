import ProductCard from "@/components/ProductCard";
import { headphoneProducts } from "@/utils/headphoneProducts";
import React from "react";

const Page = () => {
  return (
    <div className="my-16">
      {headphoneProducts.map((product) => (
        <ProductCard
          id={product.id}
          key={product.id}
          image={product.image}
          isNewProduct={product.isNewProduct}
          title={product.title}
          description={product.description}
          imageFirstOnLarge={product.isImageFirstOnLarge} // Change to 'false' to test the other direction
        />
      ))}
    </div>
  );
};

export default Page;
