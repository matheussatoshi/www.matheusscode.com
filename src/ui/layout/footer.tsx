import dynamic from "next/dynamic"
import type { ComponentProps } from "react"
import { cn } from "@/lib/cn"
import { copyright } from "@/utils/functions/copyright"

const DotPattern = dynamic(() =>
  import("@/components/magicui/dot-pattern").then((mod) => mod.DotPattern)
)

export function Footer({ className, ...props }: ComponentProps<"footer">) {
  return (
    <footer
      className={cn(
        "relative flex max-w-full items-center justify-center space-y-1.5 overflow-hidden border-t border-t-border bg-accent/25 py-10",
        className
      )}
      {...props}
    >
      <div className="absolute flex h-[100px] w-full flex-col items-center justify-center overflow-hidden opacity-50">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
          )}
          glow={true}
        />
      </div>
      <span className="text-muted-foreground">{copyright()}</span>
    </footer>
  )
}
