"use client";

import Lottie, { LottieRefCurrentProps } from "lottie-react";
import githubIcon from "@/public/static/github.json";
import { Link } from "@/components/ui/link";
import React from "react";
import { cn } from "@/lib/cn";

export function LottieGithub({
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
        animationData={githubIcon}
        loop={false}
        autoplay={false}
        className="size-8"
      />
    </Link>
  );
}
