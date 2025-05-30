import { Notion } from "@/actions/notion/namespace";
import { notion } from "@/lib/notion";
import { NextResponse } from "next/server";

export async function GET() {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ARTICLES_ID!,
  });

  const typedResponse = response.results as unknown as Notion.Articles[];

  const articles = typedResponse.map((article) => ({
    media: article.properties?.media?.files?.[0]?.file?.url,
    date: article.properties?.date?.rich_text?.[0]?.plain_text,
    slug: article.properties?.slug?.rich_text?.[0]?.plain_text,
    description: article.properties?.description?.rich_text?.[0]?.plain_text,
    title: article.properties?.title?.title?.[0]?.plain_text,
  }));

  return NextResponse.json(articles);
}
