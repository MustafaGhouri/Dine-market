import React from "react";
import SectionHeader from "./SectionHeader";
import event1 from "../assets/components/event1.png";
import event2 from "../assets/components/event2.png";
import event3 from "../assets/components/event3.png";
import Image from "next/image"; 




const PromotionEvent = () => {
  return (
    <div className="py-10 mt-10 container max-w-6xl mx-auto">
      <SectionHeader
        smallerHeading="PROMOTIONS"
        BiggerHeading="Our Promotions Events"
      />
      <div className="grid mt-6 grid-rows-4 sm:grid-rows-4 lg:grid-rows-4 grid-cols-2 lg:grid-cols-2 grid-flow-col gap-4 px-5 md:px-10 lg:p-0">

        <div className=" row-span-1 sm:row-span-2 rounded-md flex flex-col sm:flex-row justify-between col-span-2 sm:col-span-2 bg-[#d6d6d8]">
          <div className="sm:p-10 sm:pr-0 p-4">
            <h3 className="text-4xl text-gray-900 font-sora font-bold">
              GET UP TO
            </h3>
            <h3 className="text-4xl text-gray-900 font-sora font-bold">60%</h3>
            <p className=" text-gray-900 mt-3 text-xl ">
              For the summer season
            </p>
          </div>
          <Image src={event1} alt="event 1" className="float-right" />
        </div>

        <div className="row-span-1 sm:row-span-2 rounded-md text-center flex justify-center align-middle flex-col col-span-2 sm:col-span-2 bg-[#212121] ">
          <h2 className="text-4xl font-bold text-slate-50">GET 30% Off</h2>
          <h4>USE PROMO CODE</h4>
          <button className="bg-gray-700 px-3 md:px-8 tracking-widest text-lg md:text-xl py-2 w-fit block mx-auto mt-2 text-white font-sans font-medium rounded-md text-center">
            DINEWEEKENDSAlE
          </button>
        </div>

        <div className=" row-span-1 h-fit sm:row-span-2 lg:row-span-4 rounded-md  bg-[#efe1c7]  relative overflow-hidden flex flex-col col-span-2 sm:col-span-1 md:col-span-1">
          <div className="p-4 text-gray-900 flex-1">
            <p>Flex Sweatshirt</p>
            <p>
              $100.00<b>$75.00</b>
            </p>
          </div>
          <Image src={event2} alt="event 3" className=" mx-auto flex-2 bottom-0 " />
        </div>

        <div className="row-span-1 h-fit  sm:row-span-2 lg:row-span-4 rounded-md  bg-[#d7d7d9] relative overflow-hidden flex flex-col col-span-2 sm:col-span-1 md:col-span-1 ">
          <div className="p-4 text-gray-900 flex-1">
            <p>Flex Push Button Bomber</p>
            <p>
              $225.00 <b>$190.00</b>
            </p>
          </div>
          <Image src={event3} alt="event 3" className=" flex-2 mx-auto bottom-0 " />
        </div>
      </div>
    </div>
  );
};

export default PromotionEvent;
