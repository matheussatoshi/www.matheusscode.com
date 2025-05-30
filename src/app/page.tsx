import { getProfile } from "@/actions/github/get-profile";
import { getArticles } from "@/actions/notion/get-articles";
import { getProjects } from "@/actions/notion/get-projects";
import { PageLayout } from "@/ui/layout/page-layout";
import { AboutSection } from "@/ui/welcome/about-section";
import { WritingsSection } from "@/ui/welcome/writings-section";
import { HeroSection } from "@/ui/welcome/hero-section";
import { PortfolioSection } from "@/ui/welcome/portfolio-section";
import { ServicesSection } from "@/ui/welcome/services-section";

export default async function Home() {
  const [profile, projects, articles] = await Promise.all([
    getProfile(),
    getProjects(),
    getArticles(),
  ]);

  return (
    <PageLayout>
      <div className="space-y-6">
        <HeroSection data={profile} />
        <div className="space-y-12">
          <AboutSection />
          <ServicesSection />
        </div>
      </div>
      <PortfolioSection data={projects} />
      {/* <TestimonialsSection /> */}
      <WritingsSection data={articles} />
    </PageLayout>
  );
}
