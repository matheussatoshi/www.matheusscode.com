import { mimic } from "@/lib/mimic";
import { Metadata } from "next";

export const constructMetadata = ({
  title,
  description,
  referrer = "strict-origin-when-cross-origin",
  keywords,
  icons = [
    {
      url: "/favicon.ico",
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "apple-touch-icon",
      sizes: "32x32",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
  ],
  creator = mimic.metadata.creator,
  ...rest
}: Metadata): Metadata => {
  const MIXED_KEYWORDS = Array.isArray(keywords)
    ? [...keywords, ...mimic.metadata.keywords]
    : mimic.metadata.keywords;

  return {
    title,
    description,
    icons,
    openGraph: {
      title: mimic.metadata.name,
      description: "",
      siteName: mimic.metadata.name,
      type: "website",
      locale: "pt_BR",
      countryName: "Brazil",
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    applicationName: mimic.metadata.name,
    //@ts-ignore
    appleWebApp: {
      title,
      capable: true,
      statusBarStyle: "default",
    },
    keywords: MIXED_KEYWORDS,
    referrer,
    creator,
    ...rest,
  };
};
