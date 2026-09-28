import Image from "next/image";
import type { Service } from "../../../data/services";
import { MediaCaption } from "../../ui/MediaCaption";

type ServiceRowProps = {
  service: Service;
};

// Rows pin at the same offset, so each next service slides over the one before it.
export function ServiceRow({ service }: ServiceRowProps) {
  const { title, description, works } = service;

  return (
    <article className="sticky top-6 grid gap-8 border-t border-black/10 bg-surface py-8 first:border-t-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-12 lg:py-10">
      <div>
        <h3 className="text-[clamp(2rem,3.4vw,3.25rem)] font-medium leading-[1.05] tracking-[-0.04em]">{title}</h3>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-black/70 sm:text-lg">{description}</p>
      </div>

      <ul className="grid grid-cols-2 gap-3">
        {works.map((work) => (
          <li key={work.title} className="group">
            <div className="relative aspect-3/2 overflow-hidden rounded-xl bg-black/10">
              <Image
                src={work.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 22vw, 50vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
            </div>
            <MediaCaption title={work.title} meta={work.meta} className="mt-4" />
          </li>
        ))}
      </ul>
    </article>
  );
}
