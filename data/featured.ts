export type FeaturedProject = {
  title: string;
  category: string;
  status: string;
  image: { src: string; alt: string };
};

// Placeholder imagery and concept showcases until real case studies are approved.
const placeholder = (seed: string) => `https://picsum.photos/seed/${seed}/1920/1080`;

export const FEATURED_CONTENT = {
  index: "02",
  label: "Featured",
  watermark: "/featured",
  title: "selected works",
  projects: [
    {
      title: "Into the Virtual",
      category: "Virtual Reality",
      status: "Concept",
      image: { src: placeholder("yexora-vr"), alt: "Placeholder for a virtual reality showcase" },
    },
    {
      title: "Digital Twin Studio",
      category: "3D Visualization",
      status: "Concept",
      image: { src: placeholder("yexora-3d"), alt: "Placeholder for a 3D visualization showcase" },
    },
    {
      title: "Immersive Brand Portal",
      category: "Website Development",
      status: "Concept",
      image: { src: placeholder("yexora-web"), alt: "Placeholder for a website showcase" },
    },
    {
      title: "Operations Cloud",
      category: "Web Application",
      status: "Concept",
      image: { src: placeholder("yexora-app"), alt: "Placeholder for a web application showcase" },
    },
  ] satisfies FeaturedProject[],
} as const;
