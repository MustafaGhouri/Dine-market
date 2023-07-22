"use client";

import React, { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaMinus, FaPlus } from "react-icons/fa";
import { urlForImage } from "../../../sanity/lib/image";
import Image from "next/image";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import getStipePromise from "@/lib/stripe";

const CartProducts = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [Loading, setLoading] = useState(false);

  const fetchCart = async () => {
    try {
      let res: any = await fetch(`/api/cart`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      if (data.res == "success") {
        setCart(data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const cartProductQty = (type: string, productid: string, index: number) => {
    const updatedCart = [...cart];
    const currQty = { ...updatedCart[index] };
    if (type === "increament") {
      if (currQty.qty < 20) {
        currQty.qty = currQty.qty + 1;
      }
    } else if (type === "decreament") {
      if (currQty.qty > 1) {
        currQty.qty = currQty.qty - 1;
      }
    }

    updatedCart[index] = currQty;
    setCart(updatedCart);
  };

  const removeItem = async (id: string) => {
    setIsLoading(true);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`/api/cart?id=${id}`, {
            method: "DELETE",
          });
          toast.success("Item removed successfully", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          let data = cart.filter((res) => res.id !== id);
          setCart(data);
        } catch (err) {
          toast.warning("Somthing went wrong", {
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
      }
    });
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  useEffect(() => {
    let sum = 0;
    let totalAmount = 0;

    cart.forEach((item) => {
      sum += item.qty;
      totalAmount += parseFloat(item.price) * item.qty;
    });

    setTotalAmount(totalAmount);
    setTotalQuantity(sum);
  }, [cart]);

  const handleCheckOut = async () => {
    const stripe = await getStipePromise();
    setIsLoading(true)
    try {
      const response = await fetch("api/stripe-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        cache: "no-cache",
        body: JSON.stringify({ cart }),
      });

      const data = await response.json();
      if (data.session) {
        stripe?.redirectToCheckout({ sessionId: data.session.id });
      }
     
    } catch (error) {}
    setIsLoading(false)
  };

  return (
    <>
      <div>
        {cart.length > 0 ? (
          <div className="grid grid-cols-3 gap-3 mt-5">
            <div className="col-span-2">
              {cart?.map((selectProduct: any, i: number) => {
                return (
                  <div
                    key={selectProduct?.id}
                    className="item-card p-5 grid grid-cols-3"
                  >
                    <div className="col-span-1">
                      <Image
                        alt="product-Image"
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

                          <button
                            onClick={() => removeItem(selectProduct?.id)}
                            className=" text-gray-900 text-2xl"
                          >
                            <RiDeleteBinLine />
                          </button>
                        </div>

                        <Link href={`/porducts/${selectProduct?.category.title}`} className="text-gray-600 font-semibold capitalize mt-2">
                          {selectProduct?.category.title}
                        </Link>
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
                          <p className="w-8 pt-2 text-center">{cart[i].qty}</p>
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
                );
              })}
            </div>
            <div className="col-span-1">
              <div className="w-full bg-blue-100 rounded-sm shadow-md p-4">
                <h2 className="text-gray-900 text-center font-semibold text-2xl">
                  Shopping Cart
                </h2>
                <table className="w-full mt-10 text-gray-900 ">
                  <tr className="pt-4">
                    <td className="text-left mt-4">Quantity</td>
                    <td className="text-right">{totalQuantity} Product</td>
                  </tr>
                  <tr className="pt-4">
                    <td className="text-left mt-4">Sub Total</td>
                    <td className="text-right">{totalAmount} </td>
                  </tr>
                </table>
                <button
                  type="submit"
                  disabled={Loading}
                  onClick={handleCheckOut}
                  className="bg-gray-950 rounded-md text-white flex gap-2 px-5 w-full py-3 justify-center rounded-0 h-fit mt-5 text-center"
                >
                  Checkout
                  {Loading ? (
                    <FontAwesomeIcon
                      className="animate-spin"
                      icon={faSpinner}
                    />
                  ) : (
                    ""
                  )}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-100">
            <h1 className="text-gray-950 text-lg text-center">
              Your Cart is Empty
            </h1>
            <p className="text-gray-950  text-center">
              Shop now,
              <Link className="text-blue-700" href="/products">
                let&apos;s go
              </Link>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartProducts;
