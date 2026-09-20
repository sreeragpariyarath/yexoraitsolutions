import type { Metadata } from "next";
import { COMPANY_INFO } from "./constants";

interface ConstructMetadataProps {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description = COMPANY_INFO.description,
  image = "/logo/yexora-logo-full.png",
  canonical = "/",
  noIndex = false,
}: ConstructMetadataProps = {}): Metadata {
  const pageTitle = title
    ? `${title} | ${COMPANY_INFO.brandName}`
    : `${COMPANY_INFO.name} - Immersive 3D & Modern Web Engineering`;

  const canonicalUrl = `${COMPANY_INFO.url}${canonical}`;

  return {
    title: pageTitle,
    description,
    keywords: [
      "Virtual Reality",
      "VR Development",
      "3D Modeling",
      "3D Visualization",
      "Website Development",
      "Web Application Development",
      "Software Engineering",
      "Yexora IT Solutions",
      "Indore Technology Company",
      "Interactive 3D Web",
      "SaaS Engineering",
    ],
    authors: [{ name: COMPANY_INFO.name, url: COMPANY_INFO.url }],
    creator: COMPANY_INFO.name,
    publisher: COMPANY_INFO.name,
    metadataBase: new URL(COMPANY_INFO.url),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description,
      url: canonicalUrl,
      siteName: COMPANY_INFO.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${COMPANY_INFO.brandName} - ${pageTitle}`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [image],
      creator: "@yexoraitsolutions",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/logo/yexora-icon.png",
    },
  };
}
