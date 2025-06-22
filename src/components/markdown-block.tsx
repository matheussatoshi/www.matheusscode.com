import ReactMarkdown from "react-markdown";
import Pre from "./pre";

export function MarkdownBlock({ content }: { content: string }) {
  return (
    <ReactMarkdown
      components={{
        h2: ({ ...props }) => (
          <h2
            className="border-input mt-12 mb-4 border-b pb-3 text-2xl font-semibold first:mt-0"
            {...props}
          />
        ),
        p: ({ ...props }) => (
          <p className="text-muted-foreground text-sm" {...props} />
        ),
        strong: ({ ...props }) => (
          <strong className="text-primary text-sm font-medium" {...props} />
        ),
        pre: ({ ...props }) => {
          return <Pre {...props} />;
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
