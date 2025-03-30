import { JOBS } from "@/registry/registry-experiences";
import { SOCIAL_MEDIAS } from "@/registry/registry-social-medias";
import { STACK } from "@/registry/registry-stacks";
import { ACTUALLY_WORKS } from "@/registry/registry-works";
import { ParticlesBackground } from "@/ui/interactives/particles-background";
import { ContentWrapper } from "@/ui/layout/content-wrapper";
import { PageWrapper } from "@/ui/layout/page-wrapper";
import Image from "next/image";
import Link from "next/link";

const slogan =
  '"Wisdom is the principal thing; get wisdom, and with all thy possessions get understanding."';

export default function Page() {
  return (
    <ParticlesBackground>
      <PageWrapper>
        <ContentWrapper>
          <section id="heading" className="mb-6">
            <h1 className="text-4xl font-bold">Matheus Figueiredo</h1>
            <p className="text-lg text-neutral-300">
              Hey, I am Matheus Figueiredo, a passionate full-stack developer
              and technology enthusiast.
            </p>

            <div className="mx-auto mt-10 mb-6 flex w-full max-w-full flex-col items-center justify-center rounded-md py-6 text-wrap">
              <p className="w-full font-mono">{slogan}</p>
              <br />
              <span className="ml-auto font-mono">— Proverbs 4:7</span>
            </div>

            <div className="mb-6 space-y-8">
              <div>
                <h2 className="mb-4 border-none p-0 text-lg font-medium text-neutral-400">
                  Working at
                </h2>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {ACTUALLY_WORKS.map((item) => (
                    <span
                      key={item.id}
                      className="bg-primary/10 hover:bg-primary/20 text-primary inline-flex items-center justify-center gap-1.5 rounded-md px-2 py-1 text-sm transition-all select-none"
                    >
                      {item.src && (
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={30}
                          height={30}
                        />
                      )}
                      <span className="mt-0.5">{item.label}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-4 border-none p-0 text-lg font-medium text-neutral-400">
                  Specializing in
                </h2>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {STACK.map((item) => (
                    <span
                      key={item.id}
                      className="bg-primary/10 hover:bg-primary/20 text-primary inline-flex items-center justify-center gap-1.5 rounded-md px-2 py-1 text-sm transition-all select-none"
                    >
                      {item.src && (
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={16}
                          height={16}
                        />
                      )}
                      <span className="mt-0.5">{item.label}</span>
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-neutral-300">
                Turning ideas into reality through code is where my passion
                lies. I focus on creating clean, efficient, and user-friendly
                applications. You can find my projects here.
              </p>
            </div>
          </section>
          <section id="experience" className="mb-12">
            <h2 className="mb-4 border-none p-0 text-lg font-medium text-neutral-400">
              Experience
            </h2>
            <div className="mt-2.5 space-y-6">
              {JOBS.map((item) => (
                <div key={item.id}>
                  <h3 className="m-0 text-lg font-medium">{item.office}</h3>
                  <p className="text-muted-foreground my-1.5 mb-1 text-sm">
                    {item.beginning_and_end}
                  </p>
                  <p className="mt-0 text-base text-neutral-300">
                    {item.description}
                  </p>
                  {item.id <= JOBS.length - 1 && (
                    <div className="mt-6 h-[1px] w-full bg-neutral-800" />
                  )}
                </div>
              ))}
            </div>
          </section>
          <section id="contact">
            <h1 className="mb-4 border-none p-0 text-lg font-medium text-neutral-400">
              Find me on
            </h1>
            <div className="my-2.5 flex flex-wrap gap-2.5">
              {SOCIAL_MEDIAS.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  className="text-primary inline-flex items-center gap-1 rounded-full py-1 text-sm hover:text-neutral-300"
                >
                  <item.icon size={16} />
                  <span className="text-base">{item.label}</span>
                </Link>
              ))}
            </div>
            <h2 className="border-none text-base font-medium text-neutral-400">
              Or email me at{" "}
              <span className="font-regular font-mono text-neutral-300">
                matheussdev3@gmail.com
              </span>
            </h2>
          </section>
        </ContentWrapper>
      </PageWrapper>
    </ParticlesBackground>
  );
}
