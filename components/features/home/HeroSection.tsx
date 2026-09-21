import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 via-slate-100/60 to-slate-200/40 pt-16">
      {/* Background Watermark Headline */}
      <div
        className="pointer-events-none select-none absolute top-[30%] sm:top-[28%] md:top-[26%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 whitespace-nowrap leading-none"
        aria-hidden="true"
      >
        <span className="font-striker text-[11vw] font-bold tracking-[0.12em] uppercase text-slate-900/[0.06] drop-shadow-sm">
          VISION ENGINE
        </span>
      </div>

      {/* Left Headline */}
      <div className="absolute left-6 sm:left-12 lg:left-20 top-[42%] md:top-[49%] -translate-y-1/2 z-20 max-w-xs sm:max-w-sm lg:max-w-2xl pointer-events-none select-none">
        <h1 className="font-sans text-xl sm:text-2xl md:text-3xl lg:text-[43px] font-medium tracking-tight text-slate-900 leading-[1.2]">
          <span> Building digital worlds.</span>
          <br />
          <span className="pl-7"> Engineering what's next.</span>
        </h1>
      </div>

      {/* Centered Character Frame */}
      <div className="relative z-10 flex items-end justify-center w-full h-full max-w-6xl mx-auto px-4 translate-y-14 sm:translate-y-20">
        <Image
          src="/hero-character.png"
          alt="Hero Character"
          width={1448}
          height={1086}
          priority
          className="max-h-[78vh] w-auto object-contain select-none pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
        />
      </div>
    </section>
  );
}
