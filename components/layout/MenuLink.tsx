import Link from "next/link";

type MenuLinkProps = {
  label: string;
  href: string;
  onClick?: () => void;
};

const MOTION = "duration-[650ms] ease-[cubic-bezier(0.65,0,0.35,1)]";

// On hover the grey word lifts away letter by letter while a white copy rises in beneath it,
// and an accent fill grows up from the row's bottom border.
export function MenuLink({ label, href, onClick }: MenuLinkProps) {
  const renderLetters = (className: string) =>
    label.split("").map((char, index) => (
      <span
        key={index}
        className={`inline-block transition-[translate,opacity] will-change-[translate,opacity] ${MOTION} ${className}`}
        style={{ transitionDelay: `${index * 30}ms` }}
      >
        {char === " " ? " " : char}
      </span>
    ));

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-label={label}
      className="group relative isolate flex justify-center overflow-hidden border-b border-white/20 transition-colors hover:border-accent focus:outline-none focus-visible:border-accent"
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 origin-bottom scale-y-0 bg-accent transition-transform group-hover:scale-y-100 group-focus-visible:scale-y-100 ${MOTION}`}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none relative z-10 -mb-[0.17em] inline-block whitespace-nowrap pt-2 font-bebas text-[15vw] uppercase leading-[0.95] sm:text-7xl"
      >
        <span className="block">
          {renderLetters(
            "text-white/45 group-hover:-translate-y-full group-hover:opacity-0 group-focus-visible:-translate-y-full group-focus-visible:opacity-0",
          )}
        </span>
        <span className="absolute inset-0 pt-2">
          {renderLetters(
            "translate-y-full text-white opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100",
          )}
        </span>
      </span>
    </Link>
  );
}
