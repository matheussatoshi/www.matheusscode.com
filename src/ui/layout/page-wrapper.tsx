import { cn } from "@/lib/cn";

export function MainLayout({
  className,
  ...props
}: React.ComponentProps<"main">) {
  return (
    <main
      className={cn(
        "mt-12 flex min-h-screen w-full flex-col space-y-8 md:mt-44",
        className,
      )}
      {...props}
    />
  );
}
