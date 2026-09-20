"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-4 z-50 w-full ">
      {/* Liquid Glass Navbar Container */}
      <div className="relative flex items-center justify-between h-16 px-4 sm:px-6  transition-all duration-300">
        {/* Left Side: Brand Logo & Title */}
        <Link href="/" className="flex items-center gap-1 group z-10">
          <div className="relative w-6 h-6 overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform">
            <Image
              src="/logo/yexora-icon.png"
              alt="Yexora IT Solutions Logo"
              width={36}
              height={36}
              className="object-contain p-1"
              priority
            />
          </div>
          <span className="font-display text-xl font-medium tracking- text-white group-hover:text-[#075399] transition-colors">
            Yexora IT Solutions
          </span>
        </Link>

        {/* Center: Desktop Navigation (Individual Liquid Glass Pills) */}
        <nav className="hidden md:flex items-center gap-2.5 z-10">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-5 py-2 text-sm font-medium text-white rounded-full backdrop-blur-md border border-white/20 shadow-[0_2px_10px_rgba(7,83,153,0.06)] hover:bg-white/90 hover:border-[#075399]/30 hover:text-[#075399] hover:shadow-[0_4px_16px_rgba(7,83,153,0.12)] hover:-translate-y-0.5 transition-all duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Side: Contact Action Pill */}
        <div className="hidden md:flex items-center gap-3 z-10">
          <Link
            href="/contact"
            className="relative px-5 py-2 text-sm font-semibold text-white rounded-full bg-[#075399] hover:bg-[#054179] shadow-md shadow-[#075399]/25 hover:shadow-lg hover:shadow-[#075399]/35 hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-[#075399] rounded-full hover:bg-slate-100 transition-colors z-10"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 rounded-3xl bg-white/95 backdrop-blur-2xl border border-white/80 shadow-2xl space-y-3 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-slate-800 hover:text-[#075399] hover:bg-slate-50 rounded-2xl transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="pt-2 border-t border-slate-100">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-3 text-center text-base font-semibold text-white bg-[#075399] hover:bg-[#054179] rounded-2xl shadow-md transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
