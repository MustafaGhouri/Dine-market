"use client";
import React from "react";
import ProductGrid from "@/components/products/grid";
import SectionHeader from "@/components/SectionHeader";
const ProductPage = (param: any) => {
  return (
    <div className="container max-w-6xl mx-auto px-5 lg:px-0 py-10 ">
      <div className="mb-10">
        <SectionHeader smallerHeading="" BiggerHeading="Our Products" />
      </div>
      <ProductGrid param={""} searchQuery={""} />
    </div>
  );
};

export default ProductPage;
