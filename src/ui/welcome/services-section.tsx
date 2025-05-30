import { Github } from "@/actions/github/namespace";
import { AvatarCircles } from "@/components/magicui/avatar-circles";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import { Separator } from "@/components/ui/separator";
import { mimic } from "@/lib/mimic";
import {
  BookmarkIcon,
  PlusIcon,
  RotateCcwIcon,
  RotateCwIcon,
  SkipBackIcon,
  SkipForwardIcon,
} from "lucide-react";
import { Section } from "../layout/section";

export function ServicesSection({ data: user }: { data: Github.Profile }) {
  return (
    <Section className="relative flex items-start">
      <div className="flex w-full flex-col">
        <p className="text-primary mb-6 text-base font-medium">
          Looking to elevate your web app&apos;s performance and <br /> user
          experience?{" "}
          <span className="text-muted-foreground font-normal">
            I can help you achieve that.
          </span>
        </p>

        <ul className="text-muted-foreground mb-6 list-disc space-y-1 pl-4">
          <li>
            Micro frontends, Single Page Apps, <br /> Progressive Web Apps etc.
            with Vue 3 and React
          </li>
          <li>Web performance optimization</li>
          <li>3D/Animated websites with Three.js and GSAP</li>
          <li>Data visualization with D3.js and more...</li>
        </ul>

        <div className="flex items-center gap-3.5">
          <Link href="/"> Schedule a meeting </Link>
          <Link variant="outline" href="/">
            Resume
          </Link>
        </div>
      </div>

      <div className="hover:bg-muted/50 bg-background border-border relative hidden h-48 w-full max-w-[14rem] -translate-x-4 -translate-y-6 flex-col overflow-hidden rounded-md border text-xs backdrop-blur-2xl transition-all select-none hover:shadow-xs md:flex">
        <div className="bg-accent/50 flex items-center justify-between px-4 py-2">
          <h1 className="text-xs font-medium">Projects</h1>
          <Button className="h-6 gap-1 rounded-sm !px-1.5 font-normal">
            <PlusIcon /> New
          </Button>
        </div>
        <div className="grid h-full gap-2.5 p-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="borde-border flex h-full w-full items-start justify-between rounded-sm border px-2 py-3.5"
            >
              <div className="flex flex-col">
                <h1 className="text-xs">Project #1</h1>
                <span className="text-muted-foreground text-[10px]">
                  Engineering
                </span>
              </div>
              <AvatarCircles numPeople={99} avatarUrls={mimic.mockAvatars} />
            </div>
          ))}
        </div>
        <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div>
      </div>

      <div className="group hover:bg-muted/50 bg-background border-border absolute right-0 bottom-0 hidden w-full max-w-[13rem] translate-y-10 flex-col rounded-md border px-2.5 pt-2 text-xs backdrop-blur-2xl transition-all select-none hover:shadow-xs md:flex">
        <div className="flex gap-2">
          <img
            src={user.avatar_url}
            alt={user.name}
            width={45}
            height={20}
            className="rounded-md"
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="mb-0.5 text-[10px] text-nowrap text-blue-500">
                Ep. 128
              </span>
              <Separator className="max-w-16" />
            </div>
            <span className="line-clamp-1 text-[10px]">
              Scaling CSS at Heroku with Utility Classes Full Stack
            </span>
            <span className="text-muted-foreground text-[10px]">Radio</span>
          </div>
        </div>
        <div className="mt-2.5 flex flex-col gap-0.5">
          <span className="bg-accent group-hover:bg-foreground/10 flex h-1 w-full overflow-hidden rounded-md transition-all">
            <span className="h-full w-[50%] rounded-full bg-blue-500" />
          </span>
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-blue-500">14:20</span>
            <span className="text-muted-foreground/75 text-[10px]">20:00</span>
          </div>
        </div>
        <div className="text-muted-foreground/75 flex items-center justify-between gap-2 pb-0.5">
          <BookmarkIcon size={13} className="hover:text-primary" />
          <SkipBackIcon size={13} className="hover:text-primary" />
          <RotateCcwIcon size={13} className="hover:text-primary" />
          <div className="bg-background hover:text-primary group-hover:bg-muted border-border flex size-6 translate-y-0.5 scale-150 items-center justify-center rounded-full border p-2 transition-all">
            <span className="text-[10px] font-bold">||</span>
          </div>
          <RotateCwIcon size={13} className="hover:text-primary" />
          <SkipForwardIcon size={13} className="hover:text-primary" />
          <span className="border-border hover:text-primary hover:border-primary rounded-xs border px-1 text-[10px]">
            1x
          </span>
        </div>
      </div>

      <div className="bg-accent/50 absolute right-0 -z-1 hidden h-40 w-full max-w-[13rem] -translate-x-2.5 translate-y-14 overflow-hidden rounded-md border-2 border-dashed p-2 text-xs md:flex" />
    </Section>
  );
}
