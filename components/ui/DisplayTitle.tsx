import type { ReactNode } from "react";

export function DisplayTitle({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-end gap-[0.12em] font-heading text-[clamp(3.25rem,8.5vw,8rem)] font-extrabold lowercase leading-[0.85] tracking-[-0.05em]">
      <span aria-hidden="true" className="mb-[0.06em] flex gap-[0.04em]">
        <span className="size-[0.14em] rounded-full bg-current" />
        <span className="size-[0.14em] rounded-full bg-black/35" />
      </span>
      {children}
    </p>
  );
}
