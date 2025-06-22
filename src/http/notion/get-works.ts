import { fetcher } from "@/lib/fetcher";
import { revalidate } from "@/registry/registry-middleware";
import { Notion } from "./namespace";

export async function getWorks() {
  const response = await fetcher<Notion.MappedWorks[]>("/works", {
    method: "GET",
    cache: "force-cache",
    next: {
      revalidate,
      tags: ["get-works"],
    },
  });

  return response;
}
