"use client";

import { Brand } from "@/components/brand";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
import { usePathname } from "next/navigation";
import { Transmutation } from "../../components/transmulation";

export function AppNavBar() {
  const pathname = usePathname();

  const IS_HOME_PATH = pathname === "/";

  return (
    <header className="fixed top-0 w-full md:z-20">
      <Transmutation>
        <div
          className="mx-auto flex w-full items-center justify-between py-3 px-6 transition-all md:py-4"
        >
          <Brand size={60} className="text-primary" />
          <div className="flex items-center gap-4">
            <AnimatedThemeToggler />
          </div>
        </div>
      </Transmutation>
    </header>
  );
}
