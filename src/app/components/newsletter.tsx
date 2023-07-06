"use client";
import React, { useState } from "react";
import TextOverlay from "./textOverlay";
import { ToastContainer, toast } from "react-toastify";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-toastify/dist/ReactToastify.css";

const NewsLetter = () => {
  const [Loading, setLoading] = useState(false);

  const InsertHanle = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast("Cheers, Subscribed Success! 🎉✔", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setLoading(false);
      e.target.reset();
    }, 1000);
  };
  return (
    <div className="container max-w-6xl mx-auto py-36 lg:px-0 px-5 relative overflow-x-hidden w-full">
      <div className="flex flex-col text-gray-900 gap-7 text-center justify-center relative">
        <div className=" mx-auto w-fit ">
          <TextOverlay
            className={"w-full top-10 text-gray-100 text-center mx-auto"}
            fontSize={'text-6xl lg:text-8xl'}
            text="NewsLetter"
          />
        </div>
        <h3 className=" text-center font-bold text-3xl">
          Subscribe Our Newsletter
        </h3>
        <p className="text-center">
          Get the latest information and promo offers directly
        </p>
        <form
          onSubmit={InsertHanle}
          className="mx-auto p-1 rounded-md max-w-xl w-full  flex flex-row align-middle  lg:justify-center align-items-center lg:flex-row"
          style={{ border: "1px solid black" }}
        >
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className=" w-full  h-fit border-solid  border-1 border-black  focus:outline-none bg-white/5 px-3.5 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            disabled={Loading}
            className="bg-gray-950 rounded-md text-white flex gap-2 px-5 py-3 rounded-0 h-fit w-fit"
          >
            Subscribe
            {Loading ? (
              <FontAwesomeIcon className="animate-spin" icon={faSpinner} />
            ) : (
              ""
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
