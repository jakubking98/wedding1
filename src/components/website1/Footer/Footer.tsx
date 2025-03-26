import React from "react";
import Link from "next/link";
import CountdownTimer from "./CountdownTimer";
import { WebsiteContent } from "../WebsiteContent";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const weddingDate = new Date("2025-07-12T15:00:00");

  return (
    <footer className="bg-LitePink text-TextN py-12 px-2 md:px-4">
      <div className="max-w-[1650px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
        <div className="text-center md:text-left">
          <Link
            href="/"
            className="font-marcellus text-2xl md:text-3xl tracking-widest mb-4 block hover:text-Pastel transition-colors duration-300"
          >
            {WebsiteContent.CentralText}
          </Link>
          <p className="font-baskervville text-base md:text-lg">
            Uchwycone chwile, wieczne wspomnienia.
          </p>
        </div>

        <div className="w-full md:w-auto text-center">
          <p className="font-sora text-sm md:text-base mb-2">
            Do naszego ślubu zostało:
          </p>
          <CountdownTimer weddingDate={weddingDate} />
        </div>

        <div className="text-center md:text-right">
          <p className="text-xs md:text-sm font-sora">
            &copy; {currentYear} Hanna & Jakub. Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-xxs md:text-xs font-sora mt-2">
            Strona stworzona przez:{" "}
            <a
              href="https://github.com/jakubking98"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-Pastel transition-colors duration-300 underline"
            >
              Jakub King
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
