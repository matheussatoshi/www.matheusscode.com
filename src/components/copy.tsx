"use client"

import { CheckIcon, CopyIcon } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/cn"
import { Button } from "./ui/button"

export default function Copy({
  content,
  className,
}: {
  content: string
  className?: string
}) {
  const [isCopied, setIsCopied] = useState(false)

  async function handleCopy() {
    await navigator.clipboard.writeText(content)
    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  return (
    <Button
      className={cn(
        "size-7 rounded-md bg-background text-primary hover:bg-background/50 active:scale-95",
        className
      )}
      onClick={handleCopy}
      size="icon"
    >
      {isCopied ? (
        <CheckIcon className="size-4" />
      ) : (
        <CopyIcon className="size-4" />
      )}
    </Button>
  )
}
