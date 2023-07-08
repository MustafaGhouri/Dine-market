"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { BsCart3 } from "react-icons/bs";
import StoreCartFunction from "./storecartfunction";

const Addtocart = ({ stripeId = "", size = "", quantity = 1, price = "" }) => {
  const { addToCart, loading ,cartCount } = StoreCartFunction();
  return (
    <div>
      {" "}
      <button
        onClick={() => addToCart(stripeId, size, quantity, price)}
        disabled={loading}
        className="bg-gray-950 rounded-md text-white flex gap-2 px-5 py-3 rounded-0 h-fit w-fit"
      >
        <BsCart3 />
        Add to Cart {cartCount}
        {loading ? (
          <FontAwesomeIcon className="animate-spin" icon={faSpinner} />
        ) : (
          ""
        )}
      </button>
    </div>
  );
};

export default Addtocart;
