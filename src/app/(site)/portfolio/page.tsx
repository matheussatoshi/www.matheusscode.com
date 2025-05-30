import { getProjects } from "@/actions/notion/get-projects";
import { transitions } from "@/registry/registry-animations";
import { PageHeader } from "@/ui/layout/page-header";
import { PageLayout } from "@/ui/layout/page-layout";
import { Section } from "@/ui/layout/section";
import { ProjectCard } from "@/ui/shared/project-card";
import Transmutation from "@/ui/shared/transmulation";
import { constructMetadata } from "@/utils/functions/construct-metadata";

export const metadata = constructMetadata({
  title: "Some of my projects that I have a certain affection for",
  description:
    "Explore some of the projects I've built using modern technologies. This portfolio showcases my skills, creativity, and passion for software development.",
});

export default async function Page() {
  const projects = await getProjects();

  return (
    <PageLayout className="space-y-8">
      <Transmutation transition={transitions.goDown}>
        <PageHeader
          title="My Portfolio"
          description="Here's a glimpse into some of my recent projects. Be sure to check back often, as I'm always adding new and exciting work to my portfolio!"
        />
      </Transmutation>
      <Transmutation transition={transitions.goUp}>
        <Section className="grid md:grid-cols-2">
          {projects &&
            projects.map((article, idx) => (
              <Transmutation
                key={article.slug}
                transition={transitions.goUp}
                time={idx * 0.8}
              >
                <ProjectCard data={article} />
              </Transmutation>
            ))}
        </Section>
      </Transmutation>
    </PageLayout>
  );
}
