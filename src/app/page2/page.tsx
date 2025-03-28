"use client";
import AboutUs from "@/components/website2/AboutUs/AboutUs";
import CeremonyInfo from "@/components/website2/CeremonyInfo";
import Contact from "@/components/website2/contact";
import FAQ from "@/components/website2/FAQ";
import Gallery from "@/components/website2/Galery";
import Header from "@/components/website2/Header/Header";
import Menu from "@/components/website2/Menu";
import Space from "@/components/website2/Space";
import Story from "@/components/website2/Story";
import React, { useRef, useMemo } from "react";

export default function Page1() {
  const aboutUsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const ceremonyInfoRef = useRef<HTMLDivElement>(null);

  // Create the refs object using useMemo to avoid unnecessary re-renders
  const refs = useMemo(
    () => ({
      aboutUs: aboutUsRef as React.RefObject<HTMLDivElement>, // Corrected: Changed to "aboutUs"
      contact: contactRef as React.RefObject<HTMLDivElement>, // Corrected: Changed to "contact"
      faq: faqRef as React.RefObject<HTMLDivElement>, // Corrected: Changed to "faq"
      ceremonyInfo: ceremonyInfoRef as React.RefObject<HTMLDivElement>, // Corrected: Changed to "ceremonyInfo"
    }),
    []
  );

  return (
    <>
      <Menu refs={refs} />
      <div className="relative min-h-screen max-w-screen overflow-hidden ">
        <Header />
        <div ref={aboutUsRef} id="aboutUs">
          <AboutUs />
        </div>
        <Space />
        <div ref={ceremonyInfoRef} id="ceremonyInfo">
          <CeremonyInfo />
        </div>
        <Space />
        <Story />
        <Space />
        <Gallery />
        <Space />
        <div ref={faqRef} id="faq">
          <FAQ />
        </div>
        <Space />
        <div ref={contactRef} id="contact">
          <Contact />
        </div>
      </div>
    </>
  );
}
