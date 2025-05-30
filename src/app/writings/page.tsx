"use server";

import { getArticles } from "@/actions/notion/get-articles";
import { PageHeader } from "@/ui/layout/page-header";
import { PageLayout } from "@/ui/layout/page-layout";
import { Section } from "@/ui/layout/section";
import { ArticleCard } from "@/ui/shared/article-card";

export default async function Page() {
  const articles = await getArticles();

  return (
    <PageLayout className="space-y-8">
      <PageHeader
        title="My Writings"
        description="Along with coding I also like to write about life and technology. Here are some of my recent posts."
      />
      <Section>
        {articles &&
          articles.map((article) => (
            <ArticleCard key={article.slug} data={article} />
          ))}
      </Section>
    </PageLayout>
  );
}
