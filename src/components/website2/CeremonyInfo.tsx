"use client";
import React from "react";
import { WebsiteContent2 } from "./WebsiteContnet2";
import CountdownTimer2 from "./CountdownTimer2";
import Image from "next/image";
import dynamic from "next/dynamic";
import LineInHeader from "../website1/Header/LineInHeader";

const Map = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
});

export default function CeremonyInfo() {
  console.log("CeremonyInfo component rendered");
  const weddingDate = new Date(
    new Date(
      WebsiteContent2.weddingCeremony.date +
        " " +
        WebsiteContent2.weddingCeremony.time
    ).toLocaleString("en-US", {
      timeZone: WebsiteContent2.weddingCeremony.timeZone,
    })
  );

  return (
    <div className="w-full relative flex justify-center items-center  bg-white py-10 md:py-16">
      <div className="absolute -top-1 w-full text-ColorWeb1 rotate-180">
        <LineInHeader />
      </div>
      <div className="absolute bottom-0 w-full text-ColorWeb1">
        <LineInHeader />
      </div>
      <div className="w-full max-w-[1050px] md:bg-white z-10 text-center p-6 md:p-10 px-6 md:px-16 md:rounded-3xl md:shadow-lg">
        <h1 className="text-2xl md:text-4xl font-bold text-ColorWeb2 mb-6 md:mb-10 tracking-wide font-comfortaa">
          {WebsiteContent2.CeremonyText.mainText}
        </h1>
        <div className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-3xl font-semibold font-comfortaa text-ColorWeb3 mb-4 md:mb-6 ">
            {WebsiteContent2.CeremonyText.topText1}
          </h2>
          <p className="text-ColorWeb4 mb-6 md:mb-8 font-comfortaa">
            {WebsiteContent2.CeremonyText.topText2}
          </p>
          <div className="text-2xl md:text-3xl font-bold text-ColorWeb2 mb-4 md:mb-5 font-comfortaa">
            {WebsiteContent2.subHeading}
          </div>
          <div className="mb-6 md:mb-8 max-w-fit mx-auto">
            <CountdownTimer2 weddingDate={weddingDate} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mx-auto">
          <div className="border-t border-gray-200 pt-6 md:pt-8 md:md:w-full relative overflow-hidden rounded-lg min-h-[450px] md:min-h-[600px]">
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
            <Image
              src="/page2/ceremony.png"
              alt="Orchid Gradient Background"
              fill
              className="object-cover absolute inset-0 z-0"
              priority
            />
            <div className="relative z-20 p-6 md:p-8 flex flex-col items-center justify-center h-full">
              <div className="mb-3 md:mb-4">
                <Image
                  src="/page2/wedding-ring.png"
                  alt="Wedding Ring Icon"
                  width={60}
                  height={60}
                />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 md:mb-3 font-comfortaa">
                {WebsiteContent2.weddingCeremony.title}
              </h3>
              <p className="text-white mb-4 md:mb-6 text-base md:text-lg font-comfortaa">
                {WebsiteContent2.weddingCeremony.timeRange}
              </p>
              <div className="text-white flex flex-col items-center text-base md:text-lg">
                <p className="mb-1 md:mb-2 font-comfortaa">
                  {WebsiteContent2.weddingCeremony.placeName}
                </p>
                <p className="mb-3 md:mb-4 font-comfortaa">
                  {WebsiteContent2.weddingCeremony.placeAddress}
                </p>
                <a
                  href={WebsiteContent2.weddingCeremony.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 md:mt-4 bg-white text-ColorWeb2 rounded-full px-4 md:px-6 py-2 md:py-3 flex items-center gap-2 hover:bg-gray-100 transition-colors font-comfortaa" // Reduced padding on mobile
                >
                  <Image
                    src="/page2/map-pin.svg"
                    alt="Map Pin Icon"
                    width={25}
                    height={25}
                    className="text-ColorWeb2"
                  />
                  Pokaż mapę
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-6 md:pt-8 md:w-full relative overflow-hidden rounded-lg min-h-[450px] md:min-h-[600px]">
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
            <Image
              src="/page2/wedding.png"
              alt="Orchid Gradient Background"
              fill
              className="object-cover absolute inset-0 z-0"
              priority
            />
            <div className="relative z-20 p-6 md:p-8 flex flex-col items-center justify-center h-full">
              <div className="mb-3 md:mb-4">
                <Image
                  src="/page2/dinner-table.png"
                  alt="Dinner Table Icon"
                  width={60}
                  height={60}
                />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 md:mb-3 font-comfortaa">
                {WebsiteContent2.weddingReception.title}
              </h3>
              <p className="text-white mb-4 md:mb-6 text-base md:text-lg font-comfortaa">
                {WebsiteContent2.weddingReception.timeRange}
              </p>
              <div className="text-white flex flex-col items-center text-base md:text-lg">
                <p className="mb-1 md:mb-2 font-comfortaa">
                  {WebsiteContent2.weddingReception.placeName}
                </p>
                <p className="mb-3 md:mb-4 font-comfortaa">
                  {WebsiteContent2.weddingReception.placeAddress}
                </p>
                <a
                  href={WebsiteContent2.weddingReception.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 md:mt-4 bg-white text-ColorWeb2 rounded-full px-4 md:px-6 py-2 md:py-3 flex items-center gap-2 hover:bg-gray-100 transition-colors font-comfortaa" // Reduced padding on mobile
                >
                  <Image
                    src="/page2/map-pin.svg"
                    alt="Map Pin Icon"
                    width={25}
                    height={25}
                    className="text-ColorWeb2"
                  />
                  Pokaż mapę
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-10 md:mt-16">
          <Map
            ceremonyAddress={WebsiteContent2.weddingCeremony.placeAddress}
            receptionAddress={WebsiteContent2.weddingReception.placeAddress}
            ceremonyName={WebsiteContent2.weddingCeremony.placeName}
            receptionName={WebsiteContent2.weddingReception.placeName}
          />
        </div>
        <div className=" mx-auto my-10 md:mt-16 max-w-[700px] text-ColorWeb3 font-comfortaa text-base md:text-lg">
          <p>{WebsiteContent2.CeremonyText.description}</p>
        </div>
        <button className="mt-6 md:mt-8 bg-OrcheidDark text-white rounded-full px-4 mx-auto md:px-6 py-2 md:py-3 flex items-center gap-2 hover:bg-ColorWeb3 transition-colors font-comfortaa">
          {WebsiteContent2.CeremonyText.buttonText}
        </button>
      </div>
    </div>
  );
}
