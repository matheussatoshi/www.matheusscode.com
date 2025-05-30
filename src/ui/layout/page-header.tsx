import { Separator } from "@/components/ui/separator";
import { ArrowDownIcon } from "lucide-react";
import { Section } from "./section";

export function PageHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <Section className="flex flex-col space-y-10">
      <div className="relative flex items-center gap-7">
        <div className="flex flex-col space-y-2 text-wrap">
          <h1 className="text-2xl font-bold">{title}</h1>
          {description && (
            <p className="text-muted-foreground">{description}</p>
          )}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Separator className="flex-1" />
        <span className="border-border bg-accent text-muted-foreground mx-auto flex size-7 items-center justify-center rounded-full border">
          <ArrowDownIcon size={16} />
        </span>
        <Separator className="flex-1" />
      </div>
    </Section>
  );
}
