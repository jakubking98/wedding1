import AboutSection from "@/components/website1/AboutSection/AboutSection";
import Footer from "@/components/website1/Footer/Footer";
import Header from "@/components/website1/Header/Header";
import Menu from "@/components/website1/Menu";
import SectionUs from "@/components/website1/sectionUs/SectionUs";
import WeddingDetails from "@/components/website1/WeddingDetails";
import React from "react";

export default function HomePage() {
  return (
    <>
      <Menu />
      <div className="relative min-h-screen max-w-screen overflow-hidden ">
        <Header />
        <SectionUs />
        <AboutSection />
        <WeddingDetails />
        <Footer />
      </div>
    </>
  );
}
