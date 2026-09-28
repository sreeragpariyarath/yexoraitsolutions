export const CONTACT_CONTENT = {
  title: "Let's talk",
  intro: "Tell us about your VR, 3D, website or web application project — we'll reply with clear next steps.",
  section: { index: "01", label: "Contact", watermark: "/get in touch" },
  detailsIntro: "Prefer email? Write to us directly, or use the form and we'll get back to you.",
  success: {
    title: "Thanks",
    text: "Your message is on its way. We'll be in touch within 1–2 business days.",
  },
} as const;

export const SERVICE_OPTIONS = [
  "Virtual Reality & AR",
  "3D Modeling & Visualization",
  "Website Development",
  "Web Application Development",
  "Not sure yet",
] as const;

export const BUDGET_OPTIONS = [
  "Under $2k",
  "$2k – $10k",
  "$10k – $25k",
  "$25k – $50k",
  "$50k+",
  "Not sure yet",
] as const;

export const COUNTRY_OPTIONS = [
  "India",
  "United States",
  "United Kingdom",
  "United Arab Emirates",
  "Saudi Arabia",
  "Canada",
  "Australia",
  "Germany",
  "Singapore",
  "Other",
] as const;
