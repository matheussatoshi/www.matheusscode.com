import { fetcher } from "@/lib/fetcher";
import { Notion } from "./namespace";
import { revalidate } from "@/registry/registry-middleware";

export async function getProjects() {
  const response = await fetcher<Notion.MappedProjects[]>("/projects", {
    method: "GET",
    cache: "force-cache",
    next: {
      revalidate,
      tags: ["get-projects"],
    },
  });

  return response;
}
