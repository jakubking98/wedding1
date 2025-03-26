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
    <div className="w-full relative flex justify-center items-center bg-white py-16">
      <div className="absolute -top-1 w-full text-LitePink rotate-180">
        <LineInHeader />
      </div>
      <div className="absolute bottom-0 w-full text-LitePink">
        <LineInHeader />
      </div>
      <div className="w-full max-w-[1050px] bg-white z-10 text-center p-10 px-16 rounded-3xl shadow-lg">
        <h1 className="text-4xl font-bold text-OrcheidDark mb-10 tracking-wide font-comfortaa">
          Bierzemy Ślub
        </h1>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold font-comfortaa text-gray-700 mb-6 ">
            Z Bożą łaską i błogosławieństwem
          </h2>
          <p className="text-gray-600 mb-8 font-comfortaa">
            Zamiarem naszym jest zawrzeć związek małżeński, który za łaską Bożą
            odbędzie się:
          </p>

          <div className="text-3xl font-bold text-OrcheidDark mb-5 font-comfortaa">
            {WebsiteContent2.subHeading}
          </div>
          <div className="mb-8 max-w-fit mx-auto">
            <CountdownTimer2 weddingDate={weddingDate} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mx-auto">
          <div className="border-t border-gray-200 pt-8 md:md:w-full relative overflow-hidden rounded-lg min-h-[550px] md:min-h-[600px]">
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
            <Image
              src="/page2/ceremony.png"
              alt="Orchid Gradient Background"
              fill
              className="object-cover absolute inset-0 z-0"
              priority
            />
            <div className="relative z-20 p-8 flex flex-col items-center justify-center h-full">
              <div className="mb-4">
                <Image
                  src="/page2/wedding-ring.png"
                  alt="Wedding Ring Icon"
                  width={70}
                  height={70}
                />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3 font-comfortaa">
                {WebsiteContent2.weddingCeremony.title}
              </h3>
              <p className="text-white mb-6 text-lg font-comfortaa">
                {WebsiteContent2.weddingCeremony.timeRange}
              </p>
              <div className="text-white flex flex-col items-center text-lg">
                <p className="mb-2 font-comfortaa">
                  {WebsiteContent2.weddingCeremony.placeName}
                </p>
                <p className="mb-4 font-comfortaa">
                  {WebsiteContent2.weddingCeremony.placeAddress}
                </p>
                <a
                  href={WebsiteContent2.weddingCeremony.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 bg-white text-OrcheidDark rounded-full px-6 py-3 flex items-center gap-2 hover:bg-gray-100 transition-colors font-comfortaa"
                >
                  <Image
                    src="/page2/map-pin.svg"
                    alt="Map Pin Icon"
                    width={30}
                    height={30}
                    className="text-OrcheidDark"
                  />
                  Pokaż mapę
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 md:w-full relative overflow-hidden rounded-lg min-h-[550px] md:min-h-[600px]">
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
            <Image
              src="/page2/wedding.png"
              alt="Orchid Gradient Background"
              fill
              className="object-cover absolute inset-0 z-0"
              priority
            />
            <div className="relative z-20 p-8 flex flex-col items-center justify-center h-full">
              <div className="mb-4">
                <Image
                  src="/page2/dinner-table.png"
                  alt="Dinner Table Icon"
                  width={70}
                  height={70}
                />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3 font-comfortaa">
                {WebsiteContent2.weddingReception.title}
              </h3>
              <p className="text-white mb-6 text-lg font-comfortaa">
                {WebsiteContent2.weddingReception.timeRange}
              </p>
              <div className="text-white flex flex-col items-center text-lg">
                <p className="mb-2 font-comfortaa">
                  {WebsiteContent2.weddingReception.placeName}
                </p>
                <p className="mb-4 font-comfortaa">
                  {WebsiteContent2.weddingReception.placeAddress}
                </p>
                <a
                  href={WebsiteContent2.weddingReception.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 bg-white text-OrcheidDark rounded-full px-6 py-3 flex items-center gap-2 hover:bg-gray-100 transition-colors font-comfortaa"
                >
                  <Image
                    src="/page2/map-pin.svg"
                    alt="Map Pin Icon"
                    width={30}
                    height={30}
                    className="text-OrcheidDark"
                  />
                  Pokaż mapę
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <Map
            ceremonyAddress={WebsiteContent2.weddingCeremony.placeAddress}
            receptionAddress={WebsiteContent2.weddingReception.placeAddress}
            ceremonyName={WebsiteContent2.weddingCeremony.placeName}
            receptionName={WebsiteContent2.weddingReception.placeName}
          />
        </div>

        <div className="mt-16 text-gray-600 italic font-comfortaa">
          <p>Będzie nam niezmiernie miło, jeśli zechcą Państwo</p>
          <p>
            uczestniczyć w tym wyjątkowym dla nas dniu i udzielić nam swego
            błogosławieństwa.
          </p>
        </div>
      </div>
    </div>
  );
}
