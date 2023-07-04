import React from "react";
import SectionHeader from "./SectionHeader";
import event1 from "../../assets/components/event1.png";
import event2 from "../../assets/components/event2.png";
import event3 from "../../assets/components/event3.png";
import Image from "next/image";
const PromotionEvent = () => {
  return (
    <div className="py-10 mt-10 container max-w-6xl mx-auto">
      <SectionHeader
        smallerHeading="PROMOTIONS"
        BiggerHeading="Our Promotions Events"
      />
      <div className="grid mt-6 grid-rows-4 grid-cols-2 grid-flow-col gap-4">
        
        <div className="row-span-2  col-span-2 bg-[#d6d6d8]">
          <Image src={event1} alt="event 1" className="float-right" />
        </div>

        <div className="row-span-2 col-span-2 bg-[#212121] ">02</div>
        
        <div className="row-span-4  bg-[#efe1c7] col-span-2 relative overflow-hidden flex flex-col ">
          <div className="p-4 text-gray-900 flex-1">
                <p>Flex Sweatshirt</p>
                <p>$100.00<b>$75.00</b></p>
          </div>
          <Image src={event2} alt="event 3" className=" flex-2 bottom-0 " />
        </div>

        <div className="row-span-4  bg-[#d7d7d9] col-span-2 relative overflow-hidden flex flex-col ">
          <div className="p-4 text-gray-900 flex-1">
                <p>Flex Push Button Bomber</p>
                <p>$225.00 <b>$190.00</b></p>
          </div>
          <Image src={event3} alt="event 3" className=" flex-2 bottom-0 " />
        </div>

      </div>
    </div>
  );
};

export default PromotionEvent;
