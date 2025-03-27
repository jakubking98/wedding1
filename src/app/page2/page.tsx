import AboutUs from "@/components/website2/AboutUs/AboutUs";
import CeremonyInfo from "@/components/website2/CeremonyInfo";
import Contact from "@/components/website2/contact";
import FAQ from "@/components/website2/FAQ";
import Gallery from "@/components/website2/Galery";
import Header from "@/components/website2/Header/Header";
import Space from "@/components/website2/Space";
import Story from "@/components/website2/Story";
import React from "react";

export default function page1() {
  return (
    <div className="relative min-h-screen max-w-screen overflow-hidden ">
      <Header />
      <AboutUs />
      <Space />
      <CeremonyInfo />
      <Space />
      <Story />
      <Space />
      <Gallery />
      <Space />
      <FAQ />
      <Space />
      <Contact />
    </div>
  );
}
