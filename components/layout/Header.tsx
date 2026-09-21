"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "VISION", href: "/vision" },
  { label: "TECHNOLOGY", href: "/technology" },
  { label: "EXPERIENCE", href: "/experience" },
  { label: "SOLUTIONS", href: "/solutions" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-4 z-50 w-full">
      <div className="relative flex items-center justify-between h-16 px-4 sm:px-6 md:px-8 transition-all duration-300">
       <div className="flex items-center gap-8 md:gap-12">
         <Link href="/" className="flex items-center gap-1 group z-10">
          <div className="relative w-8 h-8 overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform">
            <Image
              src="/logo/yexora-icon.png"
              alt="Yexora IT Solutions Logo"
              width={36}
              height={36}
              className="object-contain p-1"
              priority
            />
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-7 lg:gap-10 z-10">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-xs sm:text-[13px] font-semibold tracking-[0.08em] uppercase text-slate-900/90 hover:text-black transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
       </div>

        <div className="hidden md:flex items-center gap-3 z-10">
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center px-7 py-2.5 overflow-hidden rounded-full bg-black text-white text-xs sm:text-[13px] font-bold tracking-[0.12em] uppercase border border-white/10 shadow-[0_4px_14px_rgba(0,0,0,0.18)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98] active:translate-y-0 transition-all duration-300 ease-out cursor-pointer"
          >
            {/* Luminous light-sweep sheen on hover */}
            <span
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none"
              aria-hidden="true"
            />
            {/* Subtle top specular border line */}
            <span
              className="absolute inset-x-3 top-0 h-1px bg-linear-to-r from-transparent via-white/40 to-transparent pointer-events-none"
              aria-hidden="true"
            />
            <span className="relative z-10">CONTACT US</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-black rounded-full hover:bg-slate-100 transition-colors z-10"
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
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-slate-800 hover:text-black hover:bg-slate-50 rounded-2xl transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="pt-2 border-t border-slate-100">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="group relative flex items-center justify-center w-full py-3 overflow-hidden rounded-full bg-black text-white text-sm font-bold tracking-[0.12em] uppercase border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <span
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none"
                aria-hidden="true"
              />
              <span className="relative z-10">CONTACT US</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
