"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Products } from "@/default/defaults";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { urlForImage } from "../../../sanity/lib/image";
import { RootState } from "@/store/store";
const CartPage = () => {
 
  const [size, setSize] = useState("");
  const [cart, setCart] = useState<any[]>([]);

  const fetchCart = async () => {
    try {
      let res: any = await fetch(`/api/cart`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data.res);

      if (data.res == "success") {
        setCart(data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const [quantity, setQuantity] = useState([{ pId: "", qty: 0 }]);

  const cartProductQty = (type: string, productid: string, index: number) => {
   console.log(quantity);
   
    setQuantity(prevQuantity => {
      const updatedQuantity = [...prevQuantity];

      const currQty = updatedQuantity[index];
  
      if (type === "increament") {
        currQty.qty = currQty.qty + 1;
      } else if (type === "decreament") {
        currQty.qty = currQty.qty - 1;
      }
  
      return updatedQuantity;
    });
  };
  
  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className="container max-w-6xl mx-auto">
      <h2 className="text-gray-900 font-semibold text-2xl">Shopping Cart</h2>
      <div className="grid grid-cols-3 gap-3 mt-5">
        <div className="col-span-2">
          {cart?.map((selectProduct, i: number) => (
            <div key={selectProduct?.id} className="item-card grid grid-cols-3">
              <div className="col-span-1">
                <Image
                  alt="product Image"
                  className="rounded-md w-44 h-56 object-contain mx-auto bg-gray-200 "
                  src={urlForImage(selectProduct.image).url()}
                  width={500}
                  height={500}
                />
              </div>
              <div className="col-span-2 py-2 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between">
                    <h2 className="text-gray-950 text-xl font-light">
                      {selectProduct?.title}
                    </h2>

                    <button className=" text-gray-900 text-2xl">
                      <RiDeleteBinLine />
                    </button>
                  </div>

                  <p className="text-gray-600 font-semibold capitalize mt-2">
                    {selectProduct?.category.title}
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
                      onClick={() =>
                        cartProductQty("decreament", selectProduct.id, i)
                      }
                    >
                      <FaMinus />
                    </button>
                    <p className="w-8 pt-2 text-center">{}</p>
                    <button
                      className="w-8 h-8 rounded-md pt-2 bg-gray-400 flex align-items-center text-white justify-center"
                      onClick={() =>
                        cartProductQty("increament", selectProduct.id, i)
                      }
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
