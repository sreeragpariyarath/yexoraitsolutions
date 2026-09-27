import type { ReactNode } from "react";
import Image from "next/image";

type BentoCardProps = {
  children: ReactNode;
  image?: string;
  tone?: "light" | "dark";
  className?: string;
};

export function BentoCard({ children, image, tone = "light", className = "" }: BentoCardProps) {
  const isDark = tone === "dark";

  return (
    <article
      className={`group relative isolate overflow-hidden rounded-2xl p-6 sm:p-8 ${
        isDark ? "bg-[#111] text-white" : "bg-white text-[#111]"
      } ${className}`}
    >
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="-z-20 object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />
          <div aria-hidden="true" className={`absolute inset-0 -z-10 ${isDark ? "bg-black/50" : "bg-white/40"}`} />
        </>
      )}
      {children}
    </article>
  );
}
