"use client";

import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import { WebsiteContent2 } from "../WebsiteContnet2";
import { RiArrowDownDoubleFill } from "react-icons/ri";

interface HeaderText {
  topText1: string;
  topText2: string;
  mainText: string;
}

const headerText: HeaderText = {
  topText1: "Szczęśliwi i zakochani",
  topText2: "Rozpoczynamy wspólną drogę jako mąż i żona",
  mainText: "NASZE WESELE",
};

export default function Header() {
  return (
    <header className="relative w-full min-h-screen overflow-hidden">
      <Image
        src={WebsiteContent2.HeaderImg}
        alt="Header background with nature"
        className="object-cover w-full h-full filter brightness-50 -z-10"
        fill
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <div className="w-full px-4 md:w-2/3 flex flex-col items-center justify-center text-center py-16 md:py-20">
          <div className="mb-6 md:mb-20">
            <p className="text-lg md:text-xl font-comfortaa mb-4 tracking-wider">
              {headerText.topText1}
            </p>
            <p className="text-sm md:text-base font-comfortaa mb-6 md:mb-20 tracking-wider">
              {headerText.topText2}
            </p>
            <p className="text-2xl md:text-4xl font-comfortaa tracking-wider">
              {headerText.mainText}
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 my-8">
            <Image
              src="/page2/Group73.svg"
              alt="Left Icon"
              width={45}
              height={40}
              className="text-white hidden md:block"
              priority
            />
            <h2 className="text-4xl md:text-8xl font-allura tracking-widest">
              {WebsiteContent2.mainHeading}
            </h2>
            <Image
              src="/page2/Group74.svg"
              alt="Right Icon"
              width={45}
              height={40}
              className="text-white hidden md:block"
              priority
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-2 mt-10 md:mt-6 mb-10 md:mb-20">
            <div className="flex items-center justify-center gap-3">
              <FaCircle className="text-TextW text-[0.5em] mb-1" />
              <p className="text-2xl md:text-3xl leading-none font-comfortaa tracking-wider">
                {WebsiteContent2.subHeading}
              </p>
              <FaCircle className="text-TextW text-[0.5em] mb-1" />
            </div>
            <RiArrowDownDoubleFill
              className="text-TextW text-4xl mt-10 animate-float" // Add the icon and animation
            />
          </div>
        </div>
      </div>
    </header>
  );
}
