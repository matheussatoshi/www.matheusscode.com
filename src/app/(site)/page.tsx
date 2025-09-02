import { getProfile } from "@/http/github/get-profile";
import { getArticles } from "@/http/notion/get-articles";
import { getEducation } from "@/http/notion/get-education";
import { getProjects } from "@/http/notion/get-projects";
import { getWorks } from "@/http/notion/get-works";
import { PageLayout } from "@/ui/layout/page-layout";
import { AboutSection } from "@/ui/site/about-section";
import { ContactSection } from "@/ui/site/contact-section";
import { EducationSection } from "@/ui/site/education-section";
import { HeadingSection } from "@/ui/site/heading-section";
import { SideProjectsSection } from "@/ui/site/side-projects-section";
import { WorkExperienceSection } from "@/ui/site/work-experience-section";
import { WritingSection } from "@/ui/site/writing-section";
import { constructMetadata } from "@/utils/functions/construct-metadata";

export const metadata = constructMetadata({
  title: "Welcome to My Personal Website",
  description:
    "Browse through my personal projects and technical articles. This portfolio highlights my work in software development and writing about technology.",
});

export default async function Home() {
  const works = await getWorks();
  const profile = await getProfile();
  const projects = await getProjects();
  const articles = await getArticles();
  const education = await getEducation();

  return (
    <PageLayout className="mt-24 space-y-6">
      <HeadingSection data={profile} />
      <AboutSection />
      <WorkExperienceSection data={works} />
      <WritingSection data={articles} />
      <SideProjectsSection data={projects} />
      <EducationSection data={education} />
      <ContactSection />
    </PageLayout>
  );
}
