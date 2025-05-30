import { Section } from "../layout/section";

export function AboutSection() {
  return (
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
  );
}
