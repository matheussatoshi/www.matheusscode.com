import { getProfile } from "@/actions/github/get-profile";
import { getRepos } from "@/actions/github/get-repos";
import { MainLayout } from "@/ui/layout/page-wrapper";
import { AboutSection } from "@/ui/welcome/about-section";
import { ArticlesSection } from "@/ui/welcome/articles-section";
import { HeroSection } from "@/ui/welcome/hero-section";
import { PortfolioSection } from "@/ui/welcome/portfolio-section";
import { ServicesSection } from "@/ui/welcome/services-section";
import { TestimonialsSection } from "@/ui/welcome/testimonials-section";

export default async function Home() {
  const [profile, repositories] = await Promise.all([getProfile(), getRepos()]);

  return (
    <MainLayout>
      <HeroSection data={profile} />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection data={repositories} />
      <TestimonialsSection />
      <ArticlesSection />
    </MainLayout>
  );
}
