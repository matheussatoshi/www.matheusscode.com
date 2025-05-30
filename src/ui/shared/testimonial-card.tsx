import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardDescription,
  CardFooter,
  CardSpan,
} from "@/components/ui/card";

export function TestimonailCard() {
  return (
    <Card className="group/testimonial gap-2 pt-3.5 transition-all hover:-translate-y-1 hover:shadow-sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="text-accent-foreground/25 size-7"
        viewBox="0 0 16 16"
      >
        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"></path>{" "}
      </svg>

      <CardDescription>
        I couldn&apos;t be more happier with the website that Abhinay has
        created for me. From start to finish, his work ethic was impeccable. He
        was always punctual, attentive, and dedicated to making sure every
        detail was just right. What really stood out was his willingness to go
        beyond just building the site; he actively engaged in brainstorming
        sessions, offering creative ideas that truly enhanced the final product.
        His flexibility was also remarkable, as he effortlessly adapted to any
        changes or new ideas that came up along the way. I highly recommend
        Abhinay for anyone looking to bring their product to life through a
        professional, knowledgeable, and experienced frontend engineer.
      </CardDescription>

      <CardFooter className="mt-3 w-full justify-start gap-2.5 px-0">
        <Avatar className="size-9">
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/99546472?v=4"
            alt="Matheus Figueiredo"
          />
          <AvatarFallback>MS</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <CardSpan className="text-primary font-semibold">
            Nitin Verma
          </CardSpan>
          <CardSpan className="text-medium text-muted-foreground/65">
            Co-Founder | Orgzit
          </CardSpan>
        </div>
      </CardFooter>
    </Card>
  );
}
