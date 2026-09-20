export const COMPANY_INFO = {
  name: "Yexora IT Solutions Private Limited",
  brandName: "Yexora",
  tagline: "Immersive 3D Technologies & Modern Web Engineering",
  description:
    "Yexora IT Solutions Private Limited is an innovative technology company based in Indore, India. We engineer high-performance Virtual Reality experiences, interactive 3D visualizations, modern business websites, and scalable web applications.",
  url: "https://yexoraitsolutions.com",
  email: "contact@yexoraitsolutions.com",
  phone: "+91 731 4000000",
  address: {
    street: "Indore Tech Park / Commercial Hub",
    city: "Indore",
    state: "Madhya Pradesh",
    country: "India",
    postalCode: "452001",
  },
  socials: {
    linkedin: "https://linkedin.com/company/yexora-it-solutions",
    twitter: "https://twitter.com/yexoraitsolutions",
    github: "https://github.com/yexoraitsolutions",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Virtual Reality", href: "/services/virtual-reality" },
      { label: "3D Modeling & Visualization", href: "/services/3d-modeling-visualization" },
      { label: "Website Development", href: "/services/website-development" },
      { label: "Web Application Development", href: "/services/web-application-development" },
    ],
  },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_LINKS = {
  company: [
    { label: "About Yexora", href: "/about" },
    { label: "Engineering Process", href: "/process" },
    { label: "Featured Work", href: "/work" },
    { label: "Contact Us", href: "/contact" },
  ],
  services: [
    { label: "Virtual Reality (VR)", href: "/services/virtual-reality" },
    { label: "3D Modeling & Visualization", href: "/services/3d-modeling-visualization" },
    { label: "Website Development", href: "/services/website-development" },
    { label: "Web Application Development", href: "/services/web-application-development" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
} as const;
