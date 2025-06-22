import { fetcher } from "@/lib/fetcher";
import { revalidate } from "@/registry/registry-middleware";
import { Notion } from "./namespace";

export async function getEducation() {
  const response = await fetcher<Notion.MappedEducation[]>("/education", {
    method: "GET",
    cache: "force-cache",
    next: {
      revalidate,
      tags: ["get-education"],
    },
  });

  return response;
}
