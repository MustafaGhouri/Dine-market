'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import cartImg from "../assets/icons/shopping-cart.png";
import StoreCartFunction from "./storecartfunction";

 const CartButton = () => {
  // add to cart

  const { cartCount, loading, addToCart, cart } = StoreCartFunction();
  
 

  // add to cart
  return (
    <>
      <Link
        href="/cart"
        className="rounded-full relative flex bg-gray-700 hover:bg-gray-800 hover:shadow-lg transition-shadow duration-75 p-3"
      >
        <p className="w-7 h-7 absolute top-0 right-0 rounded-full bg-red-500 text-white ">
          {cartCount}
        </p>
        <Image src={cartImg} alt="cart" />
      </Link>
    </>
  );
};

export default CartButton;
