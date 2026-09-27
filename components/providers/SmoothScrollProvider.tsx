"use client";

import type { ReactNode } from "react";
import type { LenisOptions } from "lenis";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

// Low lerp = slower, silkier catch-up. Lenis disables smoothing for prefers-reduced-motion by default.
const LENIS_OPTIONS = {
  lerp: 0.07,
  smoothWheel: true,
  wheelMultiplier: 0.9,
  touchMultiplier: 1.2,
  autoRaf: true,
} satisfies LenisOptions;

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={LENIS_OPTIONS}>
      {children}
    </ReactLenis>
  );
}
