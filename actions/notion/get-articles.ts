"use server";

import { notion } from "@/lib/notion";
import { NotionToMarkdown } from "notion-to-md";
import { Notion } from "./namespace";

export const revalidate = 7200;

export async function getArticles() {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ARTICLES_ID!,
  });

  const typedResponse = response.results as unknown as Notion.Articles[];

  return typedResponse.map((article) => ({
    media: article.properties?.media?.files?.[0]?.file?.url,
    date: article.properties?.date?.rich_text?.[0]?.plain_text,
    slug: article.properties?.slug?.rich_text?.[0]?.plain_text,
    description: article.properties?.description?.rich_text?.[0]?.plain_text,
    title: article.properties?.title?.title?.[0]?.plain_text,
  }));
}

export async function getArticle(slug: string) {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ARTICLES_ID!,
    filter: {
      or: [
        {
          property: "slug",
          rich_text: {
            equals: slug,
          },
        },
      ],
    },
  });

  const pageId = response.results[0].id;

  const n2m = new NotionToMarkdown({ notionClient: notion });

  const mdblocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdblocks);

  const typedResponse = response as unknown as Notion.List<Notion.Articles>;

  return {
    title: typedResponse.results[0].properties.title.title[0].plain_text,
    description:
      typedResponse.results[0].properties.description.rich_text[0].plain_text,
    date: typedResponse.results[0].properties.date.rich_text[0].plain_text,
    content: mdString.parent,
  };
}
