import { SERVICES_CONTENT } from "../../../data/services";
import { DisplayTitle } from "../../ui/DisplayTitle";
import { Reveal } from "../../ui/Reveal";
import { SectionShell } from "../../ui/SectionShell";
import { ServiceRow } from "./ServiceRow";

export function ServicesSection() {
  const { index, label, watermark, title, items } = SERVICES_CONTENT;

  return (
    <SectionShell id="services" index={index} label={label} watermark={watermark} className="bg-surface">
      <Reveal>
        <DisplayTitle>{title}</DisplayTitle>
      </Reveal>

      <div className="mt-12 lg:mt-16">
        {items.map((service) => (
          <ServiceRow key={service.title} service={service} />
        ))}
      </div>
    </SectionShell>
  );
}
