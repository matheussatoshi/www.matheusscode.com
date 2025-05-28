import { Link } from "@/components/ui/link";
import { Separator } from "@/components/ui/separator";
import { Section } from "../layout/section";
import { ArticleCard } from "../shared/article-card";

export function ArticlesSection() {
  return (
    <Section className="flex flex-col">
      <div className="relative mb-14 flex items-center gap-7">
        <div className="flex flex-col space-y-2 text-wrap md:text-nowrap">
          <h1 className="text-xl font-bold">My Writings</h1>
          <p className="text-muted-foreground">
            Along with coding I also like to write about life <br /> and
            technology. Here are some of my recent posts.
          </p>
        </div>
        <Separator className="hidden flex-1 md:block" />
      </div>

      <div className="flex w-full flex-col gap-7">
        {[1, 2, 3, 4].map((item) => (
          <ArticleCard key={item} />
        ))}
      </div>

      <Link className="mx-auto mt-12"> View All Writings </Link>
    </Section>
  );
}
