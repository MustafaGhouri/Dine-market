"use client";
import React from "react";
import { Products } from "@/default/defaults";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Link from "next/link";

const ProductStyle1 = ({ productsLimit = 10, sliderTOShow = 3 }) => {
  return (
    <>
      <div className="container max-w-6xl mx-auto lg-px-0 px-10  py-10">
        <Swiper
          spaceBetween={15}
          slidesPerView={sliderTOShow}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: sliderTOShow,
              spaceBetween: 50,
            },
          }}
        >
          {Products.slice(0, productsLimit).map((res) => (
            <SwiperSlide
              className="productCard w-full   rounded-md overflow-hidden relative"
              key={res.id}
            >
              <Link href={"/product-detail/" + res?.slug}>
                <Image
                  src={res.images[0].image}
                  className="w-full max-h-96 h-full overflow-hidden relative object-cover object-top"
                  width={500}
                  height={500}
                  alt={res.name}
                />
                <div className="pCard-body bg-slate-50 p-2 px-4 pt-5">
                  <h2 className="text-gray-900 font-medium font-sora ">
                    {res.name}
                  </h2>
                  <h2 className="text-gray-900 mt-3 font-semibold font-sora text-2xl">
                    {" "}
                    $ {res.price}
                  </h2>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ProductStyle1;
