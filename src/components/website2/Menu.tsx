"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { WebsiteContent2 } from "./WebsiteContnet2";

interface MenuProps {
  refs: { [key: string]: React.RefObject<HTMLDivElement> };
}

const Menu: React.FC<MenuProps> = ({ refs }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (href: string) => {
    const sectionId = href.substring(1); // Remove the '#'
    const ref = refs[sectionId];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-[120px] z-50 font-comfortaa tracking-wide transition-all duration-300 ${
        isSticky
          ? "bg-ColorWeb1 shadow-menu h-[90px] text-ColorWeb3 opacity-100 translate-y-0"
          : " text-white opacity-0 -translate-y-full"
      }  transition-transform`}
    >
      <div className="max-w-[1650px] h-full mx-auto px-4 py-3 flex items-center justify-between">
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className={`focus:outline-none ${
              isSticky ? "text-ColorWeb3" : "text-white"
            }`}
          >
            {isMobileMenuOpen ? (
              <IoClose size={30} />
            ) : (
              <GiHamburgerMenu size={30} />
            )}
          </button>
        </div>
        <div
          ref={mobileMenuRef}
          className={`md:hidden absolute top-[90px] left-0 w-full font-comfortaa ${
            isSticky ? "bg-ColorWeb1" : "bg-ColorWeb2"
          } transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col items-center space-y-4 py-6">
            {WebsiteContent2.menuLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href} // Corrected: Use the anchor link
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    scrollToSection(link.href);
                  }}
                  className={` hover:text-ColorWeb4 transition-colors duration-300 uppercase text-xl ${
                    isSticky ? "text-ColorWeb3" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <ul className="hidden md:flex space-x-6 font-semibold">
          {WebsiteContent2.menuLinks.slice(0, 2).map((link, index) => (
            <li key={index}>
              <Link
                href={link.href} // Corrected: Use the anchor link
                onClick={() => scrollToSection(link.href)}
                className={`transition-colors duration-300 uppercase ${
                  isSticky
                    ? "text-ColorWeb3 hover:text-ColorWeb4"
                    : "text-white hover:text-ColorWeb1"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/"
          className={`font-allura text-3xl  md:text-4xl absolute left-1/2 -translate-x-1/2 ${
            isSticky ? "text-ColorWeb3" : "text-white"
          }`}
        >
          {WebsiteContent2.CentralText}
        </Link>

        <ul className="hidden md:flex space-x-8 font-semibold">
          {WebsiteContent2.menuLinks.slice(2).map((link, index) => (
            <li key={index}>
              <Link
                href={link.href} // Corrected: Use the anchor link
                onClick={() => scrollToSection(link.href)}
                className={` hover:text-ColorWeb4 transition-colors duration-300 uppercase ${
                  isSticky
                    ? "text-ColorWeb3 hover:text-ColorWeb4"
                    : "text-white hover:text-ColorWeb1"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
