import { ArrowLeftIcon } from "lucide-react"
import Link from "next/link"
import { MarkdownBlock } from "@/components/markdown-block"
import { Transmutation } from "@/components/transmulation"
import { getArticle } from "@/http/notion/get-articles"
import { PageLayout } from "@/ui/layout/page-layout"
import { Section } from "@/ui/layout/section"
import { constructMetadata } from "@/utils/functions/construct-metadata"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { title, description } = await getArticle(slug)

  return constructMetadata({
    title,
    description,
  })
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { title, content, date } = await getArticle(slug)

  return (
    <PageLayout className="mt-32 space-y-6">
      <Transmutation>
        <Section className="w-full space-y-4 py-0">
          <Link
            className="flex items-center gap-1 transition-all hover:gap-1.5"
            href="/"
          >
            <ArrowLeftIcon size={16} /> Back to home
          </Link>
          <h1 className="text-center font-bold text-4xl md:text-left">
            {title}
          </h1>
          <span className="whitespace-nowrap text-right text-muted-foreground text-sm">
            ~ {date}
          </span>
        </Section>
      </Transmutation>
      <Transmutation time={0.6}>
        <Section className="mt-6 space-y-4 py-0">
          <MarkdownBlock content={content} />
          <div className="flex w-full justify-end">
            <Link
              className="mt-8 flex items-center gap-1 transition-all hover:gap-1.5"
              href="/"
            >
              <ArrowLeftIcon size={16} /> Back to home
            </Link>
          </div>
        </Section>
      </Transmutation>
    </PageLayout>
  )
}
