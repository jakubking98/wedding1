import React from "react";
import Image from "next/image";
import { WebsiteContent } from "./WebsiteContent";
import TreeSvg from "./sectionUs/TreeSvg";
import CountdownTimer2 from "./CountdownTimer2";

export default function AboutUs() {
  console.log("CeremonyInfo component rendered");
  const weddingDate = new Date(
    new Date(
      WebsiteContent.weddingCeremony.dateL +
        " " +
        WebsiteContent.weddingCeremony.time
    ).toLocaleString("en-US", {
      timeZone: WebsiteContent.weddingCeremony.timeZone,
    })
  );

  return (
    <div className="relative w-full  ">
      <div className="absolute top-64 lg:-top-20 -left-[500px] -translate-y-1/4 translate-x-1/4 md:translate-x-1/2 md:-translate-y-1/2 animate-treeRotate text-ColorWeb1 z-0">
        <TreeSvg />
      </div>
      <div className="relative top-0 left-0 w-full flex justify-center ">
        <div className="w-full md:w-[1050px] rounded-3xl px-4 md:px-6 py-10  text-center z-10">
          <h1 className="text-2xl md:text-5xl text-ColorWeb2  mb-6 md:mb-10 tracking-wider font-marcellus">
            {WebsiteContent.aboutUs.title}
          </h1>

          <div className="mb-6 md:mb-10 max-w-[800px] mx-auto">
            <div className="space-y-2 md:space-y-4 text-ColorWeb3">
              <p className="text-lg md:text-xl font-marcellus">
                {WebsiteContent.aboutUs.paragraph1}
              </p>
              <p className="text-lg md:text-xl font-marcellus">
                {WebsiteContent.aboutUs.paragraph2}
              </p>
            </div>
          </div>

          <div className=" flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 ">
            {/* Groom Section */}
            <div className="flex flex-col items-center md:block">
              <div className="relative w-[200px] h-[250px] md:w-[250px] md:h-[300px] text-center">
                <div className=" w-full h-full">
                  <div className=" border-4 rounded-t-full border-ColorWeb1 w-full h-full">
                    <div className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150px] h-[200px] md:w-[200px] md:h-[250px] rounded-t-full overflow-hidden">
                      <Image
                        src="/pan.jpg"
                        alt="Pan Młody"
                        fill
                        className="object-cover object-top"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" mt-4 md:mt-8 rounded-lg p-2">
                <h2 className="text-4xl md:text-5xl mb-4 font-medium text-ColorWeb2 font-baskervville">
                  {WebsiteContent.aboutUs.groomName}
                </h2>
                <p className="text-sm uppercase tracking-wider text-ColorWeb4 mt-1 font-marcellus">
                  {WebsiteContent.aboutUs.groomTitle}
                </p>
                <p className="text-sm uppercase tracking-wider text-ColorWeb3 font-marcellus">
                  {WebsiteContent.aboutUs.groomFamily}
                </p>
              </div>
            </div>

            {/* Bride Section */}
            <div className="flex flex-col items-center md:block">
              <div className="relative w-[200px] h-[250px] md:w-[250px] md:h-[300px] text-center">
                <div className=" w-full h-full">
                  <div className=" border-4 rounded-t-full border-ColorWeb1 w-full h-full">
                    <div className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150px] h-[200px] md:w-[200px] md:h-[250px] rounded-t-full overflow-hidden">
                      <Image
                        src="/Panna.jpg"
                        alt="Pani Młoda"
                        fill
                        className="object-cover object-top"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 md:mt-8 rounded-lg p-2 ">
                <h2 className="text-4xl md:text-5xl mb-4 font-medium text-ColorWeb2 font-baskervville">
                  {WebsiteContent.aboutUs.brideName}
                </h2>
                <p className="text-sm uppercase tracking-wider text-ColorWeb4 mt-1 font-marcellus">
                  {WebsiteContent.aboutUs.brideTitle}
                </p>
                <p className="text-sm uppercase tracking-wider text-ColorWeb3 font-marcellus">
                  {WebsiteContent.aboutUs.brideFamily}
                </p>
              </div>
            </div>
          </div>
          <div className="text-2xl md:text-3xl font-medium text-ColorWeb2 my-4 md:my-8 font-marcellus">
            {WebsiteContent.subHeading}
          </div>
          <div className="my-6 md:my-8 max-w-fit mx-auto">
            <CountdownTimer2 weddingDate={weddingDate} />
          </div>
        </div>
      </div>
    </div>
  );
}
