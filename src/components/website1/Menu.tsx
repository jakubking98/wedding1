"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { WebsiteContent } from "./WebsiteContent";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Menu = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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
      className={`fixed top-0 left-0 w-full h-[120px] z-50 transition-all duration-300 ${
        isSticky ? "bg-ColorWeb1 shadow-menu h-[90px]" : "bg-white"
      } `}
    >
      <div className="max-w-[1650px] h-full mx-auto px-4 py-3 flex items-center justify-between">
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-TextN focus:outline-none"
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
          className={`md:hidden absolute top-[90px] left-0 w-full bg-ColorWeb1 transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col items-center space-y-4 py-6">
            {WebsiteContent.menuLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="text-TextN hover:text-MenuC2 transition-colors duration-300 uppercase text-xl"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <ul className="hidden md:flex space-x-6">
          {WebsiteContent.menuLinks.slice(0, 2).map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="text-TextN hover:text-MenuC2 transition-colors duration-300 uppercase"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/"
          className="text-TextN font-marcellus text-2xl absolute left-1/2 -translate-x-1/2"
        >
          {WebsiteContent.CentralText}
        </Link>

        <ul className="hidden md:flex space-x-8">
          {WebsiteContent.menuLinks.slice(2).map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="text-TextN hover:text-MenuC2 transition-colors duration-300 uppercase"
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
