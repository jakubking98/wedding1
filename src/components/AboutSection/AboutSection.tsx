import React from "react";
import Image from "next/image";
import { WebsiteContent } from "../WebsiteContent";

export default function AboutSection() {
  const { mainTitle, subTitle, description, buttonText, image1, image2 } =
    WebsiteContent.aboutSection;

  return (
    <section className="w-full bg-Pastel py-24 px-4">
      <div className="max-w-[1650px] mx-auto flex flex-col lg:flex-row-reverse items-center gap-4  md:gap-16">
        {/* Tekst po prawej stronie */}
        <div className="lg:w-2/3 lg:text-left text-center">
          {/* Added text-center for mobile */}
          <h1 className="text-4xl md:text-5xl font-marcellus tracking-wider text-white mb-6">
            {mainTitle}
          </h1>
          <h2 className="text-xl md:text-2xl font-baskervville italic text-white mb-8">
            {subTitle}
          </h2>
          <div className="text-white font-baskervville mb-12 space-y-4 text-lg leading-relaxed">
            {description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="w-20 h-px bg-white mb-12 mx-auto lg:mx-0"></div>{" "}
          {/* Added mx-auto for mobile, lg:mx-0 for desktop */}
          <a
            href="#"
            className="inline-block font-marcellus text-lg tracking-wider border-b border-white text-white hover:text-amber-200 pb-1 hover:border-amber-200 transition-colors duration-300"
          >
            {buttonText}
          </a>
        </div>

        {/* Kontener zdjęć po lewej stronie z nachodzeniem */}
        <div className="lg:w-1/2 relative h-[600px] w-full md:w-1/2  mx-auto lg:mx-0">
          {/* Added mobile styles */}
          {/* Pierwsze zdjęcie - wyższe i węższe */}
          <div className="md:absolute static bottom-0 left-0 w-full md:w-[60%] h-[300px] md:h-[500px] border-2 border-white p-4 shadow-lg overflow-hidden z-10">
            {/* Added mobile styles */}
            <Image
              src={image1}
              alt="Portret fotografa"
              width={300}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Drugie zdjęcie - przesunięte i nachodzące */}
          <div className="md:absolute static top-0 right-0 w-full md:w-[60%] h-[300px] md:h-[500px] border-2 border-white p-4 shadow-lg overflow-hidden z-20 mt-4 md:mt-12">
            {/* Added mobile styles */}
            <Image
              src={image2}
              alt="Praca fotografa"
              width={300}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
