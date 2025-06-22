import { cn } from "@/lib/cn";

export function BouncingDots({
  className,
  lotClsx,
  ...props
}: React.ComponentProps<"div"> & {
  lotClsx?: string;
}) {
  return (
    <div
      role="status"
      className={cn("flex flex-row gap-1", className)}
      {...props}
    >
      <div
        className={cn(
          "bg-muted-foreground/50 size-2 animate-bounce rounded-full",
          lotClsx,
        )}
      ></div>
      <div
        className={cn(
          "bg-muted-foreground/50 size-2 animate-bounce rounded-full [animation-delay:-.3s]",
          lotClsx,
        )}
      ></div>
      <div
        className={cn(
          "bg-muted-foreground/50 size-2 animate-bounce rounded-full [animation-delay:-.5s]",
          lotClsx,
        )}
      ></div>
    </div>
  );
}
