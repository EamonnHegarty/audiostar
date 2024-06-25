import ProductCard from "@/components/ProductCard";
import { headphoneProducts } from "@/utils/products";
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
          imageFirstOnLarge={product.isImageFirstOnLarge}
          parentPage={"headphones"}
        />
      ))}
    </div>
  );
};

export default Page;
