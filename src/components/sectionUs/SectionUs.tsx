import React from "react";
import TreeSvg from "./TreeSvg";
import { WebsiteContent } from "../WebsiteContent";
import Image from "next/image";

export default function SectionUs() {
  const { mainTitle, subTitle, blocks } = WebsiteContent.sectionUsContent;

  return (
    <section className="w-full h-full relative bg-white ">
      {/* Ozdobienia */}
      <div className="absolute top-10 lg:-top-20 -right-40 -translate-y-1/4 translate-x-1/4 md:translate-x-1/2 md:-translate-y-1/2 animate-treeRotate text-LitePink z-0">
        <TreeSvg />
      </div>
      <div className="absolute z-0 w-full h-4/6 md:h-3/6 bottom-0 left-0 bg-LitePink"></div>

      {/* Główna zawartość */}
      <div className="max-w-[1650px] mx-auto px-4 relative z-10 pt-20 pb-20">
        {/* Nagłówek sekcji */}
        <div className="flex justify-center flex-col items-center space-y-4 mb-5 text-TextN">
          <h2 className="text-4xl md:text-5xl font-marcellus tracking-widest">
            {mainTitle}
          </h2>
          <p
            className="text-lg md:text-xl font-baskervville tracking-wider text-center"
            dangerouslySetInnerHTML={{ __html: subTitle }}
          ></p>
          <div className="w-px h-12 bg-Line my-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
          {blocks.map((block, index) => (
            <div
              key={index}
              className="group relative aspect-square md:aspect-[5/6] shadow-lg overflow-hidden bg-white"
            >
              <Image
                src={block.image}
                alt={block.title}
                width={block.width}
                height={block.height}
                className={`w-full h-full object-cover object-${
                  block.objectPosition || "center"
                } transition-transform duration-700 group-hover:scale-125`}
              />

              <div className="absolute inset-0 flex flex-col justify-between items-start p-4 md:p-8 bg-gradient-to-t from-black/80 to-black/50 hover:from-black/70 hover:to-black/40 transition-colors">
                <div className="transition-opacity duration-500 group-hover:opacity-0">
                  <h3 className="font-marcellus text-2xl md:text-3xl tracking-widest text-white">
                    {block.title}
                  </h3>
                  <p className="font-baskervville text-lg md:text-2xl text-white mt-1">
                    {block.description}
                  </p>
                </div>

                <a
                  href="#"
                  className="font-sora text-white text-base md:text-lg border-b border-white/40 hover:border-white transition-all duration-300 pb-1 group-hover:opacity-0"
                >
                  {block.buttonText}
                </a>
              </div>

              <div className="absolute inset-0 p-4 md:p-6 flex items-center justify-center bg-Pastel/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-100 scale-95">
                <div className="text-center text-white h-full px-4 border flex justify-center items-center flex-col border-white  bg-Pastel/10 ">
                  <p className="font-baskervville text-lg md:text-2xl mb-4">
                    {block.hiddenBox.description}{" "}
                    {/* Access hiddenBox from the current block */}
                  </p>
                  <a
                    href="#"
                    className="font-sora text-white text-base md:text-lg border-b border-white/40 hover:border-white transition-all duration-300 pb-1"
                  >
                    {block.hiddenBox.buttonText}{" "}
                    {/* Access hiddenBox from the current block */}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
