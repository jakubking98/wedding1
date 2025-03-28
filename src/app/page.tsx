"use client";
import AboutSection from "@/components/website1/AboutSection/AboutSection";
import AboutUs from "@/components/website1/AboutUs";
import Contact from "@/components/website1/contact";
import FAQ from "@/components/website1/FAQ";
import Footer from "@/components/website1/Footer/Footer";
import Header from "@/components/website1/Header/Header";
import Menu from "@/components/website1/Menu";
import RenderMap from "@/components/website1/RenderMap";
import SectionUs from "@/components/website1/sectionUs/SectionUs";
import WeddingDetails from "@/components/website1/WeddingDetails";
import React, { useRef } from "react";

export default function HomePage() {
  const aboutUsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const ceremonyInfoRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Menu />
      <div className="relative min-h-screen max-w-screen overflow-hidden ">
        <Header />
        <div ref={aboutUsRef} id="aboutUs">
          <AboutUs />
        </div>
        <SectionUs />
        <AboutSection />
        <div ref={ceremonyInfoRef} id="ceremonyInfo">
          <WeddingDetails />
        </div>
        <RenderMap />
        <div ref={faqRef} id="faq">
          <FAQ />
        </div>
        <div ref={contactRef} id="contact">
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}
