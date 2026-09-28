import Image from "next/image";
import { PixelMark } from "../../ui/PixelMark";
import { SocialLinks } from "../../ui/SocialLinks";

const TEXT_SHADOW = "drop-shadow-[0_2px_16px_rgba(0,0,0,0.25)]";

// Mobile: about two-thirds of a screen tall, content centred and stacked at the bottom, pinned at top-0 so the
// next section slides over it.
// Desktop (lg): 150svh tall and scrolls until its bottom meets the viewport's bottom, then
// sticky -50svh (viewport minus hero height) pins it while AboutSection slides over.
export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="sticky top-0 isolate flex h-[68svh] min-h-144 w-full flex-col items-center overflow-hidden bg-[#0a4bff] text-white lg:top-[-50svh] lg:h-[150svh]"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-image.png"
          alt="Person wearing a VR headset, lit in a blue-to-cyan gradient"
          fill
          preload
          sizes="100vw"
          className="object-cover object-[55%_center] lg:object-center"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-t from-black/50 via-black/10 via-45% to-transparent lg:hidden"
      />

      {/* Clears the absolutely positioned site header. */}
      <div aria-hidden="true" className="h-17 shrink-0" />

      <div className="pointer-events-none flex w-full select-none justify-center px-2 pt-[4vh] sm:pt-[6vh] lg:pt-[10vh]">
        <h1
          id="hero-heading"
          className="whitespace-nowrap text-center font-bebas text-[13.65vw] font-bold uppercase leading-none"
        >
          Yexora IT Solutions
        </h1>
      </div>

      {/* In flow and centred on mobile; `lg:contents` hands both rows to the section for absolute placement. */}
      <div className={`mt-auto flex w-full flex-col items-center gap-5 px-6 pb-8 text-center sm:px-10 lg:contents ${TEXT_SHADOW}`}>
        <div
          className={`flex flex-col items-center gap-4 lg:absolute lg:inset-x-0 lg:top-1/2 lg:flex-row lg:justify-between lg:gap-12 lg:px-[4.2vw] lg:text-left ${TEXT_SHADOW}`}
        >
          <h2 className="font-bebas text-[7.4vw] uppercase leading-[0.92] tracking-[-0.02em] sm:text-[6vw] lg:text-[4.5vw] lg:tracking-[-0.035em]">
            Immersive-first <br className="hidden lg:block" />
            Technology Studio
          </h2>

          <p className="max-w-sm font-poppins text-sm uppercase leading-[1.45] tracking-[0.01em] sm:max-w-md sm:text-base lg:max-w-[24em] lg:text-[1.1vw]">
            An Indore-based studio creating immersive VR, real-time 3D &amp; high-performance web experiences for
            modern businesses.
          </p>
        </div>

        <div
          className={`flex flex-col items-center gap-5 lg:absolute lg:inset-x-0 lg:top-[84%] lg:flex-row lg:justify-between lg:gap-8 lg:px-[5.2vw] ${TEXT_SHADOW}`}
        >
          <div className="flex items-center gap-4 font-poppins text-base font-medium lg:gap-[1vw] lg:text-[1.4vw]">
            <span>Follow us</span>
            <span aria-hidden="true" className="h-px w-12 bg-white/80 lg:w-[2.8vw]" />
            <SocialLinks iconClassName="size-5 lg:size-[1.4vw]" />
          </div>

          <div className="flex items-center gap-4 text-left lg:gap-[1.8vw]">
            <PixelMark className="size-11 shrink-0 lg:size-[3.6vw]" />
            <div>
              {/* TODO: unverified figure — confirm or replace before launch. */}
              <p className="font-bebas text-4xl leading-none tracking-[-0.01em] lg:text-[3.1vw]">$200M+</p>
              <p className="mt-1.5 font-poppins text-xs uppercase lg:mt-[0.5vw] lg:text-[1.1vw]">Raised by clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
