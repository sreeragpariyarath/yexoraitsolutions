import type { ReactNode } from "react";
import Link from "next/link";

const CORNERS = [
  "left-0 top-0 border-l border-t group-hover:-translate-x-1.5 group-hover:-translate-y-1.5",
  "right-0 top-0 border-r border-t group-hover:translate-x-1.5 group-hover:-translate-y-1.5",
  "bottom-0 left-0 border-b border-l group-hover:-translate-x-1.5 group-hover:translate-y-1.5",
  "bottom-0 right-0 border-b border-r group-hover:translate-x-1.5 group-hover:translate-y-1.5",
];

type CornerLinkProps = {
  href: string;
  children: ReactNode;
};

export function CornerLink({ href, children }: CornerLinkProps) {
  return (
    <Link
      href={href}
      className="group relative inline-flex min-w-56 items-center justify-center px-12 py-7 text-sm font-semibold uppercase tracking-wide focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
    >
      {CORNERS.map((position) => (
        <span
          key={position}
          aria-hidden="true"
          className={`absolute size-3 border-current transition-transform duration-500 ease-out ${position}`}
        />
      ))}
      <span className="relative">{children}</span>
    </Link>
  );
}
