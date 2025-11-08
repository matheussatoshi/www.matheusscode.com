import { Transmutation } from "@/components/transmulation"
import {
  FeedCard,
  FeedContent,
  FeedDescription,
  FeedLabel,
  FeedList,
  FeedTitle,
} from "@/components/ui/feed"
import type { Notion } from "@/http/notion/namespace"
import { truncate } from "@/utils/functions/truncate"
import { Section } from "../layout/section"

export function WritingSection({ data }: { data: Notion.MappedArticles[] }) {
  return (
    <Transmutation time={1}>
      <Section>
        <h1 className="font-medium">Writing</h1>
        <FeedList className="space-y-8">
          {data.map((article) => (
            <FeedCard key={article.slug}>
              <FeedLabel>{article.date}</FeedLabel>
              <FeedContent>
                <FeedTitle href={`/writings/${article.slug}`} target="_self">
                  {article.title}
                </FeedTitle>
                <FeedDescription>
                  {truncate(article.description, 50)}
                </FeedDescription>
              </FeedContent>
            </FeedCard>
          ))}
        </FeedList>
      </Section>
    </Transmutation>
  )
}
