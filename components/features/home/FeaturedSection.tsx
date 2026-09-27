import { FEATURED_CONTENT } from "../../../data/featured";
import { Reveal } from "../../ui/Reveal";
import { SectionShell } from "../../ui/SectionShell";
import { FeaturedCard } from "./FeaturedCard";

export function FeaturedSection() {
  const { index, label, watermark, title, projects } = FEATURED_CONTENT;

  return (
    <SectionShell id="featured" index={index} label={label} watermark={watermark} className="bg-[#ebebe8]">
      <Reveal>
        <p className="flex items-end gap-[0.12em] font-heading text-[clamp(3.25rem,8.5vw,8rem)] font-extrabold lowercase leading-[0.85] tracking-[-0.05em]">
          <span aria-hidden="true" className="mb-[0.06em] flex gap-[0.04em]">
            <span className="size-[0.14em] rounded-full bg-current" />
            <span className="size-[0.14em] rounded-full bg-black/35" />
          </span>
          {title}
        </p>
      </Reveal>

      <div className="mt-12 flex flex-col gap-10 lg:mt-16">
        {projects.map((project) => (
          <FeaturedCard key={project.title} project={project} />
        ))}
      </div>
    </SectionShell>
  );
}
