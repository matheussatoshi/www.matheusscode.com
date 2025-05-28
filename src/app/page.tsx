import { MainLayout } from "@/ui/layout/page-wrapper";
import { AboutSection } from "@/ui/welcome/about-section";
import { ArticlesSection } from "@/ui/welcome/articles-section";
import { HeroSection } from "@/ui/welcome/hero-section";
import { PortfolioSection } from "@/ui/welcome/portfolio-section";
import { ServicesSection } from "@/ui/welcome/services-section";
import { TestimonialsSection } from "@/ui/welcome/testimonials-section";

const avatars = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/16860528",
    profileUrl: "https://github.com/dillionverma",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/20110627",
    profileUrl: "https://github.com/tomonarifeehan",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/106103625",
    profileUrl: "https://github.com/BankkRoll",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59228569",
    profileUrl: "https://github.com/safethecode",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59442788",
    profileUrl: "https://github.com/sanjay-mali",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/89768406",
    profileUrl: "https://github.com/itsarghyadas",
  },
];

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />

      <AboutSection />

      <ServicesSection />

      <PortfolioSection />

      <TestimonialsSection />

      <ArticlesSection />
    </MainLayout>
  );
}
