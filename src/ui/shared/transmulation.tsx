"use client";

import { cn } from "@/lib/cn";
import { motion } from "motion/react";
import { ComponentProps } from "react";

type Transition = {
  initial: Record<string, string | number>;
  animate: Record<string, string | number>;
};

export default function Transmutation({
  className,
  transition,
  time = 0.4,
  ...props
}: ComponentProps<typeof motion.div> & {
  time?: number;
  transition: Transition;
}) {
  return (
    <motion.div
      {...props}
      initial={transition?.initial}
      animate={transition?.animate}
      transition={{ ease: "easeIn", duration: time }}
      className={cn(className)}
    />
  );
}
