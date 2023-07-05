"use client";
import React from "react";
import { Products } from "@/default/defaults";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Zoom } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import Link from "next/link";

const ProductStyle1 = () => {
  return (
    <>
      <div className="container max-w-6xl mx-auto  py-10">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Zoom]}
          spaceBetween={15}
          slidesPerView={3}
          navigation
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {Products.slice(0, 10).map((res) => (
            <SwiperSlide
              className="productCard  w-full   rounded-md overflow-hidden relative"
              key={res.id}
            >
              <Link href={"/product-detail/" + res?.id}>
                <Image
                  src={res.images[0].image}
                  className="w-full"
                  width="100"
                  height="100"
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
