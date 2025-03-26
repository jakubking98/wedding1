import React from "react";
import Image from "next/image";
import LineInHeader from "@/components/website1/Header/LineInHeader";

export default function AboutUs() {
  return (
    <div className="relative w-full h-auto bg-white">
      <div className="absolute top-0 w-full text-LitePink rotate-180">
        <LineInHeader />
      </div>
      <div className="absolute bottom-0 w-full text-LitePink">
        <LineInHeader />
      </div>
      <div className="relative top-[-60px] left-0 w-full flex justify-center ">
        <div className="w-[1050px] rounded-3xl px-6 py-16 bg-white text-center font-sans shadow-lg">
          <h1 className="text-4xl font-bold text-OrcheidDark mb-10 tracking-wide font-comfortaa">
            Poznajcie Szczęśliwą Parę
          </h1>

          <div className="mb-10">
            <div className="space-y-4 text-gray-500">
              <p className="text-2xl font-comfortaa">
                Jesteśmy wdzięczni za to, że możemy dzielić z Wami naszą radość.
              </p>
              <p className="text-2xl font-comfortaa">
                Prosimy, abyście byli z nami w tym wyjątkowym dniu.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-12 mb-24">
            <div className="relative w-[250px] h-[250px] text-center">
              <div className="relative w-full h-full">
                <Image
                  src="/page2/Group42.svg"
                  alt="Decorative SVG"
                  fill
                  className="object-contain z-10 text-Orcheid"
                  priority
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full overflow-hidden">
                  <Image
                    src="/page2/pan.png"
                    alt="Pan Młody"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="mt-8 bg-white rounded-lg p-2">
                <h2 className="text-6xl font-medium text-OrcheidDark font-allura">
                  Jakub
                </h2>
                <p className="text-sm uppercase tracking-wider text-gray-500 mt-1 font-comfortaa">
                  Syn
                </p>
                <p className="text-sm uppercase tracking-wider text-gray-700 font-comfortaa">
                  Państwa Kowalskich
                </p>
              </div>
            </div>

            <div className="relative w-[270px] h-[270px] p-2 text-center">
              <div className="relative w-full h-full">
                <Image
                  src="/page2/Group42.svg"
                  alt="Decorative SVG"
                  fill
                  className="object-contain z-10 text-Orcheid"
                  priority
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full overflow-hidden">
                  <Image
                    src="/page2/pani.png"
                    alt="Pani Młoda"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="mt-8 bg-white rounded-lg p-2 ">
                <h2 className="text-6xl font-medium text-OrcheidDark font-allura">
                  Hanna
                </h2>
                <p className="text-sm uppercase tracking-wider text-gray-500 mt-1 font-comfortaa">
                  Córka
                </p>
                <p className="text-sm uppercase tracking-wider text-gray-700 font-comfortaa">
                  Państwa Wiśniewskich
                </p>
              </div>
            </div>
          </div>

          <div className="pt-20 border-t-2 border-Orcheid">
            <h3 className="text-3xl font-semibold text-OrcheidDark mb-8 font-comfortaa">
              Nasza Historia
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
