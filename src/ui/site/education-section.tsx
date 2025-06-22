import { Transmutation } from "@/components/transmulation";
import {
  FeedCard,
  FeedContent,
  FeedDescription,
  FeedLabel,
  FeedList,
  FeedTitle,
} from "@/components/ui/feed";
import { Notion } from "@/http/notion/namespace";
import { Section } from "../layout/section";

export function EducationSection({ data }: { data: Notion.MappedEducation[] }) {
  return (
    <Transmutation time={1.4}>
      <Section>
        <h1 className="font-medium">Education</h1>
        <FeedList className="space-y-8">
          {data.map((education) => (
            <FeedCard key={education.slug}>
              <FeedLabel>{education.date}</FeedLabel>
              <FeedContent className="flex w-full flex-col space-y-1 pr-2 pl-8">
                <FeedTitle href={education.url}>{education.title}</FeedTitle>
                <FeedDescription className="text-foreground/75 font-normal">
                  {education.location}
                </FeedDescription>
              </FeedContent>
            </FeedCard>
          ))}
        </FeedList>
      </Section>
    </Transmutation>
  );
}
