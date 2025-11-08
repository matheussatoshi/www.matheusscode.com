import { NextResponse } from "next/server"
import type { Notion } from "@/http/notion/namespace"
import { notion } from "@/lib/notion"

export async function GET() {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_EDUCATION_ID!,
    })

    const typedResponse = response.results as unknown as Notion.Educations[]

    const educations = typedResponse.map((project) => {
      const certificates = project.properties?.certificate?.files ?? []

      const certificateUrls =
        certificates.length > 1
          ? certificates.map((file) => file.file.url)
          : certificates[0]?.file?.url

      return {
        date: project.properties?.date?.rich_text?.[0]?.plain_text,
        slug: project.properties?.slug?.rich_text?.[0]?.plain_text,
        url: project.properties?.url?.rich_text?.[0]?.plain_text,
        location: project.properties?.location?.rich_text?.[0]?.plain_text,
        certificate: certificateUrls,
        title: project.properties?.title?.title?.[0]?.plain_text,
      }
    })

    return NextResponse.json(educations)
  } catch (_) {
    return new NextResponse("Erro ao buscar escolaridade", { status: 500 })
  }
}
