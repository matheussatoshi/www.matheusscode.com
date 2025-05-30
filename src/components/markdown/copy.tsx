"use client";

import { cn } from "@/lib/cn";
import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

export default function Copy({
  content,
  className,
}: {
  content: string;
  className?: string;
}) {
  const [isCopied, setIsCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(content);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  return (
    <Button
      size="icon"
      className={cn(
        "text-background dark:text-primary border-border/25 dark:border-border size-7 rounded-md border !bg-neutral-900 hover:!opacity-85",
      )}
      onClick={handleCopy}
    >
      {isCopied ? (
        <CheckIcon className="size-4" />
      ) : (
        <CopyIcon className="size-4" />
      )}
    </Button>
  );
}
