/* eslint-disable @next/next/no-img-element */
"use client"

import { ImageIcon } from "lucide-react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/cn"
import { Button } from "./ui/button"

export function ImagePreviewDialog({
  src,
  alt,
  className,
}: {
  src: string | undefined
  alt: string | undefined
  className?: string
}) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            aria-label="Play video"
            className={cn(
              "group !border !border-border/75 relative mt-2 h-20 w-full max-w-40 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-accent p-0 hover:bg-black/50",
              className
            )}
            type="button"
            variant="ghost"
          >
            <ImageIcon className="size-8 text-primary-foreground opacity-0 transition-all duration-300 group-hover:opacity-100" />
            <Image
              alt={alt!}
              className="rounded-md object-cover transition-all duration-300 group-hover:scale-105 group-hover:opacity-50 group-hover:blur-[1px]"
              fill
              src={src!}
            />
          </Button>
        </DialogTrigger>
        <DialogContent className="h-[500px] overflow-hidden p-0 sm:max-w-2xl">
          <Image alt={alt!} className="object-contain" fill src={src!} />
        </DialogContent>
      </form>
    </Dialog>
  )
}
