const CORNERS = [
  "left-0 top-0 border-l border-t group-hover:-translate-x-1.5 group-hover:-translate-y-1.5",
  "right-0 top-0 border-r border-t group-hover:translate-x-1.5 group-hover:-translate-y-1.5",
  "bottom-0 left-0 border-b border-l group-hover:-translate-x-1.5 group-hover:translate-y-1.5",
  "bottom-0 right-0 border-b border-r group-hover:translate-x-1.5 group-hover:translate-y-1.5",
];

export const CORNER_FRAME_CLASS =
  "group relative inline-flex min-w-56 items-center justify-center px-12 py-7 text-sm font-semibold uppercase tracking-wide focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current";

// Four corner brackets that spread apart when the parent `group` is hovered.
export function CornerFrame() {
  return (
    <>
      {CORNERS.map((position) => (
        <span
          key={position}
          aria-hidden="true"
          className={`absolute size-3 border-current transition-transform duration-500 ease-out ${position}`}
        />
      ))}
    </>
  );
}
