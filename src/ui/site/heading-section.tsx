import { Transmutation } from "@/components/transmulation";
import { UserAvatar } from "@/components/user-avatar";
import { Github } from "@/http/github/namespace";
import { Section } from "../layout/section";

export function HeadingSection({ data }: { data: Github.Profile }) {
  return (
    <Transmutation>
      <Section className="mt-8">
        <div className="flex w-full items-center gap-4">
          <UserAvatar
            src={data.avatar_url}
            alt={data.name}
            className="size-24"
          />
          <div className="flex w-full flex-col">
            <h1 className="text-xl leading-7 font-normal">{data.name}</h1>
            <p className="text-muted-foreground text-sm font-normal">
              Software Engineer in Manaus
            </p>
            <span className="bg-muted-foreground/5 dark:bg-muted-foreground/20 max-w-auto text-muted-foreground hover:bg-accent mt-1.5 w-fit rounded-full px-2.5 py-0.5 text-center text-xs shadow-xs">
              matheussfigueiredo.com
            </span>
          </div>
        </div>
      </Section>
    </Transmutation>
  );
}
