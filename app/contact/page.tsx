import type { Metadata } from "next";
import { ContactHero } from "../../components/features/contact/ContactHero";
import { ContactSection } from "../../components/features/contact/ContactSection";
import { constructMetadata } from "../../lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Contact",
  canonical: "/contact",
  description:
    "Get in touch with Yexora IT Solutions about Virtual Reality, 3D visualization, website or web application projects.",
});

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactSection />
    </>
  );
}
