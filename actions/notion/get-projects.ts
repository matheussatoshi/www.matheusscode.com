"use server";

import { notion } from "@/lib/notion";
import { NotionToMarkdown } from "notion-to-md";
import { Notion } from "./namespace";

export const revalidate = 7200;

export async function getProjects() {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_PROJECTS_ID!,
  });

  const typedResponse = response.results as unknown as Notion.Projects[];

  return typedResponse.map((project) => ({
    image: project.properties?.image?.files?.[0]?.file?.url,
    slug: project.properties?.slug?.rich_text?.[0]?.plain_text,
    url: project.properties?.url?.rich_text?.[0]?.plain_text,
    title: project.properties?.title?.title?.[0]?.plain_text,
  }));
}

export async function getProject(slug: string) {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_PROJECTS_ID!,
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
    content: mdString.parent,
  };
}
