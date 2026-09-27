import Image from "next/image";
import type { FeaturedProject } from "../../../data/featured";

type FeaturedCardProps = {
  project: FeaturedProject;
};

// Every card pins at the same offset, so each next card slides up and covers the previous one.
export function FeaturedCard({ project }: FeaturedCardProps) {
  const { title, category, status, image } = project;

  return (
    <article className="group sticky top-[4svh] bg-[#ebebe8] pb-8">
      <div className="relative h-[60svh] overflow-hidden rounded-2xl bg-black/10 sm:h-[78svh]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 75vw, 100vw"
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-5 text-sm uppercase sm:text-base">
        <h3 className="font-semibold tracking-tight">{title}</h3>
        <p className="text-black/60">
          {category} / {status}
        </p>
      </div>
    </article>
  );
}
