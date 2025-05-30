import { cn } from "@/lib/cn";

export function Section({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      className={cn("mx-auto w-full max-w-2xl p-2", className)}
      {...props}
    />
  );
}
