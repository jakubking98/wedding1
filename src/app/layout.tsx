import type { Metadata } from "next";
import {
  Baskervville,
  Marcellus,
  Sora,
  Comfortaa,
  Allura,
} from "next/font/google";
import "@/style/globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marcellus",
});

const baskervville = Baskervville({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-baskervville",
  display: "swap",
});

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Add all weights you need
  variable: "--font-comfortaa",
  display: "swap",
});

const allura = Allura({
  subsets: ["latin"],
  weight: ["400"], // Allura only has one weight
  variable: "--font-allura",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JezioroSfera",
  description: "Strona JezioroSfera",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pl"
      className={`${sora.variable} ${marcellus.variable} ${baskervville.variable} ${comfortaa.variable} ${allura.variable}`}
    >
      <head>
        <script
          async
          defer
          src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC035CFnniChiT8XlNHgfTk9xUCiL7lFwo&libraries=places`}
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
