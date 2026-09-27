import { FEATURED_CONTENT } from "../../../data/featured";
import { DisplayTitle } from "../../ui/DisplayTitle";
import { Reveal } from "../../ui/Reveal";
import { SectionShell } from "../../ui/SectionShell";
import { FeaturedCard } from "./FeaturedCard";

export function FeaturedSection() {
  const { index, label, watermark, title, projects } = FEATURED_CONTENT;

  return (
    <SectionShell id="featured" index={index} label={label} watermark={watermark} className="bg-[#ebebe8]">
      <Reveal>
        <DisplayTitle>{title}</DisplayTitle>
      </Reveal>

      <div className="mt-12 flex flex-col gap-10 lg:mt-16">
        {projects.map((project) => (
          <FeaturedCard key={project.title} project={project} />
        ))}
      </div>
    </SectionShell>
  );
}
