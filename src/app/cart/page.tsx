import React from "react";
import CartProducts from "@/components/products/cartProducts";
import SectionHeader from "@/components/SectionHeader";
const CartPage = () => {
  
  return (
    <div className="container max-w-6xl mx-auto">
      <div className="my-10">


        <SectionHeader
        smallerHeading=""
        BiggerHeading="Shopping Cart"
        /> 
        </div>
          <CartProducts/> 
        
    </div>
  );
};

export default CartPage;
