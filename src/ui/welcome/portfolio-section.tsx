import { Notion } from "@/actions/notion/namespace";
import { Link } from "@/components/ui/link";
import { Separator } from "@/components/ui/separator";
import { Section } from "../layout/section";
import { ProjectCard } from "../shared/project-card";

export function PortfolioSection({
  data: repos,
}: {
  data: Notion.MappedProjects[];
}) {
  return (
    <Section className="flex flex-col">
      <div className="relative mb-14 flex items-center gap-7">
        <div className="flex flex-col space-y-2 text-wrap md:text-nowrap">
          <h1 className="text-xl font-bold">Portfolio</h1>
          <p className="text-muted-foreground">
            Here&apos;s a glimpse into some of my recent projects. <br /> Be
            sure to check back often, as I&apos;m always adding <br /> new and
            exciting work to my portfolio!
          </p>
        </div>
        <Separator className="hidden flex-1 md:block" />
      </div>

      <div className="grid w-full grid-cols-1 grid-rows-1 gap-7 md:grid-cols-2">
        {repos &&
          repos
            .splice(0, 4)
            .map((item) => <ProjectCard key={item.slug} data={item} />)}
      </div>

      <Link href="/portfolio" className="mx-auto mt-12">
        View Full Portfolio
      </Link>
    </Section>
  );
}
