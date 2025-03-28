import Image from "next/image";
import React from "react";

export default function Space() {
  return (
    <div className="w-full relative h-[60px] flex justify-center items-center bg-ColorWeb1">
      <div className="w-[1050px] h-[60px] bg-ColorWeb1 text-center text-white">
        <Image
          src="/page2/Group59.svg"
          alt="Decorative SVG"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
