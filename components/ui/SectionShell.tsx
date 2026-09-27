import type { ReactNode } from "react";
import { SectionIndex } from "./SectionIndex";
import { VerticalWatermark } from "./VerticalWatermark";

type SectionShellProps = {
  id: string;
  index: string;
  label: string;
  watermark: string;
  className?: string;
  compact?: boolean;
  children: ReactNode;
};

// Stacks above the pinned hero (z-10) with the index row and a sticky vertical watermark column.
export function SectionShell({
  id,
  index,
  label,
  watermark,
  className = "",
  compact = false,
  children,
}: SectionShellProps) {
  const headingId = `${id}-heading`;
  const bottomSpacing = compact ? "pb-16 lg:pb-20" : "pb-24 lg:pb-32";
  const bodySpacing = compact ? "mt-10 lg:mt-14" : "mt-16 lg:mt-24";

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`relative z-10 px-6 pt-10 text-[#111] sm:px-8 ${bottomSpacing} ${className}`}
    >
      <SectionIndex index={index} label={label} headingId={headingId} />

      <div className={`grid gap-12 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-20 xl:gap-32 ${bodySpacing}`}>
        <VerticalWatermark className="lg:sticky lg:top-10 lg:self-start">{watermark}</VerticalWatermark>
        <div>{children}</div>
      </div>
    </section>
  );
}
