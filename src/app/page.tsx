"use client";
import Link from "next/link";
import Header from "./components/header";
import Image from "next/image";
import cartImg from "../assets/icons/shopping-cart.png";
import { BannerBreands } from "../default/defaults";
import BannerImage from "../assets/components/banner2.png";
import PromotionEvent from "./components/promotionEvent";
import ProductStyle1 from "./components/products/style1";
import SectionHeader from "./components/SectionHeader";
export default function Home() {
  return (
    <main className="">
      <Header />
      <Banner />
      <PromotionEvent/>
      <div className="my-10">
      <SectionHeader  smallerHeading='PRODUCTS' BiggerHeading='Check What We Have'/>
      <ProductStyle1/>
      </div>
    </main>
  );
}

const Banner = () => {
  return (
    <div className="mx-auto mt-8 max-w-6xl w-full">
      <div className="grid grid-cols-1 p-10 lg:px-0 lg:grid-cols-2 gap-4">
        <div className=" gap-7 pt-6   flex flex-col">
          <span className="bg-blue-100  text-blue-700 px-4 h-fit w-fit rounded-md py-2">
            Sale 70%
          </span>
          <h1 className="text-gray-950 h-fit text-6xl font-sans font-medium">
            An Industrial Take on Streetwear
          </h1>
          <p className="text-gray-950 h-fit max-w-sm">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>
          <Link
            href=""
            className="bg-gray-950  mt-5 flex gap-2 px-3 py-3 rounded-md h-fit w-fit"
          >
            <Image src={cartImg} alt="start shopping" className="w-5" />
            Start Shopping
          </Link>
          <Brands />
        </div>
        <div className="relative hidden lg:block">
          {/* <div className=" bannerCircle  "></div> */}
          <Image src={BannerImage} alt="" className="z-10 relative" />
        </div>
      </div>
    </div>
  );
};

const Brands = () => {
  return (
    <div className="flex gap-2 mt-10 align-middle grayscale ">
      {BannerBreands.map((res) => {
        return (
          <Image
            className="w-24 h-fit brightness-0 object-contain"
            src={res.logo}
            alt={res.alt}
            key={res.id}
          />
        );
      })}
    </div>
  );
};
