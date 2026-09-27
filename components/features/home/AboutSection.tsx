import Image from "next/image";
import { ABOUT_CONTENT } from "../../../data/about";
import { CornerLink } from "../../ui/CornerLink";
import { Reveal } from "../../ui/Reveal";
import { SectionShell } from "../../ui/SectionShell";

export function AboutSection() {
  const { index, label, watermark, statement, body, image, cta } =
    ABOUT_CONTENT;

  return (
    <SectionShell
      id="about"
      index={index}
      label={label}
      watermark={watermark}
      compact
      className="bg-white shadow-[0_-40px_80px_rgba(0,0,0,0.35)]"
    >
      <Reveal>
        <p className="max-w-6xl text-[clamp(1.5rem,2.7vw,2.75rem)] font-medium leading-[1.2] tracking-[-0.035em]">
          {statement.map((segment) => (
            <span
              key={segment.text}
              className={segment.muted ? "text-black/35" : undefined}
            >
              {segment.text}{" "}
            </span>
          ))}
        </p>
      </Reveal>

      <div className="mt-8 flex flex-col gap-6 md:flex-row md:flex-wrap md:items-center lg:mt-12">
        <Reveal delay={0.1}>
          <div className="relative aspect-16/7 w-full overflow-hidden rounded-xl bg-[#0b1624] md:w-60">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 768px) 15rem, 100vw"
              className="object-cover object-[72%_28%] transition-transform duration-1000 ease-out hover:scale-105"
            />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="max-w-md text-[15px] leading-relaxed text-black/70 sm:text-base">
            {body}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <CornerLink href={cta.href}>{cta.label}</CornerLink>
        </Reveal>
      </div>
    </SectionShell>
  );
}
