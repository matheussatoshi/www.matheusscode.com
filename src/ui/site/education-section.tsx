import { ImagePreviewDialog } from "@/components/image-preview-dialog"
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
import { Section } from "../layout/section"

export function EducationSection({ data }: { data: Notion.MappedEducation[] }) {
  return (
    <Transmutation time={1.4}>
      <Section>
        <h1 className="font-medium">Education</h1>
        <FeedList className="space-y-8">
          {data.map((education) => {
            const isArrayCertificate = Array.isArray(education.certificate)

            const certificateTitle = `Certificate ${education.title}`

            return (
              <FeedCard key={education.slug}>
                <FeedLabel className="min-w-24 whitespace-nowrap">
                  {education.date}
                </FeedLabel>
                <FeedContent className="flex w-full flex-col space-y-1 pr-2 pl-8">
                  <FeedTitle href={education.url}>{education.title}</FeedTitle>
                  <FeedDescription className="font-normal text-foreground/75">
                    {education.location}
                  </FeedDescription>
                  {education.certificate && (
                    <>
                      {isArrayCertificate && (
                        <div className="w-full overflow-x-scroll pb-4">
                          <div className="flex gap-2">
                            {(education.certificate as string[]).map(
                              (document, idx) => (
                                <ImagePreviewDialog
                                  alt={certificateTitle}
                                  className="min-w-40"
                                  // biome-ignore lint/suspicious/noArrayIndexKey: using index as key is acceptable for static certificate list
                                  key={idx}
                                  src={document}
                                />
                              )
                            )}
                          </div>
                        </div>
                      )}

                      {!isArrayCertificate && (
                        <ImagePreviewDialog
                          alt={certificateTitle}
                          src={education.certificate as string}
                        />
                      )}
                    </>
                  )}
                </FeedContent>
              </FeedCard>
            )
          })}
        </FeedList>
      </Section>
    </Transmutation>
  )
}
