import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardDescription,
  CardFooter,
  CardImage,
  CardSpan,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/components/ui/link";
import { Separator } from "@/components/ui/separator";
import { MainLayout } from "@/ui/layout/page-wrapper";
import { Section } from "@/ui/layout/section";
import { truncate } from "@/utils/functions/truncate";

export default function Home() {
  return (
    <MainLayout>
      <Section className="flex flex-col-reverse items-center justify-between md:flex-row">
        <div className="flex flex-col">
          <h1 className="text-lg font-bold">Matheus Figueiredo</h1>
          <h3 className="text-muted-foreground font-medium">
            Developer {"<>"} Content Creator
          </h3>
        </div>

        <div className="relative mb-3.5 md:mb-0">
          <Avatar className="size-16">
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/99546472?v=4"
              alt="Matheus Figueiredo"
            />
            <AvatarFallback>MS</AvatarFallback>
          </Avatar>

          <span className="absolute right-0 bottom-0 flex size-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex size-4 rounded-full bg-emerald-500"></span>
          </span>
        </div>
      </Section>

      <Section>
        <p className="text-center text-lg font-medium md:text-left md:text-2xl">
          “👋🏼 Hi there — I&apos;m a software developer and designer based in
          Manaus, Brazil, passionate about delivering high-quality digital
          products.{" "}
          <span className="text-muted-foreground">
            My focus is to create intuitive, user-centric software that empowers
            users and drives meaningful change.
          </span>
          ”
        </p>
      </Section>

      <br />

      <Section className="flex flex-col">
        <div className="relative mb-14 flex items-center gap-7">
          <div className="flex flex-col space-y-2 text-wrap md:text-nowrap">
            <h1 className="text-xl font-bold">Portfolio</h1>
            <p className="text-muted-foreground">
              Here&apos;s a glimpse into some of my recent projects. <br /> Be
              sure to check back often, as I&apos;m always adding <br /> new and
              exciting work to my portfolio!
            </p>
          </div>
          <Separator className="hidden flex-1 md:block" />
        </div>

        <div className="grid w-full grid-cols-1 grid-rows-1 gap-7 md:grid-cols-2">
          {[1, 2, 3, 4].map((item) => (
            <Card
              key={item}
              className="group/project gap-3 border-none bg-transparent p-0"
            >
              <div className="relative h-40 w-full overflow-hidden rounded-xl">
                <CardImage
                  src="https://github.com/user-attachments/assets/4cc1ef02-e07f-471f-9385-cc2854854d84"
                  alt="Matheus Figueiredo Website Banner"
                  fill
                  className="object-cover transition-all duration-400 group-hover/project:scale-105"
                />
              </div>
              <CardTitle className="text-sm font-medium">
                {truncate(
                  "Trust Center: A Micro Frontend Solution for Compliance and Customer Engagement",
                  70,
                )}
              </CardTitle>
            </Card>
          ))}
        </div>

        <Link className="mx-auto mt-12"> View Full Portfolio </Link>
      </Section>

      <br />

      <Section className="flex flex-col">
        <div className="relative mb-14 flex items-center gap-7">
          <div className="flex flex-col space-y-2 text-wrap md:text-nowrap">
            <h1 className="text-xl font-bold">Side Projects</h1>
            <p className="text-muted-foreground">
              Dive into my latest side projects and explore <br /> the
              cutting-edge tools, frameworks, and <br /> techniques I&apos;ve
              used to bring these ideas to life.
            </p>
          </div>
          <Separator className="hidden flex-1 md:block" />
        </div>

        <div className="grid w-full grid-cols-1 grid-rows-1 gap-7 md:grid-cols-2">
          {[1, 2, 3, 4].map((item) => (
            <Card
              key={item}
              className="group/project gap-3 border-none bg-transparent p-0"
            >
              <div className="relative h-40 w-full overflow-hidden rounded-xl">
                <CardImage
                  src="https://github.com/user-attachments/assets/4cc1ef02-e07f-471f-9385-cc2854854d84"
                  alt="Matheus Figueiredo Website Banner"
                  fill
                  className="object-cover transition-all duration-400 group-hover/project:scale-105"
                />
              </div>
              <CardTitle className="text-sm font-medium">
                {truncate(
                  "Trust Center: A Micro Frontend Solution for Compliance and Customer Engagement",
                  70,
                )}
              </CardTitle>
            </Card>
          ))}
        </div>

        <Link className="mx-auto mt-12"> View All Side Projects </Link>
      </Section>

      <br />

      <Section className="flex flex-col">
        <div className="relative mb-14 flex items-center gap-7">
          <div className="flex flex-col space-y-2 text-wrap md:text-nowrap">
            <h1 className="text-xl font-bold">Testimonials</h1>
            <p className="text-muted-foreground">
              Here&apos;s what some of my recent clients have to <br /> say
              about working with me. Their experiences <br /> showcase the value
              and quality I bring to <br /> every project.
            </p>
          </div>
          <Separator className="hidden flex-1 md:block" />
        </div>
        <div className="grid w-full grid-cols-1 grid-rows-1 gap-7 md:grid-cols-2">
          {[1, 2, 3, 4].map((item) => (
            <Card
              key={item}
              className="group/testimonial gap-2 bg-transparent pt-3.5 transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="text-accent-foreground/25 size-7"
                viewBox="0 0 16 16"
              >
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"></path>{" "}
              </svg>

              <CardDescription>
                I couldn&apos;t be more happier with the website that Abhinay
                has created for me. From start to finish, his work ethic was
                impeccable. He was always punctual, attentive, and dedicated to
                making sure every detail was just right. What really stood out
                was his willingness to go beyond just building the site; he
                actively engaged in brainstorming sessions, offering creative
                ideas that truly enhanced the final product. His flexibility was
                also remarkable, as he effortlessly adapted to any changes or
                new ideas that came up along the way. I highly recommend Abhinay
                for anyone looking to bring their product to life through a
                professional, knowledgeable, and experienced frontend engineer.
              </CardDescription>

              <CardFooter className="mt-3 w-full justify-start gap-2.5 px-0">
                <Avatar className="size-9">
                  <AvatarImage
                    src="https://avatars.githubusercontent.com/u/99546472?v=4"
                    alt="Matheus Figueiredo"
                  />
                  <AvatarFallback>MS</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <CardSpan className="text-primary font-semibold">
                    Nitin Verma
                  </CardSpan>
                  <CardSpan className="text-normal text-muted-foreground">
                    Co-Founder | Orgzit
                  </CardSpan>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Section>

      <br />

      <Section className="flex flex-col">
        <div className="relative mb-14 flex items-center gap-7">
          <div className="flex flex-col space-y-2 text-wrap md:text-nowrap">
            <h1 className="text-xl font-bold">My Writings</h1>
            <p className="text-muted-foreground">
              Along with coding I also like to write about life <br /> and
              technology. Here are some of my recent posts.
            </p>
          </div>
          <Separator className="hidden flex-1 md:block" />
        </div>

        <div className="flex w-full flex-col gap-7">
          {[1, 2, 3, 4].map((item) => (
            <Card
              key={item}
              className="group/project border-border flex-col gap-4 rounded-none border-x-0 border-t-0 border-b bg-transparent p-0 pb-6 md:flex-row"
            >
              <div className="w-full">
                <CardTitle className="mb-3 text-xl">
                  {truncate(
                    " Mastering Dynamic Theming in Tailwind CSS: A Step-by-Step Guide ",
                    70,
                  )}
                </CardTitle>
                <CardDescription className="mb-3 line-clamp-2 text-xs md:line-clamp-5">
                  Master the art of dynamic theming in Tailwind CSS and create
                  adaptable, user-centric interfaces in your React application.
                  This final part of our series culminates your journey from
                  basic setup to advanced styling, empowering you to build
                  flexible, professional-grade web applications that respond to
                  user preferences in real-time.
                </CardDescription>
                <CardSpan className="mt-2.5"> 15 Mar 2024 </CardSpan>
              </div>
              <div className="bg-muted group/project relative w-64 overflow-hidden rounded-xl">
                <CardImage
                  src="https://github.com/user-attachments/assets/4cc1ef02-e07f-471f-9385-cc2854854d84"
                  alt="Matheus Figueiredo Website Banner"
                  fill
                  className="h-full w-full object-cover transition-all duration-400 group-hover/project:scale-105"
                />
              </div>
            </Card>
          ))}
        </div>

        <Link className="mx-auto mt-12"> View All Writings </Link>
      </Section>
    </MainLayout>
  );
}
