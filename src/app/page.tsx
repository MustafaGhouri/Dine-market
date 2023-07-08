"use client";
import Link from "next/link"; 
import Image from "next/image";
import cartImg from "@/assets/icons/shopping-cart.png";
import { BannerBreands, AboutData } from "../default/defaults";
import BannerImage from "../assets/components/banner2.png";
import PromotionEvent from "@/components/promotionEvent";
import ProductStyle1 from "@/components/products/Slider";
import SectionHeader from "@/components/SectionHeader";
import TextOverlay from "@/components/textOverlay";
import NewsLetter from "@/components/newsletter"; 
export default function Home() {
  return (
    <main className="">
      <Banner />
      <PromotionEvent />
      <div className="my-10">
        <SectionHeader
          smallerHeading="PRODUCTS"
          BiggerHeading="Check What We Have"
        />
        <ProductStyle1 />
      </div>
      <AboutSection />
      <NewsLetter />
    </main>
  );
}

const Banner = () => {
  return (
    <div className="mx-auto mt-8 max-w-6xl relative overflow-x-hidden w-full">
      <div className="grid grid-cols-1 p-10 lg:px-0 lg:grid-cols-2 gap-4">
        <div className=" gap-7 pt-6   flex flex-col">
          <span className="bg-blue-100  text-blue-700 px-4 h-fit w-fit rounded-md py-2">
            Sale 70%
          </span>
          <h1 className="text-gray-950 h-fit text-4xl lg:text-6xl font-sans font-medium">
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
    <div className="flex flex-wrap gap-10 lg:gap-2 mt-10 align-middle grayscale ">
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

const AboutSection = () => {
  return (
    <div className="container mx-auto lg:p-0 p-10 overflow-x-hidden max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-5 align-items-end relative">
        <div className="relative col-span-1">
          <h2 className="text-4xl mb-14 lg:text-5xl pl-0 lg:hidden  text-gray-900 col-span-2 font-bold ">
            {AboutData.heading}
          </h2>
          <TextOverlay
            className={" text-gray-100 leading-loose lg:top-0 top-40"}
            fontSize={"lg:text-8xl   text-6xl"}
            text="Different from others"
          />
          <div className="grid grid-cols-2 gap-8 mt-3 ">
            {AboutData.item.map((res: any, i) => (
              <div
                key={i}
                className="text-gray-950 w-full lg:w-4/5 flex flex-col gap-3"
              >
                <h4 className="font-semibold  text-lg">{res?.heading}</h4>
                <p>{res?.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 col-span-1">
          <h2 className="text-4xl lg:text-5xl pl-10 hidden lg:block text-gray-900 col-span-2 font-bold mb-3">
            {AboutData.heading}
          </h2>
          <div>
            <Image
              alt="about"
              src={AboutData.image}
              width={300}
              height={400}
              className="mt-5 w-full"
            />
          </div>
          <p className="text-gray-950 px-0 py-7 lg:p-7 tracking-wider text-justify font-light text-md ">
            {AboutData.detail}
            <Link
              href="/products"
              className="bg-gray-950 text-white mt-5 flex gap-2 px-3 py-3 rounded-md h-fit w-fit"
            >
              See All Products
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
