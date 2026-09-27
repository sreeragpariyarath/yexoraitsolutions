import { Box, Copyright, Glasses, Globe } from "lucide-react";
import { PRINCIPLES_CONTENT } from "../../../data/principles";
import { BentoCard } from "../../ui/BentoCard";
import { DisplayTitle } from "../../ui/DisplayTitle";
import { Reveal } from "../../ui/Reveal";
import { SectionShell } from "../../ui/SectionShell";

const TECH_ICONS = [
  { name: "vr", Icon: Glasses },
  { name: "3d", Icon: Box },
  { name: "web", Icon: Globe },
];
const CARD_HEADING = "text-[clamp(2.25rem,3.6vw,3.5rem)] font-medium leading-none tracking-[-0.04em]";

export function PrinciplesSection() {
  const { index, label, watermark, title, intro, statement, cards } = PRINCIPLES_CONTENT;

  return (
    <SectionShell id="principles" index={index} label={label} watermark={watermark} className="bg-[#f4f4f2]">
      <Reveal>
        <DisplayTitle>{title}</DisplayTitle>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16">
        <Reveal>
          <p className="max-w-xs text-base leading-relaxed text-black/70 sm:text-lg">{intro}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-[clamp(1.75rem,3vw,3rem)] font-medium leading-[1.1] tracking-[-0.035em]">{statement}</p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-3 lg:mt-20">
        <Reveal className="grid gap-3 md:grid-cols-2">
          <BentoCard
            image={cards.transparency.image}
            tone="dark"
            className="flex min-h-88 flex-col items-center justify-center text-center lg:min-h-120"
          >
            <h3 className={CARD_HEADING}>{cards.transparency.title}</h3>
            <p className="mt-5 max-w-xs text-lg leading-snug text-white/90">{cards.transparency.text}</p>
          </BentoCard>

          <BentoCard image={cards.aesthetics.image} className="flex min-h-88 flex-col justify-between lg:min-h-120">
            <p className="max-w-sm text-base text-black/75">{cards.aesthetics.text}</p>
            <h3 className={CARD_HEADING}>{cards.aesthetics.title}</h3>
          </BentoCard>
        </Reveal>

        <Reveal delay={0.1} className="grid gap-3 md:grid-cols-2 lg:grid-cols-[1.2fr_1.2fr_1fr]">
          <BentoCard className="flex min-h-80 flex-col items-center justify-center gap-6 text-center">
            <div aria-hidden="true" className="flex gap-4">
              {TECH_ICONS.map(({ name, Icon }) => (
                <Icon key={name} size={34} strokeWidth={1.75} />
              ))}
            </div>
            <h3 className="max-w-48 text-lg font-semibold uppercase leading-tight tracking-tight">
              {cards.honesty.title}
            </h3>
          </BentoCard>

          <BentoCard image={cards.value.image} tone="dark" className="flex min-h-80 flex-col justify-end">
            <h3 className="text-lg font-semibold uppercase tracking-tight">{cards.value.title}</h3>
            <p className="mt-3 text-lg text-white/85">{cards.value.text}</p>
          </BentoCard>

          <div className="grid gap-3 md:col-span-2 lg:col-span-1 lg:grid-rows-[3fr_2fr]">
            <BentoCard image={cards.ownership.image} tone="dark" className="flex min-h-48 flex-col justify-between">
              <span className="font-mono text-lg uppercase tracking-[0.2em]">{cards.ownership.label}</span>
              <p className="mt-8 max-w-60 text-lg leading-snug">{cards.ownership.text}</p>
            </BentoCard>

            <BentoCard className="flex items-center gap-4">
              <Copyright aria-hidden="true" size={36} strokeWidth={1.25} className="shrink-0 text-black/40" />
              <p className="max-w-52 text-lg leading-snug">{cards.licensing.text}</p>
            </BentoCard>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
