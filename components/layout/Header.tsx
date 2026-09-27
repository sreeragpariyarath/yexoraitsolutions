"use client";

import { useState } from "react";
import Link from "next/link";
import { COMPANY_INFO, NAV_LINKS } from "../../lib/constants";


export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 text-white">
      {menuOpen && (
        <nav
          id="site-menu"
          aria-label="Primary"
          onKeyDown={(event) => event.key === "Escape" && closeMenu()}
          className="fixed inset-0 flex flex-col justify-center bg-[#07101c]/95 px-6 backdrop-blur-xl sm:px-10"
        >
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="font-heading text-5xl font-extrabold uppercase tracking-[-0.03em] text-white/85 transition-colors hover:text-[#4da3ff] focus-visible:text-[#4da3ff] focus-visible:outline-none sm:text-7xl"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <div className="relative flex h-20 items-center justify-between px-6 text-sm font-bold uppercase tracking-tight sm:px-8">
        <Link
          href="/"
          onClick={closeMenu}
          className="flex gap-50 align-bottom focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          {/* {COMPANY_INFO.brandName} */}
          <img src="/logo/yexora-icon-white.png" alt="" className="w-8" />

        <ul className="flex gap-5 text-md font-normal ">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        </Link>

    

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="group flex h-10 w-12 flex-col items-end justify-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <span
            className={`block h-px bg-white transition-all duration-300 ${menuOpen ? "w-9 translate-y-[4.5px] rotate-45" : "w-11"}`}
          />
          <span
            className={`block h-px bg-white transition-all duration-300 ${menuOpen ? "w-9 translate-y-[-4.5px] -rotate-45" : "w-7 group-hover:w-11"}`}
          />
        </button>
      </div>
    </header>
  );
}
