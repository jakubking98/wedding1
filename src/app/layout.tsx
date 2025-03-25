import type { Metadata } from "next";
import { Baskervville, Marcellus, Sora } from "next/font/google";
import "@/style/globals.css";
import Menu from "@/components/Menu";

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
      className={`${sora.variable} ${marcellus.variable} ${baskervville.variable}`}
    >
      <body className={`font-sora`}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
