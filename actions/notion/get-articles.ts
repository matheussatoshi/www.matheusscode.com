"use server";

import { fetcher } from "@/lib/fetcher";
import { Notion } from "./namespace";

export async function getArticles() {
  const response = await fetcher<Notion.MappedArticles[]>("/writings", {
    method: "GET",
    cache: "force-cache",
    next: {
      revalidate: 7200,
      tags: ["get-articles"],
    },
  });

  return response;
}

export async function getArticle(slug: string) {
  const response = await fetcher<Notion.MappedArticles & { content: string }>(
    `/writings/${slug}`,
    {
      method: "GET",
      cache: "force-cache",
      next: {
        revalidate: 7200,
        tags: ["get-article"],
      },
    },
  );

  return response;
}
