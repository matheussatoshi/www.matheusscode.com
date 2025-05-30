import { getProfile } from "@/actions/github/get-profile";
import { transitions } from "@/registry/registry-animations";
import { PageLayout } from "@/ui/layout/page-layout";
import Transmutation from "@/ui/shared/transmulation";
import { AboutSection } from "@/ui/welcome/about-section";
import { HeroSection } from "@/ui/welcome/hero-section";
import { ServicesSection } from "@/ui/welcome/services-section";
import { constructMetadata } from "@/utils/functions/construct-metadata";

export const metadata = constructMetadata({
  title: "Welcome to My Personal Website",
  description:
    "Browse through my personal projects and technical articles. This portfolio highlights my work in software development and writing about technology.",
});

export default async function Home() {
  const profile = await getProfile();
  // const projects = await getProjects();
  // const articles = await getArticles();

  return (
    <PageLayout className="mb-14">
      <Transmutation
        transition={transitions.goUp}
        time={0.8}
        className="space-y-14"
      >
        <div className="space-y-6">
          <HeroSection data={profile} />
          <div className="space-y-12">
            <AboutSection />
            <ServicesSection data={profile} />
          </div>
        </div>
        {/* <PortfolioSection data={projects} /> */}
        {/* <TestimonialsSection /> */}
        {/* <WritingsSection data={articles} /> */}
      </Transmutation>
    </PageLayout>
  );
}
