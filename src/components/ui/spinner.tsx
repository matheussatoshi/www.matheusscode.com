/** biome-ignore-all lint/suspicious/noArrayIndexKey: using index as key is acceptable for static spinner bars */
import type React from "react"
import { cn } from "@/lib/cn"

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  lotClxs?: string
}

export function Spinner({
  className,
  lotClsx,
  ...props
}: React.ComponentProps<"div"> & {
  lotClsx?: string
}) {
  const bars = Array.from({ length: 12 }).fill(0)

  return (
    <div className={cn("size-5", className)} {...props}>
      <div className="relative top-1/2 left-1/2 h-[inherit] w-[inherit]">
        {bars.map((_, i) => (
          // biome-ignore lint/a11y/useSemanticElements: role="status" on span is intentional for spinner accessibility
          <span
            aria-label={`spinner-bar-${i + 1}`}
            className={cn(
              "-top-[3.9%] -left-[10%] absolute h-[8%] w-[24%] animate-spinner rounded-md bg-black dark:bg-white",
              `bar:nth-child(${i + 1}`,
              lotClsx
            )}
            key={`spinner-bar-${i}`}
            role="status"
            style={{
              animationDelay: `-${1.3 - i * 0.1}s`,
              transform: `rotate(${30 * i}deg) translate(146%)`,
            }}
          />
        ))}
        <span className="sr-only opacity-0">Loading...</span>
      </div>
    </div>
  )
}
