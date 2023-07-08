"use client";
import React from "react";
import { FooterData } from "../default/defaults";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="container max-w-6xl mx-auto text-gray-900">
        <div className="grid grid-cols-1   lg:grid-cols-5  p-10  gap-4">

          <div className="flex flex-col col-span-1 lg:col-span-2 gap-9">
            <Image
              src={FooterData.logo}
              alt={FooterData.siteName}
              width={200}
              height={200}
            />

            <p>{FooterData.detail}</p>
            <div className="icon-container">
              {FooterData.social.map((res: any) => (
                <Link href={res.link} target="_blank" key={res.id}>{res.icon}</Link>
              ))}
            </div>
          </div>

          <div className="footer-links  col-span-1">
            <h3>Company</h3>
            <ul>
              {FooterData.company.map((res) => (
                <li key={res.id} className="mb-3">{res.label}</li>
              ))}
            </ul>
          </div>
          <div className="footer-links  col-span-1">
            <h3>Support</h3>
            <ul>
              {FooterData.support.map((res) => (
                <li  key={res.id} className="mb-3">{res.label}</li>
              ))}
            </ul>
          </div>
          <div className="footer-links  col-span-1">
            <h3>Contact</h3>
            <ul>
              {FooterData.contact.map((res) => (
                <li  key={res.id} className="mb-3">{res.label}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <FooterLabel/>
    </footer>
  );
};

const FooterLabel = () =>{
    return(
        <div className="border-t border py-8 border-t-black border-solid">
        <div className="container max-w-6xl mx-auto text-gray-900">
            <div className="grid grid-cols-3 justify-between">
                <div className="text-start">
                    <p className="text-gray-600 font-md">Copyright © {new Date().getFullYear()} Dine Market</p>
                </div>
                <div className="text-center">
                    <p className="text-gray-600 font-md">Design by. <Link className="font-lg text-gray-950 font-bold  " href='https://nexu.netlify.app/' target="_blank"> Nexu Solutions</Link> </p>
                </div>
                <div className="text-end">
                <p className="text-gray-600 font-md">Code by. <Link className="font-lg text-gray-950 font-bold  " href='https://github.com/MustafaGhouri' target="_blank">MustafaGhouri on GitHub</Link> </p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Footer;
