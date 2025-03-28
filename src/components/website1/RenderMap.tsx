"use client";
import React from "react";
import dynamic from "next/dynamic";
import { WebsiteContent } from "./WebsiteContent";

const Map = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
});
export default function RenderMap() {
  return (
    <div className="bg-ColorWeb1 px-5 py-10 md:p-20 md:pt-0">
      <div className=" max-w-[1650px] mx-auto">
        <Map
          ceremonyAddress={WebsiteContent.weddingCeremony.placeAddress}
          receptionAddress={WebsiteContent.weddingReception.placeAddress}
          ceremonyName={WebsiteContent.weddingCeremony.placeName}
          receptionName={WebsiteContent.weddingReception.placeName}
        />
      </div>
    </div>
  );
}
