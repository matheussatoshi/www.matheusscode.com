import { Notion } from "@/actions/notion/namespace";
import { fetcher } from "@/lib/fetcher";

export async function getArticles() {
  try {
    const response = await fetcher<Notion.MappedArticles[]>("/writings", {
      method: "GET",
      cache: "force-cache",
      next: {
        revalidate: 7200,
        tags: ["get-articles"],
      },
    });

    return response ?? [];
  } catch (_) {
    return [];
  }
}
