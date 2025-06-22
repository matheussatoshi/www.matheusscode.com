import { Notion } from "@/http/notion/namespace";
import { notion } from "@/lib/notion";
import { NextResponse } from "next/server";
import { NotionToMarkdown } from "notion-to-md";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ARTICLES_ID!,
    filter: {
      property: "slug",
      rich_text: {
        equals: slug,
      },
    },
  });

  if (response.results.length === 0) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const pageId = response.results[0].id;
  const n2m = new NotionToMarkdown({ notionClient: notion });
  const mdblocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdblocks);

  const typedResponse = response as unknown as Notion.List<Notion.Articles>;
  const article = typedResponse.results[0];

  return NextResponse.json({
    title: article.properties.title.title[0].plain_text,
    description: article.properties.description.rich_text[0].plain_text,
    date: article.properties.date.rich_text[0].plain_text,
    content: mdString.parent,
  });
}
