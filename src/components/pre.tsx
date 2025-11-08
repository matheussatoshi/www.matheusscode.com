"use client"

import { useTheme } from "next-themes"
import type React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism"
import { codeBlock } from "@/utils/functions/code-block"
import Copy from "./copy"

export default function Pre({
  children,
  ...props
}: React.ComponentProps<"pre">) {
  const { theme } = useTheme()
  const codeBlocks = codeBlock(children)

  return (
    <div className="group/pre relative my-6 overflow-hidden rounded-md bg-muted/50 text-muted-foreground text-sm">
      <div className="absolute top-3 right-2.5 z-10 hidden opacity-0 group-hover/pre:opacity-100 sm:block">
        <Copy content={"dasdsa"} />
      </div>
      <SyntaxHighlighter
        customStyle={{
          margin: 0,
          backgroundColor: theme === "dark" ? "#f5f5f505" : "#1e1e1e",
        }}
        language="jsx"
        //@ts-expect-error
        style={darcula}
        {...props}
      >
        {codeBlocks}
      </SyntaxHighlighter>
    </div>
  )
}
