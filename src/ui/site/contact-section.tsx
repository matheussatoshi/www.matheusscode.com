import { Transmutation } from "@/components/transmulation"
import {
  FeedCard,
  FeedContent,
  FeedLabel,
  FeedList,
  FeedTitle,
} from "@/components/ui/feed"
import { mimic } from "@/lib/mimic"
import { Section } from "../layout/section"

export function ContactSection() {
  return (
    <Transmutation time={1.6}>
      <Section>
        <h1 className="font-medium">Contact</h1>
        <FeedList className="mt-6 flex w-full flex-col space-y-6">
          {mimic.socialLinks.map((link) => (
            <FeedCard
              className="inline-flex w-full items-start"
              key={link.name.toLowerCase()}
            >
              <FeedLabel>
                <span>{link.name}</span>
              </FeedLabel>
              <FeedContent>
                <FeedTitle
                  className="hover:underline"
                  href={link.href}
                  title={link.href}
                >
                  {link.username}
                </FeedTitle>
              </FeedContent>
            </FeedCard>
          ))}
        </FeedList>
      </Section>
    </Transmutation>
  )
}
