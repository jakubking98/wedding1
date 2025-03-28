import React from "react";
import Image from "next/image";
import LineInHeader from "@/components/website1/Header/LineInHeader";
import { WebsiteContent2 } from "../WebsiteContnet2";

export default function AboutUs() {
  return (
    <div className="relative w-full h-auto bg-white">
      <div className="absolute top-0 w-full text-ColorWeb1 rotate-180">
        <LineInHeader />
      </div>
      <div className="absolute bottom-0 w-full text-ColorWeb1">
        <LineInHeader />
      </div>
      <div className="relative top-[-60px] left-0 w-full flex justify-center ">
        <div className="w-full md:w-[1050px] rounded-3xl px-4 md:px-6 py-10 md:py-16 bg-white text-center font-sans md:shadow-lg">
          <h1 className="text-2xl md:text-4xl font-bold text-ColorWeb2 mb-6 md:mb-10 tracking-wide font-comfortaa">
            {WebsiteContent2.aboutUs.title}
          </h1>

          <div className="mb-6 md:mb-10 max-w-[800px] mx-auto">
            <div className="space-y-2 md:space-y-4 text-ColorWeb3">
              <p className="text-lg md:text-xl font-comfortaa">
                {WebsiteContent2.aboutUs.paragraph1}
              </p>
              <p className="text-lg md:text-xl font-comfortaa">
                {WebsiteContent2.aboutUs.paragraph2}
              </p>
            </div>
          </div>

          <div className=" flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-10 md:mb-10">
            {/* Groom Section */}
            <div className="flex flex-col items-center md:block">
              <div className="relative w-[200px] h-[200px] md:w-[250px] md:h-[250px] text-center">
                <div className=" w-full h-full">
                  <Image
                    src="/page2/Group42.svg"
                    alt="Decorative SVG"
                    fill
                    className="object-contain z-10 text-ColorWeb1"
                    priority
                  />
                  <div className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full overflow-hidden">
                    <Image
                      src="/page2/pan.png"
                      alt="Pan Młody"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
              <div className=" mt-4 md:mt-8 bg-white rounded-lg p-2">
                <h2 className="text-4xl md:text-6xl font-medium text-ColorWeb2 font-allura">
                  {WebsiteContent2.aboutUs.groomName}
                </h2>
                <p className="text-xs md:text-sm uppercase tracking-wider text-ColorWeb4 mt-1 font-comfortaa">
                  {WebsiteContent2.aboutUs.groomTitle}
                </p>
                <p className="text-xs md:text-sm uppercase tracking-wider text-ColorWeb3 font-comfortaa">
                  {WebsiteContent2.aboutUs.groomFamily}
                </p>
              </div>
            </div>

            {/* Bride Section */}
            <div className="flex flex-col items-center md:block">
              <div className="relative w-[200px] h-[200px] md:w-[250px] md:h-[250px] p-2 text-center">
                <div className=" w-full h-full">
                  <Image
                    src="/page2/Group42.svg"
                    alt="Decorative SVG"
                    fill
                    className="object-contain z-10 text-ColorWeb1"
                    priority
                  />
                  <div className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full overflow-hidden">
                    <Image
                      src="/page2/pani.png"
                      alt="Pani Młoda"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4 md:mt-8 bg-white rounded-lg p-2 ">
                <h2 className="text-4xl md:text-6xl font-medium text-ColorWeb2 font-allura">
                  {WebsiteContent2.aboutUs.brideName}
                </h2>
                <p className="text-xs md:text-sm uppercase tracking-wider text-ColorWeb4 mt-1 font-comfortaa">
                  {WebsiteContent2.aboutUs.brideTitle}
                </p>
                <p className="text-xs md:text-sm uppercase tracking-wider text-ColorWeb3 font-comfortaa">
                  {WebsiteContent2.aboutUs.brideFamily}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-10 md:pt-10 md:px-10 border-t-2 border-ColorWeb1">
            <h3 className="text-2xl md:text-3xl font-semibold text-ColorWeb2 mb-6 md:mb-8 font-comfortaa">
              {WebsiteContent2.aboutUs.descriptionHeader}
            </h3>
            <p className="text-base md:text-lg text-ColorWeb3 font-comfortaa">
              {WebsiteContent2.aboutUs.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
