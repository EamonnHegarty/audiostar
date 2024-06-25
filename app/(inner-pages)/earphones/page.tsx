import ProductCard from "@/components/ProductCard";
import { earphonesProducts } from "@/utils/products";
import React from "react";

const Page = () => {
  return (
    <div className="my-16">
      {earphonesProducts.map((product) => (
        <ProductCard
          id={product.id}
          key={product.id}
          image={product.image}
          isNewProduct={product.isNewProduct}
          title={product.title}
          description={product.description}
          imageFirstOnLarge={product.isImageFirstOnLarge}
          parentPage={"earphones"}
        />
      ))}
    </div>
  );
};

export default Page;
