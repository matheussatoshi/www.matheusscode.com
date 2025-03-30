import { HOME_DOMAIN } from "@/registry/registry-constants";
import { Metadata } from "next";

export function constructMetadata({
  title = `${process.env.NEXT_PUBLIC_APP_NAME} - Software Engineer | Front-end Developer | System Analyst`,
  description = `A brief biography about me and my exploits in the world of software development`,
  image = "https://github.com/user-attachments/assets/4cc1ef02-e07f-471f-9385-cc2854854d84",
  icons = [
    {
      rel: "apple-touch",
      sizes: "32x32",
      url: "/apple-touch.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
  ],
  canonicalUrl,
}: {
  title?: string;
  description?: string;
  image?: string | null;
  video?: string | null;
  icons?: Metadata["icons"];
  canonicalUrl?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      ...(image && {
        images: image,
      }), 
    },
    icons,
    metadataBase: new URL(HOME_DOMAIN),
    ...(canonicalUrl && {
      alternates: {
        canonical: canonicalUrl,
      },
    }),
  };
}
