import AboutSection from "@/components/AboutSection/AboutSection";
import Footer from "@/components/Footer/Footer";
import Header1 from "@/components/headers/header1/Header1";
import SectionUs from "@/components/sectionUs/SectionUs";
import WeddingDetails from "@/components/WeddingDetails";
// import WeddingSection from "@/components/WeddingSection/WeddingSection";
import React from "react";

export default function HomePage() {
  return (
    <div className="relative min-h-screen max-w-screen overflow-hidden ">
      <Header1 />
      <SectionUs />
      <AboutSection />
      <WeddingDetails />
      <Footer />
    </div>
  );
}
