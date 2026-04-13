import type { Metadata } from "next";
import { brand } from "@/content/site";

const BASE_URL = brand.url;

interface PageMetaOptions {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}

export function createMetadata({
  title,
  description,
  path = "",
  ogImage,
}: PageMetaOptions): Metadata {
  const fullTitle =
    path === "" || path === "/"
      ? `${brand.name} | Modern Websites for Local Service Businesses`
      : `${title} | ${brand.name}`;

  const url = `${BASE_URL}${path}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: brand.name,
      locale: "en_US",
      type: "website",
      images: ogImage
        ? [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: brand.name,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
    keywords: [
      "small business website",
      "local service business website",
      "website design",
      "web designer Colorado",
      "small business web design",
      "website redesign",
      "lead generation website",
    ],
  };
}
