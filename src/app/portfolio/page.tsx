import { getProjects } from "@/actions/notion/get-projects";
import { PageHeader } from "@/ui/layout/page-header";
import { PageLayout } from "@/ui/layout/page-layout";
import { Section } from "@/ui/layout/section";
import { ProjectCard } from "@/ui/shared/project-card";
import { constructMetadata } from "@/utils/functions/construct-metadata";

export const metadata = constructMetadata({
  title: "Some of my projects that I have a certain affection for",
  description:
    "Explore some of the projects I've built using modern technologies. This portfolio showcases my skills, creativity, and passion for software development.",
});

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
