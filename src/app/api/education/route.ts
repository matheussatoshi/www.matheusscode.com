import { Notion } from "@/http/notion/namespace";
import { notion } from "@/lib/notion";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_EDUCATION_ID!,
    });

    const typedResponse = response.results as unknown as Notion.Educations[];

    const educations = typedResponse.map((project) => ({
      date: project.properties?.date?.rich_text?.[0]?.plain_text,
      slug: project.properties?.slug?.rich_text?.[0]?.plain_text,
      url: project.properties?.url?.rich_text?.[0]?.plain_text,
      location: project.properties?.location?.rich_text?.[0]?.plain_text,
      certificate: project.properties?.certificate.files?.[0]?.file?.url,
      title: project.properties?.title?.title?.[0]?.plain_text,
    }));

    return NextResponse.json(educations);
  } catch (_) {
    return new NextResponse("Erro ao buscar escolaridade", { status: 500 });
  }
}
