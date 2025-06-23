import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/cn";
import { ArrowUpRightIcon, ImageIcon } from "lucide-react";
import Image from "next/image";
import * as NextLink from "next/link";
import LoadingIndicator from "../link-status";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

export function FeedList({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      className={cn("mt-8 flex w-full flex-col space-y-2", className)}
      {...props}
    />
  );
}

export function FeedCard({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      className={cn("inline-flex w-full items-start", className)}
      {...props}
    />
  );
}

export function FeedTitle({
  className,
  children,
  href = "/",
  ...props
}: React.ComponentProps<"a"> & NextLink.LinkProps) {
  return (
    <NextLink.default
      href={href}
      title={href}
      target="_blank"
      rel="noreferrer noopener"
      className={cn(
        "group/feed-title inline-flex gap-1 font-normal underline-offset-4 hover:underline",
        className,
      )}
      {...props}
    >
      <LoadingIndicator />
      {children}
      <ArrowUpRightIcon
        size={12}
        strokeWidth={1}
        className="-translate-x-1 translate-y-1 transition-all group-hover/feed-title:translate-0 group-focus/feed-title:-translate-x-1 group-focus/feed-title:translate-y-1"
      />
    </NextLink.default>
  );
}

export function FeedDescription({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn("text-foreground/75 font-normal", className)}
      {...props}
    />
  );
}

export function FeedLabel({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "text-muted-foreground flex w-28 items-center gap-2 font-normal",
        className,
      )}
      {...props}
    />
  );
}

export function FeedSeparator({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("bg-muted-foreground h-[1px] w-4", className)} />;
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
  );
}

export function FeedGallery({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("mt-6 flex w-full gap-2", className)} {...props} />;
}

export function FeedImage({
  className,
  src,
  alt,
  ...props
}: React.ComponentProps<typeof AspectRatio> & {
  src: string;
  alt: string;
}) {
  return (
    <Dialog>
      <DialogTrigger className="group/feed-image cursor-pointer p-0" asChild>
        <AspectRatio
          className="relative flex items-center justify-center"
          ratio={5 / 1}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="rounded-sm object-cover transition-all group-hover/feed-image:brightness-35 group-hover/feed-image:grayscale-35"
          />
          <ImageIcon
            strokeWidth={1.2}
            className="text-muted dark:text-muted-foreground absolute opacity-0 transition-all duration-300 group-hover/feed-image:opacity-75"
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
            src={src}
            alt={alt}
            fill
            className="rounded-md object-cover transition-all group-hover/feed-image:brightness-35 group-hover/feed-image:grayscale-35"
          />
        </AspectRatio>
      </DialogContent>
    </Dialog>
  );
}
