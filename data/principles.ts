import { placeholderImage } from "../lib/placeholder";

export const PRINCIPLES_CONTENT = {
  index: "03",
  label: "Principles",
  watermark: "/principles",
  title: "work principles",
  intro: "Solutions are tailored for VR headsets, real-time 3D, the web, and the cloud.",
  statement: "Every project is shaped around the client and their business.",
  cards: {
    transparency: {
      title: "Transparency",
      text: "We align on goals, scope, and outcomes before we start.",
      image: placeholderImage("principle-transparency", 1600, 1000),
    },
    aesthetics: {
      title: "Smart aesthetics",
      text: "Not beauty for its own sake — clarity, performance, and impact.",
      image: placeholderImage("principle-aesthetics", 1600, 1000),
    },
    honesty: {
      title: "Honesty about technology",
    },
    value: {
      title: "Value-driven engineering",
      text: "Every pixel and polygon serves your goals.",
      image: placeholderImage("principle-value", 1200, 900),
    },
    ownership: {
      label: "On schedule",
      text: "We respect deadlines and take full ownership of quality.",
      image: placeholderImage("principle-ownership", 1000, 700),
    },
    licensing: {
      text: "We only use properly licensed assets and code.",
    },
  },
} as const;
