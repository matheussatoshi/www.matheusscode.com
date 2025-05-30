import { cn } from "@/lib/cn";

export function PageLayout({
  className,
  ...props
}: React.ComponentProps<"main">) {
  return (
    <main
      className={cn(
        "flex min-h-[calc(100vh-101px)] w-full flex-col space-y-14 px-4 md:pt-44",
        className,
      )}
      {...props}
    />
  );
}
