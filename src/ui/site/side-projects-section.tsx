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

export function SideProjectsSection({
  data,
}: {
  data: Notion.MappedProjects[];
}) {
  return (
    <Transmutation time={1.2}>
      <Section>
        <h1 className="font-medium">Side Projects</h1>
        <FeedList className="space-y-6">
          {data.map((sideProject) => (
            <FeedCard key={sideProject.slug}>
              <FeedLabel>
                <span>{sideProject.type}</span>
              </FeedLabel>
              <FeedContent>
                <FeedTitle href={sideProject.url}>
                  {sideProject.title}
                </FeedTitle>
                <FeedDescription>{sideProject.description}</FeedDescription>
              </FeedContent>
            </FeedCard>
          ))}
        </FeedList>
      </Section>
    </Transmutation>
  );
}
