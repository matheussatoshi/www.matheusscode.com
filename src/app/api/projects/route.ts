import { Notion } from "@/actions/notion/namespace";
import { notion } from "@/lib/notion";
import { NextResponse } from "next/server";

export async function GET() {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_PROJECTS_ID!,
  });

  const typedResponse = response.results as unknown as Notion.Projects[];

  const projects = typedResponse.map((project) => ({
    image: project.properties?.image?.files?.[0]?.file?.url,
    slug: project.properties?.slug?.rich_text?.[0]?.plain_text,
    url: project.properties?.url?.rich_text?.[0]?.plain_text,
    title: project.properties?.title?.title?.[0]?.plain_text,
  }));

  return NextResponse.json(projects);
}
