"use client";

import { useParams } from "next/navigation";
import { earphonesProducts } from "@/utils/products";
import React from "react";
import ProductCard from "@/components/ProductCard";

const Page = () => {
  const params = useParams();
  const { id } = params;

  const product = earphonesProducts.find((p) => p.id.toString() === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
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
  );
};

export default Page;
