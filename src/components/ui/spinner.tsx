import { cn } from "@/lib/cn";
import React from "react";

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  lotClxs?: string;
}

export function Spinner({
  className,
  lotClsx,
  ...props
}: React.ComponentProps<"div"> & {
  lotClsx?: string;
}) {
  const bars = Array(12).fill(0);

  return (
    <div className={cn("size-5", className)} {...props}>
      <div className="relative top-1/2 left-1/2 h-[inherit] w-[inherit]">
        {bars.map((_, i) => (
          <div
            key={`spinner-bar-${i}`}
            aria-label={`spinner-bar-${i + 1}`}
            className={cn(
              "animate-spinner absolute -top-[3.9%] -left-[10%] h-[8%] w-[24%] rounded-md bg-black dark:bg-white",
              `bar:nth-child(${i + 1}`,
              lotClsx
            )}
            style={{
              animationDelay: `-${1.3 - i * 0.1}s`,
              transform: `rotate(${30 * i}deg) translate(146%)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
