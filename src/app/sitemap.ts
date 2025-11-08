import type { MetadataRoute } from "next"
import { getArticles } from "@/http/notion/get-articles"
import { mimic } from "@/lib/mimic"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getArticles()

  const staticRoutes = ["/"]
  const dynamicRoutes = articles.map((article) => `/writings/${article.slug}`)

  const allRoutes = [...staticRoutes, ...dynamicRoutes]

  return allRoutes.map((route) => ({
    url: `${mimic.metadata.url}${route}`,
    lastModified: new Date().toISOString(),
  }))
}
