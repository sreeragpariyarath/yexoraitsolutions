import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Inter_Tight } from "next/font/google";
import "./globals.css";
import { constructMetadata } from "../lib/metadata";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { SmoothScrollProvider } from "../components/providers/SmoothScrollProvider";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const striker = localFont({
  src: [
    {
      path: "../public/fonts/Striker-1GXl0.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Striker PersonalUseOnly.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-striker",
  display: "swap",
});

const eloquia = localFont({
  src: [
    {
      path: "../public/fonts/Typekiln - EloquiaText-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Typekiln - EloquiaDisplay-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-eloquia",
  display: "swap",
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
      className={`${geist.variable} ${interTight.variable} ${striker.variable} ${eloquia.variable} h-full antialiased`}
    >
      <body className="flex flex-col font-sans bg-background text-foreground min-h-full">
        <SmoothScrollProvider>
          <Header />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
