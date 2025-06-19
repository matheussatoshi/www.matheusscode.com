import { Github } from "@/actions/github/namespace";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Section } from "../layout/section";

export function HeroSection({ data: user }: { data: Github.Profile }) {
  return (
    <Section className="flex flex-col-reverse items-center justify-between md:flex-row">
      <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
        <h1 className="text-2xl font-bold">{user.name}</h1>
        <h2 className="text-muted-foreground font-medium">
          {["Developer", "Content Creator", "Dad", "Musician", "UI/UX"].join(
            " <> ",
          )}
        </h2>
      </div>

      <div className="relative mb-3.5 md:mb-0">
        <Avatar className="size-16">
          <AvatarImage src={user.avatar_url} alt={user.name} />
          <AvatarFallback>MA</AvatarFallback>
        </Avatar>

        <span className="absolute right-0 bottom-0 flex size-4 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex size-3.5 rounded-full bg-emerald-500" />
        </span>
      </div>
    </Section>
  );
}
