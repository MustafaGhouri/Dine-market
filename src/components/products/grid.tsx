"use client";
import { client } from "@/lib/sanityClient";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsSortNumericUp, BsSortNumericUpAlt } from "react-icons/bs"; 
 
import { urlForImage } from "../../../sanity/lib/image";
import { IProduct } from "@/interfaces";

const ProductGrid = ({
  param = "",
  productsPerPage = 5,
  productsLimitStart = 0,
  searchQuery = "",
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [Sort, setSort] = useState("min");
  const [iproducts, setIProduct] = useState<IProduct[]>([]);

  const FetchProduct = async () => {
    await client
      .fetch(
        `*[_type == 'product' ${
          param != "" ? `&& category->slug.current == '${param}'` : ""
        } ]| order(_createdAt desc){
      title,
      _id,
      details,
      slug,
      price,
      stripeId,
      _createdAt,
      images[0],  
      category->{
        title,
        slug
      },
      tags->{
        title,
      },
      sizes[]->{
        title
      }  
        }
    `
      )
      .then((res) => {
        setIProduct(res);
      });
  };

  useEffect(() => {
    FetchProduct();
  }, []);

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

  let currentProduct = iproducts
    .slice(indexOfFirstProduct, indexOfLastProduct)
    .sort((a, b) => (Sort === "min" ? a.price - b.price : b.price - a.price));
  return (
    <div>
      {iproducts.length > 0 ? (
        <>
          <div className="p-5 bg-cyan-50 text-gray-900 rounded-sm w-full mb-10 ">
            <p className="float-right">Total {iproducts.length}</p>
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

          <div className="grid lg:p-0 p-5  sm:grid-cols-6  lg:grid-cols-12 grid-cols-3 gap-4">
            {currentProduct.map((res) => (
              <Link
                key={res._id}
                className="col-span-3 relative overflow-hidden"
                href={"/product-detail/" + res.slug.current}
              >
                <Image
                  src={urlForImage(res.images).url()}
                  className="w-full max-h-72 h-full object-cover object-top"
                  width={500}
                  height={500}
                  alt={res.slug.current}
                />
                <div className="pCard-body bg-slate-50 p-2 px-4 pt-5">
                  <h2 className="text-gray-900 font-medium font-sora ">
                    {res.title}
                  </h2>
                  <p className="text-gray-400 mt-1 capitalize font-medium">
                    {res.tags.title}
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
              { length: Math.ceil(iproducts.length / productsPerPage) },
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
        </>
      ) : (
        <div className="grid lg:p-0 p-5 text-gray-950 sm:grid-cols-6  lg:grid-cols-12 grid-cols-3 gap-4">
        
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
