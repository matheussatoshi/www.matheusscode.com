"use server";

import { getArticle } from "@/actions/notion/get-articles";
import { MarkdownBlock } from "@/components/markdown/markdown-block";
import { PageLayout } from "@/ui/layout/page-layout";
import { Section } from "@/ui/layout/section";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { title, content, date } = await getArticle(slug);

  return (
    <PageLayout className="relative space-y-12">
      <Section className="w-full space-y-4 py-0">
        <h1 className="text-4xl font-bold">{title}</h1>
        <span className="text-muted-foreground text-right text-xs whitespace-nowrap">
          ~ {date}
        </span>
      </Section>
      <Section className="space-y-4 py-0">
        <MarkdownBlock content={content} />
      </Section>
    </PageLayout>
  );
}
