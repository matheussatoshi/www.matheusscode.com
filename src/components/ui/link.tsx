import type { VariantProps } from "class-variance-authority"
import NextLink, { type LinkProps } from "next/link"
import { buttonVariants } from "./button"

export function Link({
  variant = "default",
  size = "default",
  href = "/",
  className,
  ...props
}: React.ComponentProps<"a"> &
  Omit<LinkProps, "href"> &
  VariantProps<typeof buttonVariants>) {
  return (
    <NextLink
      className={buttonVariants({ variant, size, className })}
      href={href}
      {...props}
    />
  )
}
