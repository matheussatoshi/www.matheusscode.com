"use client";

import { useState, useEffect } from "react";

import { useAnimate, stagger, motion } from "motion/react";

import {
  LayoutGridIcon,
  TrashIcon,
  Building2,
  UserCircleIcon,
  SettingsIcon,
  ChevronRightIcon,
  BellIcon,
  SunIcon,
  MoonIcon,
  SunMoonIcon,
  CheckIcon,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { useTheme } from "next-themes";

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

  useEffect(() => {
    animate("#menu-icon", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

    animate(
      "ul",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 12px)"
          : "inset(10% 50% 90% 50% round 12px)",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );

    animate(
      "li",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [isOpen, animate, staggerMenuItems]);

  return scope;
}

export function ModeToggle({
  className,
  ...props
}: React.ComponentProps<"nav">) {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  const handleSelectTheme = (theme: string) => {
    setTheme(theme);
    setIsOpen(false);
  };

  const items = [
    {
      name: "System",
      icon: <SunMoonIcon size={16} />,
      onClick: () => handleSelectTheme("system"),
    },
    {
      name: "Light",
      icon: <SunIcon size={16} />,
      onClick: () => handleSelectTheme("light"),
    },
    {
      name: "Dark",
      icon: <MoonIcon size={16} />,
      onClick: () => handleSelectTheme("dark"),
    },
  ];

  return (
    <nav
      className={cn("relative w-full max-w-[200px]", className)}
      ref={scope}
      {...props}
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        className={cn(
          "flex w-auto items-center justify-between rounded-sm borderbg-neutral-50 px-2 h-7",
          "bg-accent"
        )}
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <div style={{ transformOrigin: "50% 55%" }}>
          <SunIcon size={16} className="text-primary" id="menu-icon" />
        </div>
      </motion.button>
      <ul
        className={cn(
          "absolute mt-2 z-10 overflow-hidden mx-auto flex w-full max-w-[130px] flex-col rounded-xl border border-border px-1.5 py-2.5",
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        {items.map(({ icon, onClick, name }, idx) => (
          <li key={idx}>
            <button
              onClick={onClick}
              className={cn(
                "group flex w-full text-muted-foreground font-normal items-center rounded-sm border border-transparent",
                "focus-visible:outline-none py-1 transition-colors select-none px-1.5 gap-1.5",
                theme === name.toLowerCase() &&
                  "text-primary font-medium bg-accent"
              )}
            >
              {icon}
              <span className="flex items-center gap-1 text-sm font-normal">
                {name}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
