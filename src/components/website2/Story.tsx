import React from "react";
import Image from "next/image";
import { WebsiteContent2 } from "./WebsiteContnet2";
import LineInHeader from "../website1/Header/LineInHeader";

export default function Story() {
  return (
    <div className="relative w-full py-16">
      <div className="absolute -z-10 -top-1 w-full text-ColorWeb1 rotate-180">
        <LineInHeader />
      </div>
      <div className="absolute bottom-0 -z-10 w-full text-ColorWeb1">
        <LineInHeader />
      </div>
      <div className="max-w-5xl md:bg-white md:rounded-3xl md:shadow-lg p-5 md:p-10 z-10 mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-ColorWeb2 mb-6 md:mb-12 tracking-wide font-comfortaa">
          {WebsiteContent2.story.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-5  md:gap-12 text-ColorWeb3 font-comfortaa">
          <div className="flex flex-col items-center md:items-start">
            <div className="relative w-full h-64 md:h-80 mb-6 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/page2/man.png"
                alt="Our Story 1"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <p className="text-md md:text-lg text-justify">
              {WebsiteContent2.story.paragraph2}
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <p className="text-md md:text-lg text-justify mb-6">
              {WebsiteContent2.story.paragraph1}
            </p>
            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/page2/woman.png"
                alt="Our Story 2"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
