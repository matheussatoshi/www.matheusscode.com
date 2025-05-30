"use client";

import { getMyFusor } from "@/utils/functions/date";
import { ClockIcon } from "lucide-react";
import React from "react";

export function Clock() {
  const [time, setTime] = React.useState(getMyFusor());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(getMyFusor());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="bg-accent flex h-7 items-center justify-center gap-1 rounded-sm px-2 py-1 text-xs opacity-100">
      <ClockIcon size={14} />
      {time}
    </span>
  );
}
