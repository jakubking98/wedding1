import React from "react";
import TreeSvg from "../sectionUs/TreeSvg";
import { WebsiteContent } from "../WebsiteContent";
import LineInHeader from "../headers/header1/LineInHeader";
import Image from "next/image";

export default function WeddingSection() {
  const { weddingLocation } = WebsiteContent;
  const weddingImage = "/weddingSection.jpg"; // Replace with your image path

  return (
    <section className="w-full bg-white py-24 px-4 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 -left-1/3 -translate-y-1/4 -translate-x-1/2 md:-translate-x-[75%] md:-translate-y-1/2 animate-treeRotate2 text-LitePink z-0">
        <TreeSvg />
      </div>
      <div className="absolute bottom-0 right-0 w-full text-LitePink transform scale-x-[-1]">
        <LineInHeader />
      </div>

      <div className="max-w-[1650px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-marcellus tracking-widest text-TextN mb-4">
            {weddingLocation.title}
          </h2>
          <p className="text-2xl font-baskervville text-TextN max-w-2xl mx-auto mb-8">
            {weddingLocation.subtitle}
          </p>
          <div className="w-40 h-px bg-LitePink mx-auto"></div>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          {/* Left Column - Text Content */}
          <div className="lg:w-2/3 relative">
            <div className="bg-Pastel p-12 rounded-xl shadow-lg relative z-20">
              <div className="prose prose-lg text-white font-marcellus">
                <p className="text-lg leading-relaxed">
                  {weddingLocation.description}
                </p>
                <p className="text-base italic">{weddingLocation.dressCode}</p>
              </div>
              <div className="font-baskervville text-white space-y-8 mt-12">
                <div>
                  <h3 className="text-2xl font-marcellus text-white mb-3">
                    {weddingLocation.placeName}
                  </h3>
                  <p className="text-lg italic transition-colors">
                    {weddingLocation.placeAddress}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-marcellus text-white mb-3">
                    {weddingLocation.date}
                  </h3>
                  <p className="text-lg">{weddingLocation.time}</p>
                </div>

                <div>
                  <h3 className="text-2xl font-marcellus text-white mb-3">
                    {weddingLocation.additionalInfoTitle}
                  </h3>
                  <p className="text-lg">{weddingLocation.additionalInfo}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:w-1/2 ">
            <div className="h-[500px] border-2 border-Pastel p-4 shadow-lg overflow-hidden z-20 ">
              <Image
                src={weddingImage}
                alt="Wedding Location"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
