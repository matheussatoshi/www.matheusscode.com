import { Notion } from "@/actions/notion/namespace";
import { fetcher } from "@/lib/fetcher";

export async function getProjects() {
  try {
    const response = await fetcher<Notion.MappedProjects[]>("/projects", {
      method: "GET",
      cache: "force-cache",
      next: {
        revalidate: 7200,
        tags: ["get-projects"],
      },
    });

    return response ?? [];
  } catch (_) {
    return [];
  }
}
