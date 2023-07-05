"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import BrandLogo from "../../assets/Logo.webp";
import cartImg from "../../assets/icons/shopping-cart.png";
import Link from "next/link";
import { navigation } from "@/default/navigation";

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
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

  return (
    <>
      <nav className={isSticky ? "stickyNav " : "bg-white naxse top-0"}>
        <div className="container py-4 mx-auto w-full px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Image
                  src={BrandLogo}
                  alt="Picture of the author"
                  className=" w-100 h-100"
                  width={140}
                  placeholder="blur"
                />
              </div>
              <div className="hidden w-full  ml-6 sm:block">
                <div className="flex w-full justify-between flex-row">
                  <div className="flex mx-auto align-middle columns-2 justify-center col-span-2 space-x-4">
                    {navigation.map((res) => {
                      return (
                        <Link
                          className="text-gray-800 hover:bg-gray-100   rounded-md px-3 pt-3 pb-1 text-12px font-medium"
                          href={res.path}
                        >
                          {res.label}{" "}
                        </Link>
                      );
                    })}
                    <input
                      type="search"
                      placeholder="what you looking for"
                      className="border-2 focus:outline-none focus:text-gray-900 px-2 rounded-md"
                    />
                  </div>
                  <div className="col-span-1">
                    <Link
                      href=""
                      className="rounded-full flex bg-gray-700 hover:bg-gray-800 hover:shadow-lg transition-shadow duration-75 p-3"
                    >
                      <Image src={cartImg} alt="cart" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((res) => {
              return (
                <Link
                  className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                  href={res.path}
                >
                  {res.label}{" "}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
