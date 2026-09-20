import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { constructMetadata } from "../lib/metadata";

const neuePower = localFont({
  src: [
    {
      path: "../public/fonts/NeuePower-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/NeuePower-Regular-qo7lrz.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/NeuePower-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/NeuePower-Ultra.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-neue-power",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${neuePower.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}

