import type { ReactNode } from "react";
import Link from "next/link";
import { CORNER_FRAME_CLASS, CornerFrame } from "./CornerFrame";

type CornerLinkProps = {
  href: string;
  children: ReactNode;
};

export function CornerLink({ href, children }: CornerLinkProps) {
  return (
    <Link href={href} className={CORNER_FRAME_CLASS}>
      <CornerFrame />
      <span className="relative">{children}</span>
    </Link>
  );
}
