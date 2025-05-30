"use server";

import { notion } from "@/lib/notion";

export const revalidate = 7200;

export async function getTestimonials() {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_TESTIMONIALS_ID!,
  });

  return response.results;
}
