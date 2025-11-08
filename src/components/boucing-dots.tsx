import { cn } from "@/lib/cn"

export function BouncingDots({
  className,
  lotClsx,
  ...props
}: React.ComponentProps<"div"> & {
  lotClsx?: string
}) {
  return (
    // biome-ignore lint/a11y/useSemanticElements: role="status" on div is intentional for spinner accessibility
    <div
      className={cn("flex flex-row gap-1", className)}
      role="status"
      {...props}
    >
      <span>Carregando...</span>
      <div
        className={cn(
          "size-2 animate-bounce rounded-full bg-muted-foreground/50",
          lotClsx
        )}
      />
      <div
        className={cn(
          "size-2 animate-bounce rounded-full bg-muted-foreground/50 [animation-delay:-.3s]",
          lotClsx
        )}
      />
      <div
        className={cn(
          "size-2 animate-bounce rounded-full bg-muted-foreground/50 [animation-delay:-.5s]",
          lotClsx
        )}
      />
    </div>
  )
}
