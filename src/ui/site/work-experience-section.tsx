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

export function WorkExperienceSection({
  data,
}: {
  data: Notion.MappedWorks[];
}) {
  return (
    <Transmutation time={0.8}>
      <Section>
        <h1 className="font-medium">Work Experience</h1>
        <FeedList className="space-y-8">
          {data.map((work) => (
            <FeedCard key={work.slug}>
              <FeedLabel>{work.date}</FeedLabel>
              <FeedContent>
                <FeedTitle href="/">{work.title}</FeedTitle>
                <FeedDescription>{work.description}</FeedDescription>
                {/* <FeedGallery>
                  {Array.from({ length: 3 }).map((_, idx) => (
                    <FeedImage src="/mock.avif" alt="" key={idx} />
                  ))}
                </FeedGallery> */}
              </FeedContent>
            </FeedCard>
          ))}
        </FeedList>
      </Section>
    </Transmutation>
  );
}
