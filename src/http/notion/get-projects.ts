import { fetcher } from "@/lib/fetcher"
import { revalidate } from "@/registry/registry-middleware"
import type { Notion } from "./namespace"

export async function getProjects() {
  const response = await fetcher<Notion.MappedProjects[]>("/projects", {
    method: "GET",
    cache: "force-cache",
    next: {
      revalidate,
      tags: ["get-projects"],
    },
  })

  return response
}
