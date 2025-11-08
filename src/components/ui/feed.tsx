import { ArrowUpRightIcon, ImageIcon } from "lucide-react"
import Image from "next/image"
import * as NextLink from "next/link"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { cn } from "@/lib/cn"
import LoadingIndicator from "../link-status"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog"

export function FeedList({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      className={cn("mt-8 flex w-full flex-col space-y-2", className)}
      {...props}
    />
  )
}

export function FeedCard({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      className={cn("inline-flex w-full items-start", className)}
      {...props}
    />
  )
}

export function FeedTitle({
  className,
  children,
  href = "/",
  ...props
}: React.ComponentProps<"a"> & NextLink.LinkProps) {
  return (
    <NextLink.default
      className={cn(
        "group/feed-title inline-flex gap-1 font-normal underline-offset-4 hover:underline",
        className
      )}
      href={href}
      rel="noreferrer noopener"
      target="_blank"
      title={href}
      {...props}
    >
      <LoadingIndicator />
      {children}
      <ArrowUpRightIcon
        className="-translate-x-1 group-hover/feed-title:translate-0 group-focus/feed-title:-translate-x-1 translate-y-1 transition-all group-focus/feed-title:translate-y-1"
        size={12}
        strokeWidth={1}
      />
    </NextLink.default>
  )
}

export function FeedDescription({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn("font-normal text-foreground/75", className)}
      {...props}
    />
  )
}

export function FeedLabel({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex w-28 items-center gap-2 font-normal text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

export function FeedSeparator({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("h-[1px] w-4 bg-muted-foreground", className)}
      {...props}
    />
  )
}

export function FeedContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex w-full flex-col space-y-1.5 pr-2 pl-8", className)}
      {...props}
    />
  )
}

export function FeedGallery({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("mt-6 flex w-full gap-2", className)} {...props} />
}

export function FeedImage({
  className,
  src,
  alt,
  ...props
}: React.ComponentProps<typeof AspectRatio> & {
  src: string
  alt: string
}) {
  return (
    <Dialog>
      <DialogTrigger asChild className="group/feed-image cursor-pointer p-0">
        <AspectRatio
          className="relative flex items-center justify-center"
          ratio={5 / 1}
          {...props}
        >
          <Image
            alt={alt}
            className="rounded-sm object-cover transition-all group-hover/feed-image:brightness-35 group-hover/feed-image:grayscale-35"
            fill
            src={src}
          />
          <ImageIcon
            className="absolute text-muted opacity-0 transition-all duration-300 group-hover/feed-image:opacity-75 dark:text-muted-foreground"
            strokeWidth={1.2}
          />
        </AspectRatio>
      </DialogTrigger>
      <DialogContent className="border-0 p-0">
        <DialogHeader className="hidden">
          <DialogTitle />
          <DialogDescription />
        </DialogHeader>
        <AspectRatio>
          <Image
            alt={alt}
            className="rounded-md object-cover transition-all group-hover/feed-image:brightness-35 group-hover/feed-image:grayscale-35"
            fill
            src={src}
          />
        </AspectRatio>
      </DialogContent>
    </Dialog>
  )
}
