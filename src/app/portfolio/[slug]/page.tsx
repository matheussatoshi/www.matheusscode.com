import { getProject } from "@/actions/notion/get-projects";
import { MarkdownBlock } from "@/components/markdown/markdown-block";
import { PageLayout } from "@/ui/layout/page-layout";
import { Section } from "@/ui/layout/section";
import { constructMetadata } from "@/utils/functions/construct-metadata";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const { title } = await getProject(slug);

  return constructMetadata({
    title,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { title, content } = await getProject(slug);

  return (
    <PageLayout className="relative space-y-12">
      <Section className="w-full space-y-4 py-0">
        <h1 className="text-4xl font-bold">{title}</h1>
      </Section>
      <Section className="space-y-4 py-0">
        <MarkdownBlock content={content} />
      </Section>
    </PageLayout>
  );
}
