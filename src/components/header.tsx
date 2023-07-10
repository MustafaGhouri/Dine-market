"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import BrandLogo from "../assets/Logo.webp";
import Link from "next/link";
import { navigation } from "@/default/navigation";
import { FaSearch } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import cartImg from "../assets/icons/shopping-cart.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const cartValue = useSelector((state: RootState) => state.cart.totalQuantity);
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const shouldBeSticky = scrollPosition > 0;

    setIsSticky(shouldBeSticky);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    } else {
      setMobileMenuOpen(true);
    }
  };

  return (
    <>
      <nav
        className={
          isSticky
            ? "stickyNav lg:flex hidden"
            : "bg-white lg:flex hidden naxse top-0"
        }
      >
        <div className="container py-4 mx-auto w-full px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Link href={"/"}>
                  <Image
                    src={BrandLogo}
                    alt="Picture of the author"
                    className=" w-100 h-100"
                    width={140}
                    placeholder="blur"
                  />
                </Link>
              </div>
              <div className="hidden w-full  ml-6 sm:block">
                <div className="grid w-full grid-cols-12 justify-evenly ">
                  <div className="col-span-7">
                    <div className="flex mx-auto align-middle  ">
                      {navigation.map((res, i) => {
                        return (
                          <Link
                            className="text-gray-800 hover:bg-gray-100   rounded-md px-3 pt-3 pb-1 text-12px font-medium"
                            href={res.path}
                            key={i}
                          >
                            {res.label}{" "}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-span-5">
                    <div className="flex">
                      <form
                        className="mx-auto p-1 rounded-md max-w-xs w-full flex flex-col align-middle  lg:justify-center align-items-center lg:flex-row"
                        style={{ border: "1px solid black" }}
                        action={"/products"}
                      >
                        <input
                          id="searchbar"
                          name="q"
                          type="text"
                          required
                          className=" w-full m-0 h-fit border-solid  border-1 border-black  focus:outline-none bg-white/5 px-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                          placeholder="Search Product."
                        />
                        <button
                          type="submit"
                          className="bg-gray-950 rounded-md text-white flex gap-2 px-5 py-3 rounded-0 h-fit w-fit"
                        >
                          <FaSearch></FaSearch>
                        </button>
                      </form>
                      <div className=" ">
                        <Link
                          href="/cart"
                          className="rounded-full relative flex bg-gray-700 hover:bg-gray-800 hover:shadow-lg transition-shadow duration-75 p-3"
                        >
                          <span className="absolute right-1 top-0 rounded-full bg-red-500 h-5 w-5 text-white text-sx text-center">
                            {cartValue}
                          </span>
                          <Image src={cartImg} alt="cart" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className={isSticky ? "stickyNav lg:hidden" : "lg:hidden"}>
        <div
          className={
            mobileMenuOpen
              ? "bg-white fixed h-fit inset-y-0 px-6 py-6 right-0 shadow-lg w-full z-10"
              : " w-full px-6 py-6   "
          }
        >
          <div className="flex items-center justify-between">
            <Link href={"/"}>
              <Image
                src={BrandLogo}
                alt="Picture of the author"
                className=" w-100 h-100"
                width={140}
                placeholder="blur"
              />
            </Link>
            <button
              type="button"
              onClick={() => handleMenuToggle()}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              {mobileMenuOpen ? <HiXMark /> : <GiHamburgerMenu />}
            </button>
          </div>

          <div className={mobileMenuOpen ? "mt-6 flow-root" : "hidden"}>
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((res, i) => {
                  return (
                    <Link
                      onClick={() => {
                        setMobileMenuOpen(false);
                      }}
                      className="text-gray-800 hover:bg-gray-100 w-full block rounded-md px-3 pt-3 pb-1 text-12px font-medium"
                      href={res.path}
                      key={i}
                    >
                      {res.label}{" "}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
