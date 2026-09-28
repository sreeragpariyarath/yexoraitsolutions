import { CONTACT_CONTENT } from "../../../data/contact";
import { SectionShell } from "../../ui/SectionShell";
import { ContactDetails } from "./ContactDetails";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  const { index, label, watermark } = CONTACT_CONTENT.section;

  return (
    <SectionShell id="contact-form" index={index} label={label} watermark={watermark} compact className="bg-surface">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
        <ContactDetails />
        <ContactForm />
      </div>
    </SectionShell>
  );
}
