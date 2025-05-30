import Image from "next/image";
import { Section } from "../layout/section";

export function EmptyContent({
  title,
  subtitle,
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <Section className="flex h-full max-w-sm flex-1 flex-col items-center justify-center space-y-4">
      <Image src="/empty-vector.svg" alt="Empty Box" width={300} height={300} />
      <h1 className="text-2xl font-bold">{title}</h1>
      {subtitle && (
        <p className="text-muted-foreground text-center text-base">
          {subtitle}
        </p>
      )}
    </Section>
  );
}
