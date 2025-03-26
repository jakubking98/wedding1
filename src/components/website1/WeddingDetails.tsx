"use client";
import React from "react";
import { WebsiteContent } from "./WebsiteContent";
import TreeSvg from "./sectionUs/TreeSvg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import LineInHeader from "./Header/LineInHeader";
import CeremonyDetails from "./WeddingSlider/CeremonyDetails";
import ReceptionDetails from "./WeddingSlider/ReceptionDetails";

export default function WeddingDetails() {
  return (
    <section className="w-full bg-white py-24 px-4 relative overflow-hidden">
      <div className="absolute top-10 md:top-0  right-0 md:-left-1/3  -translate-y-1/4 -translate-x-1/2 md:-translate-x-[75%] md:-translate-y-1/2 animate-treeRotate2 text-LitePink z-0 ">
        <TreeSvg />
      </div>
      <div className="absolute -bottom-1 right-0 w-full text-LitePink transform scale-x-[-1] ">
        <LineInHeader />
      </div>

      <div className="max-w-[1650px] mx-auto relative z-10 group">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          autoHeight={true}
          modules={[Pagination, Navigation]}
          className="relative md:min-h-0 min-h-[500px]"
          breakpoints={{
            768: {
              spaceBetween: 0,
            },
          }}
        >
          <div className="swiper-button-prev absolute top-1/2 -translate-y-1/2 left-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:opacity-100 md:group-hover:opacity-100 md:left-[-2rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 text-Pastel"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <div className="swiper-button-next absolute top-1/2 -translate-y-1/2 right-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:opacity-100 md:group-hover:opacity-100 md:right-[-2rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 text-Pastel"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
          <SwiperSlide>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-marcellus tracking-widest text-TextN mb-4">
                {WebsiteContent.weddingCeremony.title}
              </h2>
              <p className="text-2xl font-baskervville text-TextN max-w-2xl mx-auto mb-8">
                {WebsiteContent.weddingCeremony.subtitle}
              </p>
              <div className="w-40 h-px bg-LitePink mx-auto"></div>
            </div>
            <div className="px-2 md:px-0">
              <CeremonyDetails />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-marcellus tracking-widest text-TextN mb-4">
                {WebsiteContent.weddingReception.title}
              </h2>
              <p className="text-2xl font-baskervville text-TextN max-w-2xl mx-auto mb-8">
                {WebsiteContent.weddingReception.subtitle}
              </p>
              <div className="w-40 h-px bg-LitePink mx-auto"></div>
            </div>
            <div className="px-2 md:px-0">
              <ReceptionDetails />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
