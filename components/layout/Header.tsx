"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { MenuIcon } from "./MenuIcon";
import { MenuOverlay, type NavItem } from "./MenuOverlay";

const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Works", href: "/#featured" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/contact" },
];

const MENU_ITEMS: NavItem[] = [{ label: "Home", href: "/" }, ...NAV_ITEMS];

const FOCUS_RING = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

function Wordmark() {
  return (
    <Link href="/" className={`inline-flex items-center transition-opacity hover:opacity-90 ${FOCUS_RING}`}>
      <span className="pt-1 font-bebas text-2xl leading-none tracking-widest text-white xl:text-3xl">YEXORA</span>
    </Link>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const menuButton = (
    <button
      type="button"
      onClick={() => setMenuOpen(true)}
      aria-label="Open menu"
      aria-expanded={menuOpen}
      aria-controls="site-menu"
      className={`group relative flex size-8 cursor-pointer items-center justify-center text-white ${FOCUS_RING}`}
    >
      <MenuIcon isOpen={menuOpen} />
    </button>
  );

  return (
    <header className="absolute inset-x-0 top-0 z-50 px-4 pt-5 sm:px-8">
      <div className="hidden w-full grid-cols-12 items-end gap-5 lg:grid xl:gap-8">
        <div className="col-span-3 border-b border-white/35 pb-3">
          <Wordmark />
        </div>

        <nav aria-label="Primary" className="col-span-8 grid grid-cols-4 gap-5 xl:gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`group flex items-center gap-2.5 border-b border-white/35 pb-3 text-xs font-semibold uppercase tracking-widest text-white/90 transition-colors hover:text-white xl:text-sm ${FOCUS_RING}`}
            >
              <span
                aria-hidden="true"
                className="size-2.5 shrink-0 rounded-full border border-white/70 transition-all group-hover:border-white group-hover:bg-white/20"
              />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="col-span-1 flex justify-center border-b border-white/35 pb-3">{menuButton}</div>
      </div>

      <div className="flex items-center justify-between border-b border-white/35 pb-3 lg:hidden">
        <Wordmark />
        {menuButton}
      </div>

      <MenuOverlay open={menuOpen} onClose={closeMenu} items={MENU_ITEMS} />
    </header>
  );
}
