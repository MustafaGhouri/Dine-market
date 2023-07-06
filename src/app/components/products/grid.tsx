"use client";
import { Products } from "@/default/defaults";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsSortNumericUp, BsSortNumericUpAlt } from "react-icons/bs";

const ProductGrid = ({
  param = "",
  productsPerPage = 5,
  productsLimitStart = 0,
  searchQuery = "",
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [Sort, setSort] = useState("min");
  const handleSort = () => {
    if (Sort === "min") {
      setSort("max");
    } else {
      setSort("min");
    }
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 100,
      behavior: "smooth",
    });
  };

  let productFiltered = Products.filter((res) =>
    param !== "" ? res[searchQuery as keyof typeof res] === param : true
  );

  let currentProduct = productFiltered
    .slice(indexOfFirstProduct, indexOfLastProduct)
    .sort((a, b) => (Sort === "min" ? a.price - b.price : b.price - a.price));
  return (
    <div>
      {productFiltered.length > 0 ? (
        <div className="p-5 bg-cyan-50 text-gray-900 rounded-sm w-full mb-10 ">
          <p className="float-right">Total {productFiltered.length}</p>
          <button
            className="text-gray-900 text-md flex gap-3 align-items-center"
            onClick={() => handleSort()}
          >
            <span> Sort by Price </span>
            <span className="text-2xl ">
              {Sort == "min" ? <BsSortNumericUp /> : <BsSortNumericUpAlt />} 
            </span>
          </button>
        </div>
      ) : (
        ""
      )}
      <div className="grid lg:p-0 p-5  sm:grid-cols-6  lg:grid-cols-12 grid-cols-3 gap-4">
        {currentProduct.map((res) => (
          <Link
            key={res.id}
            className="col-span-3 relative overflow-hidden"
            href={"/product-detail/" + res?.slug}
          >
            <Image
              src={res.images[0].image}
              className="w-full max-h-72 h-full object-cover object-top"
              width={500}
              height={500}
              alt={res.name}
            />
            <div className="pCard-body bg-slate-50 p-2 px-4 pt-5">
              <h2 className="text-gray-900 font-medium font-sora ">
                {res.name}
              </h2>
              <p className="text-gray-400 mt-1 capitalize font-medium">
                {res.category}
              </p>
              <h2 className="text-gray-900 mt-2 font-semibold font-sora text-2xl">
                $ {res.price}
              </h2>
            </div>
          </Link>
        ))}
      </div>
      {/* Pagination */}
      <div className="flex w-full justify-center mt-20">
        {Array.from(
          { length: Math.ceil(productFiltered.length / productsPerPage) },
          (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === index + 1
                  ? "bg-gray-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
