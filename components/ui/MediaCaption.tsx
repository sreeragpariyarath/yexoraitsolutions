type MediaCaptionProps = {
  title: string;
  meta: string;
  className?: string;
};

export function MediaCaption({ title, meta, className = "" }: MediaCaptionProps) {
  return (
    <div className={`text-sm uppercase sm:text-base ${className}`}>
      <h3 className="font-semibold tracking-tight">{title}</h3>
      <p className="text-black/60">{meta}</p>
    </div>
  );
}
