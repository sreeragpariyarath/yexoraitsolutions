import Image from "next/image";
import { PixelMark } from "../../ui/PixelMark";
import { SocialLinks } from "../../ui/SocialLinks";

const TEXT_SHADOW = "drop-shadow-[0_2px_16px_rgba(0,0,0,0.25)]";

// The hero is 150svh tall and scrolls normally until its bottom edge meets the viewport's bottom.
// sticky with top: -50svh (viewport height minus hero height) then pins it there while
// AboutSection, next in flow, slides up over it.
export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="sticky -top-[50svh] isolate flex h-[150svh] w-full flex-col items-center overflow-hidden bg-[#0a4bff] text-white"
    >
      <Image
        src="/hero-image.png"
        alt="Person wearing a VR headset, lit in a blue-to-cyan gradient"
        fill
        preload
        sizes="100vw"
        className="-z-10 object-cover object-center"
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

      <div
        className={`absolute inset-x-0 top-[52%] flex flex-col gap-6 px-6 sm:px-10 lg:top-1/2 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-[4.2vw] ${TEXT_SHADOW}`}
      >
        <h2 className="font-bebas text-[15vw] uppercase leading-[0.92] tracking-[-0.035em] sm:text-[10vw] lg:text-[4.5vw]">
          Immersive-first
          <br />
          Technology Studio
        </h2>

        <p className="max-w-[28em] font-poppins text-base uppercase leading-[1.45] tracking-[0.01em] sm:text-lg lg:max-w-[24em] lg:text-[1.1vw]">
          AN INDORE-BASED STUDIO CREATING IMMERSIVE VR, REAL-TIME 3D &
          HIGH-PERFORMANCE WEB EXPERIENCES FOR MODERN BUSINESSES.
        </p>
      </div>

      <div
        className={`absolute inset-x-0 bottom-[6%] flex flex-col gap-8 px-6 sm:bottom-auto sm:top-[84%] sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-[5.2vw] ${TEXT_SHADOW}`}
      >
        <div className="flex items-center gap-4 font-poppins text-lg font-medium lg:gap-[1vw] lg:text-[1.4vw]">
          <span>Follow us</span>
          <span
            aria-hidden="true"
            className="h-px w-12 bg-white/80 lg:w-[2.8vw]"
          />
          <SocialLinks iconClassName="size-6 lg:size-[1.4vw]" />
        </div>

        <div className="flex items-center gap-5 lg:gap-[1.8vw]">
          <PixelMark className="size-14 shrink-0 lg:size-[3.6vw]" />
          <div>
            {/* TODO: unverified figure — confirm or replace before launch. */}
            <p className="font-bebas text-5xl leading-none tracking-[-0.01em] lg:text-[3.1vw]">
              $200M+
            </p>
            <p className="mt-2 font-poppins text-sm uppercase lg:mt-[0.5vw] lg:text-[1.1vw]">
              Raised by clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
