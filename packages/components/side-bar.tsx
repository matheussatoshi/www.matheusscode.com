"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import transitions from "@/registry/registry-animations";
import Transmutation from "@/ui/layout/transmutation-content";
import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";
import { HTMLAttributes } from "react";

interface SideBarProps extends HTMLAttributes<HTMLDivElement> {
  isInner?: boolean;
  title?: string;
}

export const SideBar = ({
  children,
  className,
  isInner = false,
  ...props
}: SideBarProps) => {
  const pathname = usePathname();

  return (
    <Transmutation transition={transitions.slideToLeft}>
      <ScrollArea
        className={cn(
          "sticky top-0 z-10 hidden h-screen min-w-[310px] flex-col border-r border-gray-200 bg-zinc-50 px-2.5 py-3 dark:border-gray-700/20 dark:bg-zinc-900/20 laptop:flex",
          isInner && "w-72",
          pathname.endsWith("curriculum") && "hidden",
        )}
      >
        <aside {...props} className={cn("h-full", className)}>
          <div className="min-h-full w-full text-sm">
            {children}
            {/* <div className="mt-auto flex flex-col items-center justify-center space-y-4">
              <NewsletterCard className="mt-6" />
            </div> */}
          </div>
        </aside>
      </ScrollArea>
    </Transmutation>
  );
};
