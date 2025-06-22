import { cn } from "@/lib/cn";

export function PageLayout({
  className,
  ...props
}: React.ComponentProps<"main">) {
  return (
    <main
      className={cn("flex w-full flex-1 flex-col px-4 pb-16", className)}
      {...props}
    />
  );
}
