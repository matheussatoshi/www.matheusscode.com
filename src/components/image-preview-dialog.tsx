/* eslint-disable @next/next/no-img-element */
"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger
} from "@/components/ui/dialog";
import { ImageIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

export function ImagePreviewDialog({
  src,
  alt,
}: {
  src: string;
  alt?: string;
  className?: string;
}) {

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            variant='ghost'
            type="button"
            aria-label="Play video"
            className="group max-w-40 rounded-lg w-full h-20 cursor-pointer !border !border-border/75 mt-2 gap-2 p-0 items-center justify-center overflow-hidden relative bg-accent hover:bg-black/50"
          >
            <ImageIcon className="size-8 text-primary-foreground group-hover:opacity-100 opacity-0 transition-all duration-300" />
            <Image src={src!} alt={alt!} fill className="rounded-md group-hover:opacity-50 duration-300 transition-all group-hover:blur-[1px] group-hover:scale-105 object-cover" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-2xl h-[500px] overflow-hidden p-0">
          <Image src={src!} alt={alt!} fill className="object-contain" />
        </DialogContent>
      </form>
    </Dialog>
  );
}



