import Image from "next/image";
import Link from "next/link";
import { COMPANY_INFO } from "../../lib/constants";
import { placeholderImage } from "../../lib/placeholder";
import { CornerLink } from "../ui/CornerLink";

const SOCIAL_LINKS = [
  { label: "Instagram", href: COMPANY_INFO.socials.instagram },
  { label: "X (Twitter)", href: COMPANY_INFO.socials.twitter },
  { label: "LinkedIn", href: COMPANY_INFO.socials.linkedin },
  { label: "YouTube", href: COMPANY_INFO.socials.youtube },
  { label: "Facebook", href: COMPANY_INFO.socials.facebook },
];

const FOCUS_RING = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 overflow-hidden bg-black px-6 pb-8 pt-10 text-white sm:px-8">
      <div className="flex flex-col gap-5 border-b border-white/15 pb-5 text-sm font-semibold uppercase tracking-tight sm:text-base lg:flex-row lg:items-center lg:gap-40">
        <Link href="/" className={`shrink-0 ${FOCUS_RING}`}>
          {COMPANY_INFO.brandName}
        </Link>
        <ul
          aria-label="Social media"
          className="flex flex-1 flex-wrap justify-between gap-x-8 gap-y-3 text-white/55"
        >
          {SOCIAL_LINKS.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors hover:text-white ${FOCUS_RING}`}
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-20 grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_auto] lg:ml-[20%] lg:mr-[10%]">
        <div>
          <p className="flex items-center gap-2 text-sm text-white/60">
            <span aria-hidden="true" className="size-1.5 animate-pulse rounded-full bg-[#4da3ff]" />
            Available for new projects
          </p>
          <h2 className="mt-3 text-[clamp(2.25rem,4vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.04em]">
            Let&apos;s work
            <br />
            together
          </h2>
        </div>
        <CornerLink href="/contact">Book a call</CornerLink>
      </div>

      <a
        href={`mailto:${COMPANY_INFO.email}`}
        className={`mt-16 block whitespace-nowrap text-center font-heading text-[11.5vw] font-extrabold uppercase leading-[0.85] tracking-[-0.04em] transition-colors hover:text-[#4da3ff] ${FOCUS_RING}`}
      >
        Get in touch
      </a>

      <div className="relative mt-6 h-20 overflow-hidden rounded-xl sm:h-24">
        <Image src={placeholderImage("footer-strip", 2400, 300)} alt="" fill sizes="100vw" className="object-cover" />
      </div>

      <div className="mt-8 flex flex-wrap justify-between gap-4 text-sm text-white/50">
        <p>
          © {year} {COMPANY_INFO.name}. All rights reserved.
        </p>
        <p>
          {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}
        </p>
      </div>
    </footer>
  );
}
