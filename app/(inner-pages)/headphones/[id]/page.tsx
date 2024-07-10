"use client";

import { useParams } from "next/navigation";
import { headphoneProducts } from "@/utils/products";
import React from "react";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";

const Page = () => {
  const params = useParams();
  const { id } = params;

  const product = headphoneProducts.find((p) => p.id.toString() === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  //   doesn't match the desired design to fix for now just getting functionality
  return (
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
  );
};

export default Page;
