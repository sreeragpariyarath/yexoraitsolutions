import type { ReactNode } from "react";

type VerticalWatermarkProps = {
  children: ReactNode;
  className?: string;
};

export function VerticalWatermark({ children, className = "" }: VerticalWatermarkProps) {
  return (
    <p
      aria-hidden="true"
      className={`hidden rotate-180 select-none font-heading text-[clamp(4.5rem,7vw,7.25rem)] font-extrabold leading-none tracking-tighter text-black/7 [writing-mode:vertical-rl] lg:block ${className}`}
    >
      {children}
    </p>
  );
}
