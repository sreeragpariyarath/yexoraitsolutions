import type { ReactNode } from "react";

type VerticalWatermarkProps = {
  children: ReactNode;
  className?: string;
};

export function VerticalWatermark({ children, className = "" }: VerticalWatermarkProps) {
  return (
    <p
      aria-hidden="true"
      className={`hidden rotate-180 select-none font-heading text-[clamp(5rem,8vw,8.5rem)] font-extrabold leading-none tracking-[-0.05em] text-black/7 [writing-mode:vertical-rl] lg:block ${className}`}
    >
      {children}
    </p>
  );
}
