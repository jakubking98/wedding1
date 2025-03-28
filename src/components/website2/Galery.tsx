"use client";
import React, { useState } from "react";
import Image from "next/image";
import { images, WebsiteContent2 } from "./WebsiteContnet2";
import LineInHeader from "../website1/Header/LineInHeader";

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = (index: number) => {
    setSelectedImage(index);
    setIsViewerOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeImageViewer = () => {
    setSelectedImage(null);
    setIsViewerOpen(false);
    document.body.style.overflow = "auto";
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((prev) =>
        prev === 0 ? images.length - 1 : (prev as number) - 1
      );
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((prev) => ((prev as number) + 1) % images.length);
    }
  };

  return (
    <section id="gallery" className="w-full relative py-20 ">
      <div className="absolute -z-10 -top-1 w-full text-ColorWeb1 rotate-180">
        <LineInHeader />
      </div>
      <div className="absolute bottom-0 -z-10 w-full text-ColorWeb1">
        <LineInHeader />
      </div>
      <div className="w-auto">
        <div className="text-center max-w-5xl mx-auto mb-5 md:mb-16 md:bg-white md:rounded-3xl md:shadow-lg p-5 md:p-10">
          <h1 className=" text-2xl md:text-4xl font-bold text-ColorWeb2 font-comfortaa mb-6">
            {WebsiteContent2.gallery.title}
          </h1>
          <blockquote className="max-w-2xl mx-auto text-lg md:text-xl italic text-ColorWeb3 mb-4">
            &quot;{WebsiteContent2.gallery.quote.text}&quot;
          </blockquote>
          <p className="text-ColorWeb4 font-medium">
            - {WebsiteContent2.gallery.quote.author} -
          </p>
        </div>

        <div className="grid grid-cols-12 grid-rows-4 md:grid-rows-2 gap-3 md:gap-6 mx-2 md:mx-10 ">
          {/* Image 1 */}
          <div
            className="col-span-6 md:col-span-3 row-span-2 relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full max-h-[626px]" // Dodane h-full max-h-[300px]
            onClick={() => openImageViewer(0)}
          >
            <Image
              src={images[0].src}
              alt={images[0].alt}
              width={images[0].width}
              height={images[0].height}
              className="w-full h-full object-cover object-bottom transition-transform duration-500 hover:scale-105" // Dodane object-cover
              placeholder="blur"
              blurDataURL={images[0].src}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-white font-medium">{images[0].alt}</p>
            </div>
          </div>

          {/* Image 2 */}
          <div
            className="col-span-6 md:col-span-4 row-span-1 relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full max-h-[300px]" // Dodane h-full max-h-[300px]
            onClick={() => openImageViewer(1)}
          >
            <Image
              src={images[1].src}
              alt={images[1].alt}
              width={images[1].width}
              height={images[1].height}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" // Dodane object-cover
              placeholder="blur"
              blurDataURL={images[1].src}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-white font-medium">{images[1].alt}</p>
            </div>
          </div>

          {/* Image 4 */}
          <div
            className="col-span-6 md:col-span-2 row-span-1 relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full max-h-[300px]" // Dodane h-full max-h-[300px]
            onClick={() => openImageViewer(3)}
          >
            <Image
              src={images[3].src}
              alt={images[3].alt}
              width={images[3].width}
              height={images[3].height}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" // Dodane object-cover
              placeholder="blur"
              blurDataURL={images[3].src}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-white font-medium">{images[3].alt}</p>
            </div>
          </div>

          {/* Image 6 */}
          <div
            className="col-span-6 md:col-span-3 row-span-2 relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full max-h-[626px]" // Dodane h-full max-h-[300px]
            onClick={() => openImageViewer(5)}
          >
            <Image
              src={images[5].src}
              alt={images[5].alt}
              width={images[5].width}
              height={images[5].height}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" // Dodane object-cover
              placeholder="blur"
              blurDataURL={images[5].src}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-white font-medium">{images[5].alt}</p>
            </div>
          </div>

          {/* Image 3 */}
          <div
            className="col-span-6 md:col-span-2 row-span-1 relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full max-h-[300px]" // Dodane h-full max-h-[300px]
            onClick={() => openImageViewer(2)}
          >
            <Image
              src={images[2].src}
              alt={images[2].alt}
              width={images[2].width}
              height={images[2].height}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" // Dodane object-cover
              placeholder="blur"
              blurDataURL={images[2].src}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-white font-medium">{images[2].alt}</p>
            </div>
          </div>

          {/* Image 5 */}
          <div
            className="col-span-6 md:col-span-4 row-span-1 relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full max-h-[300px]" // Dodane h-full max-h-[300px]
            onClick={() => openImageViewer(4)}
          >
            <Image
              src={images[4].src}
              alt={images[4].alt}
              width={images[4].width}
              height={images[4].height}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" // Dodane object-cover
              placeholder="blur"
              blurDataURL={images[4].src}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-white font-medium">{images[4].alt}</p>
            </div>
          </div>
        </div>

        {isViewerOpen && selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <button
              onClick={closeImageViewer}
              className="absolute z-10 top-6 right-6 bg-ColorWeb2 rounded-3xl text-white hover:text-gray-300 transition-colors"
              aria-label="Close gallery"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <button
              onClick={goToPrevious}
              className="absolute left-6 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Previous image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div
              className="relative max-w-4xl w-full h-full max-h-screen flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                width={images[selectedImage].width}
                height={images[selectedImage].height}
                className="max-w-full max-h-[80vh] object-contain"
                priority
              />
            </div>

            <button
              onClick={goToNext}
              className="absolute right-6 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Next image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            <div className="absolute bottom-6 left-0 right-0 text-center text-white">
              {selectedImage + 1} / {images.length}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
