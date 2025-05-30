import { getArticles } from "@/actions/notion/get-articles";
import { transitions } from "@/registry/registry-animations";
import { PageHeader } from "@/ui/layout/page-header";
import { PageLayout } from "@/ui/layout/page-layout";
import { Section } from "@/ui/layout/section";
import { ArticleCard } from "@/ui/shared/article-card";
import { EmptyContent } from "@/ui/shared/empty-content";
import Transmutation from "@/ui/shared/transmulation";
import { constructMetadata } from "@/utils/functions/construct-metadata";

export const metadata = constructMetadata({
  title: "Insights on Technology and Development",
  description:
    "A collection of thoughts, lessons, and discoveries from my journey through software development, with a focus on TypeScript and modern web technologies.",
});

export default async function Page() {
  const articles = await getArticles();

  return (
    <PageLayout className="space-y-8">
      <Transmutation transition={transitions.goDown}>
        <PageHeader
          title="My Writings"
          description="Along with coding I also like to write about life and technology. Here are some of my recent posts."
        />
      </Transmutation>
      <Transmutation transition={transitions.goUp}>
        <Section>
          {articles.length > 0 ? (
            articles.map((article, idx) => (
              <Transmutation
                key={article.slug}
                transition={transitions.goUp}
                time={idx * 0.8}
              >
                <ArticleCard data={article} />
              </Transmutation>
            ))
          ) : (
            <EmptyContent
              title="Oops, there's nothing here"
              subtitle="There are no projects published here yet."
            />
          )}
        </Section>
      </Transmutation>
    </PageLayout>
  );
}
