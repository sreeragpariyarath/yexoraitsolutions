"use client";

import { useEffect, useRef } from "react";
import { useLenis } from "lenis/react";
import { COMPANY_INFO } from "../../lib/constants";
import { SocialLinks } from "../ui/SocialLinks";
import { MenuIcon } from "./MenuIcon";
import { MenuLink } from "./MenuLink";

export type NavItem = {
  label: string;
  href: string;
};

type MenuOverlayProps = {
  open: boolean;
  onClose: () => void;
  items: NavItem[];
};

// Slow-in / slow-out so the panel eases away and settles gently.
const PANEL_MOTION = "duration-[1100ms] ease-[cubic-bezier(0.76,0,0.24,1)]";

export function MenuOverlay({ open, onClose, items }: MenuOverlayProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lenis = useLenis();

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    lenis?.stop();
    closeButtonRef.current?.focus({ preventScroll: true });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      lenis?.start();
      previouslyFocused?.focus({ preventScroll: true });
    };
  }, [open, onClose, lenis]);

  return (
    <div
      id="site-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      aria-hidden={!open}
      inert={!open}
      className={`fixed inset-0 z-60 overflow-hidden bg-[#0b0d1a] transition-transform will-change-transform ${PANEL_MOTION} ${
        open ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        aria-label="Close menu"
        className="group fixed right-4 top-5 z-20 flex size-14 cursor-pointer items-center justify-center rounded-2xl border border-white/20 transition-colors hover:border-white/50 focus:outline-none focus-visible:border-white sm:right-8"
      >
        <MenuIcon isOpen />
      </button>

      {/* Content travels less than the panel, so it is revealed rather than dropped in. */}
      <div
        data-lenis-prevent
        className={`h-full overflow-y-auto overflow-x-hidden transition-transform will-change-transform ${PANEL_MOTION} ${
          open ? "translate-y-0" : "translate-y-[60%]"
        }`}
      >
        <div className="flex min-h-full flex-col">
          <div className="pointer-events-none -mt-[1vw] flex shrink-0 select-none justify-center">
            <span
              aria-hidden="true"
              className="whitespace-nowrap bg-linear-to-b from-white/35 via-white/10 via-45% to-transparent to-80% bg-clip-text font-bebas text-[14vw] uppercase leading-[0.85] text-transparent"
            >
              {COMPANY_INFO.brandName}
            </span>
          </div>

          <nav aria-label="Menu" className="flex flex-1 flex-col justify-center pb-[10vh] pt-2">
            {items.map((item, index) => (
              <div
                key={item.label}
                className={`transition-opacity ease-out ${open ? "opacity-100 duration-700" : "opacity-0 duration-300"}`}
                style={{ transitionDelay: open ? `${300 + index * 70}ms` : "0ms" }}
              >
                <MenuLink label={item.label} href={item.href} onClick={onClose} />
              </div>
            ))}
          </nav>

          <div className="flex shrink-0 flex-col items-center justify-between gap-4 px-6 pb-6 pt-4 text-sm text-white sm:flex-row sm:px-16 sm:text-base">
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="border-b border-white/80 transition-colors hover:border-accent hover:text-accent"
            >
              {COMPANY_INFO.email}
            </a>

            <div className="flex items-center gap-3">
              <span>Follow us</span>
              <span aria-hidden="true" className="h-px w-8 bg-white/60" />
              <SocialLinks />
            </div>

            {/* TODO: confirm the phone number in lib/constants.ts before launch. */}
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`}
              className="border-b border-white/80 transition-colors hover:border-accent hover:text-accent"
            >
              {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
