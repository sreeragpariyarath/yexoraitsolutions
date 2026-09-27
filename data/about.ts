export type StatementSegment = {
  text: string;
  muted?: boolean;
};

export const ABOUT_CONTENT = {
  index: "01",
  label: "About Us",
  watermark: "/about us",
  statement: [
    { text: "We engineer immersive digital worlds where design meets technology." },
    {
      text: "Our work blends spatial computing with high-performance web engineering —",
      muted: true,
    },
    { text: "built to solve real business problems." },
  ] satisfies StatementSegment[],
  body: "Yexora IT Solutions is a technology company based in Indore, India. We build Virtual Reality experiences, 3D visualizations, modern websites, and scalable web applications for teams in manufacturing, real estate, education, healthcare, and SaaS.",
  image: {
    src: "/hero-section.png",
    alt: "Neon-lit virtual reality headset",
  },
  cta: { label: "Our Services", href: "/services" },
} as const;
