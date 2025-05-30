"use server";

import { fetcher } from "@/lib/fetcher";
import { Notion } from "./namespace";

export async function getProjects() {
  const response = await fetcher<Notion.MappedProjects[]>("/projects", {
    method: "GET",
    cache: "force-cache",
    next: {
      revalidate: 7200,
      tags: ["get-projects"],
    },
  });

  return response;
}
