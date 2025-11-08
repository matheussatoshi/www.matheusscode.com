import { Transmutation } from "@/components/transmulation"
import { UserAvatar } from "@/components/user-avatar"
import type { Github } from "@/http/github/namespace"
import { Section } from "../layout/section"

export function HeadingSection({ data }: { data: Github.Profile }) {
  return (
    <Transmutation>
      <Section className="mt-8">
        <div className="flex w-full items-center gap-4">
          <UserAvatar
            alt={data.name}
            className="size-24"
            src={data.avatar_url}
          />
          <div className="flex w-full flex-col">
            <h1 className="font-normal text-xl leading-7">{data.name}</h1>
            <p className="font-normal text-muted-foreground text-sm">
              Software Engineer in Manaus
            </p>
            <span className="mt-2.5 w-fit max-w-auto rounded-full bg-muted-foreground/5 px-2.5 py-0.5 text-center text-muted-foreground text-xs shadow-xs hover:bg-accent dark:bg-muted-foreground/20">
              letmat.contact@gmail.com
            </span>
          </div>
        </div>
      </Section>
    </Transmutation>
  )
}
