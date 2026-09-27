import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="sticky top-0 isolate h-svh min-h-160 w-full overflow-hidden bg-[#0b1624] text-white"
    >
      <Image
        src="/hero-section.png"
        alt="Figure wearing a glowing neon-blue VR headset"
        fill
        preload
        sizes="100vw"
        className="-z-20 object-cover object-[68%_center] md:object-right"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(9,19,32,0.75)_0%,rgba(9,19,32,0.2)_45%,transparent_70%),linear-gradient(0deg,rgba(9,19,32,0.85)_0%,transparent_35%)]"
      />

      <div className="flex h-full flex-col px-6 pb-6 pt-28 sm:px-8">
     

        <h1
          id="hero-heading"
          className="mt-auto font-heading text-[clamp(3.25rem,11vw,10rem)] font-extrabold uppercase leading-[0.82] tracking-[-0.04em] sm:pl-[5vw]"
        >
          <span className="block">Build</span>
          <span className="block">Beyond</span>
        </h1>

        <div className="mt-6 flex items-center justify-between border-t border-white/15 pt-4 text-xs font-bold uppercase tracking-tight sm:text-sm">
          <span>Indore, India</span>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-1.5 rounded-full px-1 transition-colors hover:text-[#4da3ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Start a project
            <ArrowUpRight
              size={16}
              aria-hidden="true"
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
