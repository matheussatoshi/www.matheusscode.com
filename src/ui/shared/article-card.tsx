import {
  Card,
  CardDescription,
  CardImage,
  CardSpan,
  CardTitle,
} from "@/components/ui/card";
import { truncate } from "@/utils/functions/truncate";

export function ArticleCard() {
  return (
    <Card className="group/project border-border flex-col gap-4 rounded-none border-x-0 border-t-0 border-b bg-transparent p-0 pb-6 md:flex-row">
      <div className="w-full">
        <CardTitle className="mb-3 text-xl">
          {truncate(
            "Mastering Dynamic Theming in Tailwind CSS: A Step-by-Step Guide",
            70,
          )}
        </CardTitle>
        <CardDescription className="mb-3 line-clamp-2 text-xs md:line-clamp-5">
          Master the art of dynamic theming in Tailwind CSS and create
          adaptable, user-centric interfaces in your React application. This
          final part of our series culminates your journey from basic setup to
          advanced styling, empowering you to build flexible, professional-grade
          web applications that respond to user preferences in real-time.
        </CardDescription>
        <CardSpan className="text-muted-foreground/65 mt-2.5">
          {" "}
          15 Mar 2024{" "}
        </CardSpan>
      </div>
      <div className="bg-muted group/project relative w-64 overflow-hidden rounded-xl">
        <CardImage
          src="https://github.com/user-attachments/assets/4cc1ef02-e07f-471f-9385-cc2854854d84"
          alt="Matheus Figueiredo Website Banner"
          fill
          className="h-full w-full object-cover transition-all duration-400 group-hover/project:scale-105"
        />
      </div>
    </Card>
  );
}
