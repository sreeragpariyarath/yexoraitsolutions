type MenuIconProps = {
  isOpen?: boolean;
};

const EASE = "duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]";

// Tilted short lines at rest; straightens on hover and crosses into an X when open.
export function MenuIcon({ isOpen = false }: MenuIconProps) {
  return (
    <span
      aria-hidden="true"
      className={`relative flex size-8 transform-gpu flex-col items-center justify-center gap-1.5 transition-transform ${EASE} ${
        isOpen ? "rotate-0" : "-rotate-45 group-hover:rotate-0"
      }`}
    >
      <span
        className={`h-[2.5px] w-7 origin-center rounded-full bg-white transition-transform ${EASE} ${
          isOpen ? "translate-y-[7.5px] rotate-45" : "scale-x-[0.64] group-hover:scale-x-100"
        }`}
      />
      <span
        className={`h-[1.5px] w-7 rounded-full bg-white transition-all ${EASE} ${
          isOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
        }`}
      />
      <span
        className={`h-[2.5px] w-7 origin-center rounded-full bg-white transition-transform ${EASE} ${
          isOpen ? "translate-y-[-7.5px] -rotate-45" : "scale-x-[0.64] group-hover:scale-x-100"
        }`}
      />
    </span>
  );
}
