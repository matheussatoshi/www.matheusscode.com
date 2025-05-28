import { Separator } from "@/components/ui/separator";
import { Section } from "../layout/section";
import { TestimonailCard } from "../shared/testimonial-card";

export function TestimonialsSection() {
  return (
    <Section className="flex flex-col">
      <div className="relative mb-14 flex items-center gap-7">
        <div className="flex flex-col space-y-2 text-wrap md:text-nowrap">
          <h1 className="text-xl font-bold">Testimonials</h1>
          <p className="text-muted-foreground">
            Here&apos;s what some of my recent clients have to <br /> say about
            working with me. Their experiences <br /> showcase the value and
            quality I bring to <br /> every project.
          </p>
        </div>
        <Separator className="hidden flex-1 md:block" />
      </div>
      <div className="grid w-full grid-cols-1 grid-rows-1 gap-7 md:grid-cols-2">
        {[1, 2, 3, 4].map((item) => (
          <TestimonailCard key={item} />
        ))}
      </div>
    </Section>
  );
}
