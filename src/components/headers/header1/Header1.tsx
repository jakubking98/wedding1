"use client";

import Image from "next/image";
import LineInHeader from "./LineInHeader";
import { WebsiteContent } from "@/components/WebsiteContent";

export default function Header1() {
  return (
    <header className="relative w-[100vw] h-[100vh] overflow-hidden ">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#e9d7d2] from-10% via-transparent via-30% to-[#9c584b] to-100%"></div>
      <Image
        src={WebsiteContent.HeaderImg}
        alt="fotoHeader"
        className="object-cover w-full h-full filter brightness-50 -z-10"
        fill
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-TextW">
        <div className="w-full  md:w-2/3 h-[600px] flex flex-col items-center justify-end z-10 text-center pb-20">
          <h2 className="text-4xl md:text-6xl mb-4 font-marcellus tracking-widest">
            {WebsiteContent.mainHeading}
          </h2>
          <p className="text-3xl font-marcellus mb-4 tracking-wider">
            {WebsiteContent.subHeading}
          </p>
          <p className="text-2xl font-baskervville mb-8 tracking-wider">
            {WebsiteContent.descriptionHeader}
          </p>
          <button className="bg-Pastel text-TextW px-8 py-3 rounded-full font-sora tracking-wider hover:bg-LitePink hover:text-TextN  transition-colors duration-300">
            {WebsiteContent.buttonText}
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 w-full text-white">
        <LineInHeader />
      </div>
    </header>
  );
}
