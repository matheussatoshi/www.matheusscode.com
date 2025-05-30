import { getProfile } from "@/actions/github/get-profile";
import { getArticles } from "@/actions/notion/get-articles";
import { getProjects } from "@/actions/notion/get-projects";
import { PageLayout } from "@/ui/layout/page-layout";
import { AboutSection } from "@/ui/welcome/about-section";
import { HeroSection } from "@/ui/welcome/hero-section";
import { PortfolioSection } from "@/ui/welcome/portfolio-section";
import { ServicesSection } from "@/ui/welcome/services-section";
import { WritingsSection } from "@/ui/welcome/writings-section";
import { constructMetadata } from "@/utils/functions/construct-metadata";

export const metadata = constructMetadata({
  title: "Welcome to My Personal Website",
  description:
    "Browse through my personal projects and technical articles. This portfolio highlights my work in software development and writing about technology.",
});

export default async function Home() {
  const [profile, projects, articles] = await Promise.all([
    getProfile(),
    getProjects(),
    getArticles(),
  ]);

  return (
    <PageLayout className="mb-14">
      <div className="space-y-6">
        <HeroSection data={profile} />
        <div className="space-y-12">
          <AboutSection />
          <ServicesSection data={profile} />
        </div>
      </div>
      <PortfolioSection data={projects} />
      {/* <TestimonialsSection /> */}
      <WritingsSection data={articles} />
    </PageLayout>
  );
}
