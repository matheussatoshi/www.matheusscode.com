import { Notion } from "@/http/notion/namespace";
import { notion } from "@/lib/notion";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_WORK_EXPERIENCE_ID!,
    });

    const typedResponse = response.results as unknown as Notion.Works[];

    const works = typedResponse
      .map((project) => ({
        date: project.properties?.date?.rich_text?.[0]?.plain_text,
        description:
          project.properties?.description?.rich_text?.[0]?.plain_text,
        slug: project.properties?.slug?.rich_text?.[0]?.plain_text,
        title: project.properties?.title?.title?.[0]?.plain_text,
      }))
      .reverse();

    return NextResponse.json(works);
  } catch (_) {
    return new NextResponse("Erro ao buscar Trabalhos", { status: 500 });
  }
}
