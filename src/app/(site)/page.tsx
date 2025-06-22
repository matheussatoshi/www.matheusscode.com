import { PageLayout } from "@/ui/layout/page-layout";
import { Section } from "@/ui/layout/section";
import { AboutSection } from "@/ui/site/about-section";
import { ContactSection } from "@/ui/site/contact-section";
import { constructMetadata } from "@/utils/functions/construct-metadata";
import { copyright } from "@/utils/functions/copyright";

export const metadata = constructMetadata({
  title: "Welcome to My Personal Website",
  description:
    "Browse through my personal projects and technical articles. This portfolio highlights my work in software development and writing about technology.",
});

export default async function Home() {
  // const works = await getWorks();
  // const profile = await getProfile();
  // const projects = await getProjects();
  // const articles = await getArticles();
  // const education = await getEducation();

  return (
    <PageLayout className="mt-24 space-y-6">
      {/* <HeadingSection data={profile} /> */}
      <AboutSection />
      {/* <WorkExperienceSection data={works} />
      <WritingSection data={articles} />
      <SideProjectsSection data={projects} />
      <EducationSection data={education} /> */}
      <ContactSection />
      <Section className="mt-10 flex items-center justify-center">
        <span className="text-muted-foreground">{copyright()}</span>
      </Section>
    </PageLayout>
  );
}
