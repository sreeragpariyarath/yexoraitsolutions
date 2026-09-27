import { placeholderImage } from "../lib/placeholder";

export type ServiceWork = {
  title: string;
  meta: string;
  image: string;
};

export type Service = {
  title: string;
  description: string;
  works: [ServiceWork, ServiceWork];
};

const thumb = (seed: string) => placeholderImage(`service-${seed}`, 1000, 800);

export const SERVICES_CONTENT = {
  index: "04",
  label: "Services",
  watermark: "/what we do",
  title: "services",
  items: [
    {
      title: "Virtual Reality & AR",
      description:
        "Interactive virtual environments, digital twins, and enterprise VR training for industrial, medical, and educational teams.",
      works: [
        { title: "Training Simulation", meta: "VR / Concept", image: thumb("vr-1") },
        { title: "Virtual Walkthrough", meta: "AR / Concept", image: thumb("vr-2") },
      ],
    },
    {
      title: "3D Modeling & Visualization",
      description:
        "3D assets, animation, and real-time WebGL product visualizers for real estate, manufacturing, and retail.",
      works: [
        { title: "Product Visualizer", meta: "WebGL / Concept", image: thumb("3d-1") },
        { title: "Architectural Render", meta: "3D / Concept", image: thumb("3d-2") },
      ],
    },
    {
      title: "Website Development",
      description:
        "High-performance, SEO-focused business and enterprise websites with interactive, animated experiences.",
      works: [
        { title: "Brand Portal", meta: "Web / Concept", image: thumb("web-1") },
        { title: "Launch Microsite", meta: "Web / Concept", image: thumb("web-2") },
      ],
    },
    {
      title: "Web Application Development",
      description:
        "Custom web apps, SaaS platforms, admin dashboards, and API integrations built to scale in the cloud.",
      works: [
        { title: "Operations Dashboard", meta: "SaaS / Concept", image: thumb("app-1") },
        { title: "Client Portal", meta: "Web App / Concept", image: thumb("app-2") },
      ],
    },
  ] satisfies Service[],
} as const;
