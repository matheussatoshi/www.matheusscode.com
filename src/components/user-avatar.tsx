import { cn } from "@/lib/cn";
import { shortName } from "@/utils/functions/short-name";
import { UserRoundXIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function UserAvatar({
  src,
  alt = "Unknown",
  className,
  ...props
}: React.ComponentProps<typeof Avatar> & {
  src?: string;
  alt: string;
}) {
  if (!alt && !src) {
    return (
      <Avatar
        data-testid="avatar-root"
        className={cn("bg-accent", className)}
        {...props}
      >
        <UserRoundXIcon data-testid="avatar-icon" />
      </Avatar>
    );
  }

  return (
    <Avatar
      data-testid="user-avatar"
      className={cn("bg-accent", className)}
      {...props}
    >
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{shortName(alt)}</AvatarFallback>
    </Avatar>
  );
}
