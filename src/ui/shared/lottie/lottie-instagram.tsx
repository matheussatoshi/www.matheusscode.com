"use client";

import Lottie, { LottieRefCurrentProps } from "lottie-react";
import instagramIcon from "@/public/static/instagram.json";
import { Link } from "@/components/ui/link";
import React from "react";
import { cn } from "@/lib/cn";

export function LottieInstagram({
  className,
  ...props
}: React.ComponentProps<"a">) {
  const ref = React.useRef<LottieRefCurrentProps | null>(null);

  return (
    <Link
      href="/"
      variant="ghost"
      onMouseEnter={() => ref.current?.play()}
      onMouseLeave={() => ref.current?.stop()}
      className={cn("opacity-50 hover:opacity-100", className)}
      {...props}
    >
      <Lottie
        lottieRef={ref}
        animationData={instagramIcon}
        loop={false}
        autoplay={false}
        className="size-8 text-primary"
      />
    </Link>
  );
}
