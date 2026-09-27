type SectionIndexProps = {
  index: string;
  label: string;
  headingId?: string;
};

export function SectionIndex({ index, label, headingId }: SectionIndexProps) {
  return (
    <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-tight sm:text-sm">
      <span className="tabular-nums opacity-45">{index}</span>
      <span aria-hidden="true" className="h-px flex-1 bg-current opacity-15" />
      <h2 id={headingId}>/{label}</h2>
    </div>
  );
}
