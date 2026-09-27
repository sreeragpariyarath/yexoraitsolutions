import { Box, Glasses, Globe } from "lucide-react";
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
const CARD_HEADING = "text-[clamp(1.75rem,2.6vw,2.5rem)] font-medium leading-none tracking-[-0.04em]";

export function PrinciplesSection() {
  const { index, label, watermark, title, intro, statement, cards } = PRINCIPLES_CONTENT;

  return (
    <SectionShell id="principles" index={index} label={label} watermark={watermark} className="bg-surface">
      <Reveal>
        <DisplayTitle>{title}</DisplayTitle>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16">
        <Reveal>
          <p className="max-w-xs text-[13px] leading-relaxed text-black/70 sm:text-base">{intro}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-[clamp(1.5rem,2.6vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.035em]">{statement}</p>
        </Reveal>
      </div>

      <div className="mt-10 grid gap-3 lg:mt-14">
        <Reveal className="grid gap-3 md:grid-cols-2">
          <BentoCard
            image={cards.transparency.image}
            tone="dark"
            className="flex min-h-72 flex-col items-center justify-center text-center lg:min-h-92"
          >
            <h3 className={CARD_HEADING}>{cards.transparency.title}</h3>
            <p className="mt-4 max-w-xs text-sm leading-snug sm:text-[13px] text-white/90">{cards.transparency.text}</p>
          </BentoCard>

          <BentoCard image={cards.aesthetics.image} className="flex min-h-72 flex-col justify-between lg:min-h-92">
            <p className="max-w-sm text-sm text-black/75">{cards.aesthetics.text}</p>
            <h3 className={CARD_HEADING}>{cards.aesthetics.title}</h3>
          </BentoCard>
        </Reveal>

        <Reveal delay={0.1} className="grid gap-3 md:grid-cols-2 lg:grid-cols-[1.2fr_1.2fr_1fr]">
          <BentoCard className="flex min-h-64 flex-col items-center justify-center gap-5 text-center">
            <div aria-hidden="true" className="flex gap-4">
              {TECH_ICONS.map(({ name, Icon }) => (
                <Icon key={name} size={28} strokeWidth={1.75} />
              ))}
            </div>
            <h3 className="max-w-44 text-base font-semibold uppercase leading-tight tracking-tight">
              {cards.honesty.title}
            </h3>
          </BentoCard>

          <BentoCard image={cards.value.image} tone="dark" className="flex min-h-64 flex-col justify-end">
            <h3 className="text-base font-semibold uppercase tracking-tight">{cards.value.title}</h3>
            <p className="mt-2 text-sm text-white/85 sm:text-[13px]">{cards.value.text}</p>
          </BentoCard>

          <div className="grid gap-3 md:col-span-2 lg:col-span-1 lg:grid-rows-[3fr_2fr]">
            <BentoCard image={cards.ownership.image} tone="dark" className="flex min-h-36 flex-col justify-between">
              <span className="font-mono text-sm uppercase tracking-[0.2em]">{cards.ownership.label}</span>
              <p className="mt-6 max-w-56 text-sm leading-snug sm:text-[13px]">{cards.ownership.text}</p>
            </BentoCard>

            <BentoCard className="flex items-center gap-4">
              <span aria-hidden="true" className="shrink-0 text-4xl font-light leading-none text-[#DFDFDF]">
                ©
              </span>
              <p className="max-w-52 text-sm leading-snug sm:text-[13px]">{cards.licensing.text}</p>
            </BentoCard>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
