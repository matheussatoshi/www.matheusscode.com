import { cn } from "@/lib/cn";

export function SectionWrapper({
  children,
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      {...props}
      className={cn(
        "flex h-full w-full flex-col items-start justify-start",
        className,
      )}
    >
      {children}
    </section>
  );
}
