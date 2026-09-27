import Image from "next/image";
import { ABOUT_CONTENT } from "../../../data/about";
import { CornerLink } from "../../ui/CornerLink";
import { Reveal } from "../../ui/Reveal";
import { SectionIndex } from "../../ui/SectionIndex";

export function AboutSection() {
  const { index, label, watermark, statement, body, image, cta } = ABOUT_CONTENT;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative z-10 bg-[#f4f4f2] px-6 pb-24 pt-10 text-[#111] shadow-[0_-40px_80px_rgba(0,0,0,0.35)] sm:px-8 lg:pb-32"
    >
      <SectionIndex index={index} label={label} headingId="about-heading" />

      <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-[auto_1fr] lg:gap-20 xl:gap-32">
        <p
          aria-hidden="true"
          className="hidden rotate-180 select-none font-heading text-[clamp(5rem,8vw,8.5rem)] font-extrabold leading-none tracking-[-0.05em] text-black/7 [writing-mode:vertical-rl] lg:block"
        >
          {watermark}
        </p>

        <div>
          <Reveal>
            <p className="text-[clamp(1.875rem,3.6vw,3.5rem)] font-medium leading-[1.1] tracking-[-0.035em]">
              {statement.map((segment) => (
                <span key={segment.text} className={segment.muted ? "text-black/35" : undefined}>
                  {segment.text}{" "}
                </span>
              ))}
            </p>
          </Reveal>

          <div className="mt-14 grid items-center gap-8 md:grid-cols-[auto_minmax(0,1fr)] lg:mt-20 xl:grid-cols-[auto_minmax(0,1fr)_auto] xl:gap-10">
            <Reveal delay={0.1}>
              <div className="relative aspect-16/7 w-full overflow-hidden rounded-2xl bg-[#0b1624] md:w-72">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 768px) 18rem, 100vw"
                  className="object-cover object-[72%_28%] transition-transform duration-1000 ease-out hover:scale-105"
                />
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="max-w-md text-base leading-relaxed text-black/70 sm:text-lg">{body}</p>
            </Reveal>

            <Reveal delay={0.3}>
              <CornerLink href={cta.href}>{cta.label}</CornerLink>
            </Reveal>
          </div>

          <div aria-hidden="true" className="mt-20 h-px bg-black/10 lg:mt-28" />
        </div>
      </div>
    </section>
  );
}
