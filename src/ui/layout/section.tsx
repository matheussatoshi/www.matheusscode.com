import { cn } from "@/lib/cn"

export function Section({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      className={cn("mx-auto w-full max-w-[635px] space-y-1.5 p-4", className)}
      {...props}
    />
  )
}
