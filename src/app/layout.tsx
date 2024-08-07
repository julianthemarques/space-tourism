import Header from "@/components/Header/Header";
import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Bellefair } from "next/font/google";
import "./globals.css";

const bellefair = Bellefair({
  subsets: ["latin"],
  variable: "--bellefair",
  weight: ["400"],
});

export const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--barlow-condensed",
  weight: ["400"],
});

export const barlow = Barlow({
  subsets: ["latin"],
  variable: "--barlow",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Space Tourism",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bellefair.className} ${bellefair.variable} ${barlowCondensed.variable} ${barlow.variable} min-h-screen`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
