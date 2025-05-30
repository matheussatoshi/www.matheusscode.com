"use server";

import { getProjects } from "@/actions/notion/get-projects";
import { PageHeader } from "@/ui/layout/page-header";
import { PageLayout } from "@/ui/layout/page-layout";
import { Section } from "@/ui/layout/section";
import { ProjectCard } from "@/ui/shared/project-card";

export default async function Page() {
  const articles = await getProjects();

  return (
    <PageLayout className="space-y-8">
      <PageHeader
        title="My Portfolio"
        description="Here's a glimpse into some of my recent projects. Be sure to check back often, as I'm always adding new and exciting work to my portfolio!"
      />
      <Section className="grid md:grid-cols-2">
        {articles &&
          articles.map((article) => (
            <ProjectCard key={article.slug} data={article} />
          ))}
      </Section>
    </PageLayout>
  );
}
