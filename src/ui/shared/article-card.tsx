import { Notion } from "@/actions/notion/namespace";
import {
  Card,
  CardDescription,
  CardImage,
  CardSpan,
  CardTitle,
} from "@/components/ui/card";
import { truncate } from "@/utils/functions/truncate";
import Link from "next/link";

export function ArticleCard({
  data,
  showImage = false,
}: {
  data: Notion.MappedArticles;
  showImage?: boolean;
}) {
  return (
    <Link href={`/writings/${data.slug}`}>
      <Card className="group/article border-border flex-col gap-2 rounded-none border-x-0 border-t-0 border-b bg-transparent p-0 pb-4 md:flex-row">
        <div className="w-full">
          <CardTitle className="mb-2 text-xl group-hover/article:underline">
            {truncate(data.title, 70)}
          </CardTitle>
          <CardDescription className="mb-2 line-clamp-2 text-xs md:line-clamp-3">
            {data.description}
          </CardDescription>
          <CardSpan className="text-muted-foreground/65 mt-2.5">
            {data.date}
          </CardSpan>
        </div>
        {showImage && (
          <div className="bg-muted relative w-64 overflow-hidden rounded-xl">
            <CardImage
              src={data.media}
              alt={data.title}
              fill
              className="h-full w-full object-cover opacity-50 transition-all duration-400 group-hover/article:scale-105 group-hover/article:opacity-100"
            />
          </div>
        )}
      </Card>
    </Link>
  );
}
