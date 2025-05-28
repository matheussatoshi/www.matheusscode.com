import { Card, CardImage, CardTitle } from "@/components/ui/card";
import { truncate } from "@/utils/functions/truncate";

export function ProjectCard() {
  return (
    <Card className="group/project gap-3 border-none bg-transparent p-0">
      <div className="relative h-40 w-full overflow-hidden rounded-xl">
        <CardImage
          src="https://github.com/user-attachments/assets/4cc1ef02-e07f-471f-9385-cc2854854d84"
          alt="Matheus Figueiredo Website Banner"
          fill
          className="object-cover transition-all duration-400 group-hover/project:scale-105"
        />
      </div>
      <CardTitle className="text-sm font-medium">
        {truncate(
          "Trust Center: A Micro Frontend Solution for Compliance and Customer Engagement",
          70,
        )}
      </CardTitle>
    </Card>
  );
}
