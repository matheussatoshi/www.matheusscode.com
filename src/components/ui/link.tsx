import { VariantProps } from "class-variance-authority";
import { LinkProps } from "next/link";
import { buttonVariants } from "./button";
import NextLink from "next/link";

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
      href={href}
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  );
}
