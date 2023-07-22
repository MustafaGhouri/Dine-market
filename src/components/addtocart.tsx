"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { BsCart3 } from "react-icons/bs"; 
import { useDispatch } from "react-redux";
import { cartActions } from "@/store/slice/cartSlice";
import { toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";

const Addtocart = ({ productid = "", size = "", quantity = 1 }) => { 
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();


  const addItem = () => {
    toast.dismiss();
    if(size == ''){
     return toast.warning("Please select product size", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        
      });
    }
    setloading(true)
    dispatch(cartActions.addToCart({ product:productid, quantity: quantity,size:size}));
    toast.success("Cart Updated! 🛒✔", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      
    });
    setloading(false)
  };
  return (
    <div>
      {" "}
      <button
        // onClick={() => addToCart(stripeId, size, quantity, price)}
        onClick={() => addItem()}
        disabled={loading}
        className="bg-gray-950 rounded-md text-white flex gap-2 px-5 py-3 rounded-0 h-fit w-fit"
      >
        <BsCart3 />
        Add to Cart
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
