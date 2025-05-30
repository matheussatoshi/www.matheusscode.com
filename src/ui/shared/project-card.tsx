import { Notion } from "@/actions/notion/namespace";
import { Card, CardImage, CardTitle } from "@/components/ui/card";
import { truncate } from "@/utils/functions/truncate";
import Link from "next/link";

export function ProjectCard({ data }: { data: Notion.MappedProjects }) {
  return (
    <Card className="group/project gap-3 border-none bg-transparent p-0">
      <Link href={data?.url ?? ""} title={data.title}>
        <div className="bg-accent relative h-40 w-full overflow-hidden rounded-xl">
          <CardImage
            src={data.image}
            alt={data.title}
            fill
            quality={100}
            priority
            className="h-full w-full rounded-lg object-cover transition-all duration-300 group-hover/project:scale-110"
          />
        </div>
        <CardTitle className="mt-2.5 text-sm font-medium group-hover/project:underline">
          {truncate(data?.title, 70)}
        </CardTitle>
      </Link>
    </Card>
  );
}
