"use client"

import { motion } from "motion/react"
import type { ComponentProps } from "react"

export function Transmutation({
  className,
  transition,
  time = 0.4,
  ...props
}: ComponentProps<typeof motion.div> & {
  time?: number
}) {
  return (
    <motion.div
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      initial={{ y: 16, opacity: 0, filter: "blur(8px)" }}
      transition={{ ease: "easeIn", duration: time }}
      {...props}
    />
  )
}
