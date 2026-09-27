import type { ReactNode } from "react";
import { SectionIndex } from "./SectionIndex";
import { VerticalWatermark } from "./VerticalWatermark";

type SectionShellProps = {
  id: string;
  index: string;
  label: string;
  watermark: string;
  className?: string;
  children: ReactNode;
};

// Stacks above the pinned hero (z-10) with the index row and a sticky vertical watermark column.
export function SectionShell({ id, index, label, watermark, className = "", children }: SectionShellProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`relative z-10 px-6 pb-24 pt-10 text-[#111] sm:px-8 lg:pb-32 ${className}`}
    >
      <SectionIndex index={index} label={label} headingId={headingId} />

      <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-20 xl:gap-32">
        <VerticalWatermark className="lg:sticky lg:top-10 lg:self-start">{watermark}</VerticalWatermark>
        <div>{children}</div>
      </div>
    </section>
  );
}
