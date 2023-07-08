"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Products } from "@/default/defaults";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartPage = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    let sessionCarts: any = sessionStorage.getItem("cart");
    let parsedCart = JSON.parse(sessionCarts);
    if (parsedCart) {
      setCart(parsedCart);
    }
  }, []);

  const removeCart = (id: any) => {
    alert(id);
  };
 
  
  return (
    <div className="container max-w-6xl mx-auto">
      <h2 className="text-gray-900 font-semibold text-2xl">Shopping Cart</h2>
      <div className="grid grid-cols-3 gap-3 mt-5">
        <div className="col-span-2">
          {cart.map((item) => {
            let selectProduct = Products.find(
              (res) => res.stripeId == item.stripeId
            );
            return (
              <div
                key={selectProduct?.id}
                className="item-card grid grid-cols-3"
              >
                <div className="col-span-1">
                  <Image
                    alt="product Image"
                    className="rounded-md w-44 h-56 object-contain mx-auto bg-gray-200 "
                    src={selectProduct?.images[0].image}
                    width={500}
                    height={500}
                  />
                </div>
                <div className="col-span-2 py-2 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between">
                      <h2 className="text-gray-950 text-xl font-light">
                        {selectProduct?.name}
                      </h2>

                      <button
                        className=" text-gray-900 text-2xl"
                        onClick={() => removeCart(item.stripeId)}
                      >
                        <RiDeleteBinLine />
                      </button>
                    </div>

                    <p className="text-gray-600 font-semibold capitalize mt-2">
                      {selectProduct?.category}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-950 font-bold mt-">
                      Delivery Estimation
                    </p>
                    <p className="text-blue-800 font-medium mt-0 mb-">
                      5 Working Days
                    </p>
                  </div>
                  <div className="flex text-gray-950 justify-between">
                    <p className="font-semibold text-xl">
                      {selectProduct?.price}
                    </p>
                    <div className="quantity text-gray-950 flex gap-2">
                      <button
                        className="w-8 h-8 rounded-md pt-2 bg-gray-400 flex align-items-center text-white justify-center"
                        onClick={() => {
                          quantity > 1
                            ? setQuantity(quantity - 1)
                            : setQuantity(quantity);
                        }}
                      >
                        <FaMinus />
                      </button>
                      <p className="w-8 pt-2 text-center">{quantity}</p>
                      <button
                        className="w-8 h-8 rounded-md pt-2 bg-gray-400 flex align-items-center text-white justify-center"
                        onClick={() => {
                          quantity < 10
                            ? setQuantity(quantity + 1)
                            : setQuantity(quantity);
                        }}
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-span-1">
          <div className="w-full bg-blue-100 rounded-sm shadow-md p-4">
            <h2 className="text-gray-900 text-center font-semibold text-2xl">
              Shopping Cart
            </h2>
            <table>
                <tr>
                    <td>Quantity</td>
                    <td> </td>
                </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
