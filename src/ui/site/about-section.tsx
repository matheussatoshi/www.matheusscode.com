import { Transmutation } from "@/components/transmulation"
import { Section } from "../layout/section"

export function AboutSection() {
  return (
    <Transmutation time={0.6}>
      <Section>
        <h1 className="font-medium">About</h1>
        <p className="mt-3.5 font-normal text-foreground/75">
          Software Engineer with 6 years of experience, front-end specialist and
          aspiring designer. I create minimalist and functional interfaces with
          a focus on usability, performance and scalable architecture. I work
          with TypeScript, React, Next.js and Node.js to deliver solutions that
          solve real problems.
        </p>
      </Section>
    </Transmutation>
  )
}
