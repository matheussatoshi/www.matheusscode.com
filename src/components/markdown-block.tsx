import ReactMarkdown from "react-markdown"
import Pre from "./pre"

export function MarkdownBlock({ content }: { content: string }) {
  return (
    <ReactMarkdown
      components={{
        h2: ({ ...props }) => (
          <h2
            className="mt-12 mb-4 border-input border-b pb-3 font-semibold text-2xl first:mt-0"
            {...props}
          />
        ),
        p: ({ ...props }) => (
          <p className="text-muted-foreground text-sm" {...props} />
        ),
        strong: ({ ...props }) => (
          <strong className="font-medium text-primary text-sm" {...props} />
        ),
        pre: ({ ...props }) => <Pre {...props} />,
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
