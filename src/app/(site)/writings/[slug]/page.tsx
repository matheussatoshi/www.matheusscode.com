import { PageLayout } from "@/ui/layout/page-layout";

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   const { title, description } = await getArticle(slug);

//   return constructMetadata({
//     title,
//     description,
//   });
// }

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // const { title, content, date } = await getArticle(slug);

  return (
    <PageLayout className="relative mb-20 pt-12">
      {slug}
      {/* <Transmutation transition={transitions.goUp} className="space-y-12">
        <Section className="w-full space-y-4 py-0">
          <h1 className="text-4xl font-bold">{title}</h1>
          <span className="text-muted-foreground text-right text-xs whitespace-nowrap">
            ~ {date}
          </span>
        </Section>
        <Section className="space-y-4 py-0">
          <MarkdownBlock content={content} />
        </Section>
      </Transmutation> */}
    </PageLayout>
  );
}
