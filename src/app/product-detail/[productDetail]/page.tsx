"use client";
import React, { useEffect, useState } from "react"; 
import Image from "next/image";
import { FaPlus, FaMinus } from "react-icons/fa";
import TextOverlay from "@/components/textOverlay";
import "react-toastify/dist/ReactToastify.css";  
import { IProduct } from "@/interfaces";
import { client } from "@/lib/sanityClient";
import { urlForImage } from "../../../../sanity/lib/image";
import Addtocart from "@/components/addtocart";
 const ProductDetails =  (params: any) => {
  let slug = params.params.productDetail;
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [iproducts, setIProduct] = useState<IProduct>(); 
  

  const FetchProduct = async () => {
    await client
      .fetch(
        `*[_type == 'product' && slug.current == '${slug}']{
      title,
      _id,
      details,
      slug,
      price,
      stripeId,
      images[0],
      category->{
        title,
        slug
      },
      tags->{
        title,
      },
      sizes[]->{
        title
      }  
        }
    `
      )
      .then((res) => {
        setIProduct(res[0]); 
      }).catch((err)=>{

      });
  };

  useEffect(() => {
    FetchProduct();
  }, []);
  
  return (
    <>
    {iproducts ? (
    <div className="container max-w-6xl mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-12 ">
        <div className="col-span-1 md:col-span-7 h-[500px] bg-slate-200">
          <Image
           src={urlForImage(iproducts.images).url()}
            alt={iproducts.slug.current}
            className="w-full object-contain object-top h-full"
            width={1080}
            height={1080}
          />
        </div>
        <div className="col-span-1 md:col-span-5 p-5 text-gray-950">
          <div className="flex flex-col gap-1 mb-5">
            <h2 className="text-3xl">{iproducts?.title}</h2>
            <h3 className="text-xl text-gray-400  font-bold capitalize">
              {iproducts?.tags?.title}
            </h3>
          </div>

          <h4 className="text-gray-950 font-semibold mb-2 mt-8">SELECT SIZE</h4>
          <div className="product-size flex gap-2">
            {iproducts?.sizes.map((res, i) => (
              <label
                htmlFor={res.title}
                key={i}
                className="w-12 h-12 flex ali align-items-center pt-3 justify-center bg-cyan-50 rounded-md cursor-pointer  checked:bg-slate-600"
              >
                {res.title}
                <input
                  onChange={(e) => {
                    setSize(e.target.value);
                  }}
                  value={res.title}
                  id={res.title}
                  className="hidden"
                  name="size"
                  type="radio"
                />
              </label>
            ))}
          </div>
          <h4 className="text-gray-950 font-semibold mb-2 uppercase mt-10">
            SELECT Quantity
          </h4>
          <div className="quantity flex gap-2">
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

          <div className="grid grid-cols-2 mt-8  gap-2">
           <Addtocart productid={iproducts?._id || ''} quantity={quantity} size={size} />

            <h2 className="text-gray-950 font-bold text-3xl">
              $ {(iproducts?.price || 0) * quantity}
            </h2>
          </div>
        </div>
      </div>

      <div className=" p-10 relative text-gray-900 w-full mt-10">
        <div className="h-20 pb-0 p-3 relative border-solid border-gray-950 border-b">
          <TextOverlay
            className={"text-gray-50 leading-loose lg:-top-8 -top-8"}
            fontSize={"lg:text-8xl text-6xl"}
            text="Overview"
          />
          <h2 className="font-semibold text-xl">Product Information</h2>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 mt-7">
          <div className="col-span-1 uppercase text-base leading-tight tracking-widest text-gray-500 font-bold">
            Product Details
          </div>
          <div className="col-md-1 md:col-span-2 font-light tracking-widest">
            {iproducts?.details}
          </div>
        </div>
      </div>
    </div>
    ):('')}
    </>
  );
};

export default ProductDetails;
