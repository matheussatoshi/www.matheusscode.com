import { NextResponse } from "next/server"
import type { Notion } from "@/http/notion/namespace"
import { notion } from "@/lib/notion"

export async function GET() {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ARTICLES_ID!,
    })

    const typedResponse = response.results as unknown as Notion.Articles[]

    const articles = typedResponse.map((article) => ({
      date: article.properties?.date?.rich_text?.[0]?.plain_text,
      slug: article.properties?.slug?.rich_text?.[0]?.plain_text,
      description: article.properties?.description?.rich_text?.[0]?.plain_text,
      title: article.properties?.title?.title?.[0]?.plain_text,
    }))

    return NextResponse.json(articles)
  } catch (_) {
    return NextResponse.json([])
  }
}
