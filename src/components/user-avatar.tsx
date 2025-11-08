import { UserRoundXIcon } from "lucide-react"
import { cn } from "@/lib/cn"
import { shortName } from "@/utils/functions/short-name"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export function UserAvatar({
  src,
  alt = "Unknown",
  className,
  ...props
}: React.ComponentProps<typeof Avatar> & {
  src?: string
  alt: string
}) {
  if (!(alt || src)) {
    return (
      <Avatar
        className={cn("bg-accent", className)}
        data-testid="avatar-root"
        {...props}
      >
        <UserRoundXIcon data-testid="avatar-icon" />
      </Avatar>
    )
  }

  return (
    <Avatar
      className={cn("bg-accent", className)}
      data-testid="user-avatar"
      {...props}
    >
      <AvatarImage alt={alt} src={src} />
      <AvatarFallback>{shortName(alt)}</AvatarFallback>
    </Avatar>
  )
}
