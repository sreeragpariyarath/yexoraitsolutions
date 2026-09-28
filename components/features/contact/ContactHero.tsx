import { CONTACT_CONTENT } from "../../../data/contact";

export function ContactHero() {
  return (
    <section aria-labelledby="contact-heading" className="bg-[#0b1624] text-white">
      {/* Clears the site header, which is white and sits over this dark band. */}
      <div aria-hidden="true" className="h-17" />

      <div className="px-6 pb-14 pt-[6vh] sm:px-10 lg:px-[4.2vw] lg:pb-20">
        <h1 id="contact-heading" className="font-bebas text-[20vw] uppercase leading-[0.85] sm:text-[16vw] lg:text-[11vw]">
          {CONTACT_CONTENT.title}
        </h1>
        <p className="mt-6 max-w-[34em] font-poppins text-sm uppercase leading-[1.45] tracking-[0.01em] text-white/80 sm:text-base lg:text-[1.1vw]">
          {CONTACT_CONTENT.intro}
        </p>
      </div>
    </section>
  );
}
