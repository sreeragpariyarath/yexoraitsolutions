import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import { constructMetadata } from "../lib/metadata";
import { Header } from "../components/layout/Header";
import { SmoothScrollProvider } from "../components/providers/SmoothScrollProvider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
      className={`${poppins.variable} ${striker.variable} ${eloquia.variable} h-full antialiased`}
    >
      <body className="flex flex-col font-sans bg-white text-black min-h-full">
        <SmoothScrollProvider>
          <Header />
          <main className="flex-1 w-full">{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
