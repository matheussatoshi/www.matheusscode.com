"use client";

import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
import Image from "next/image";
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
          <Image src='/mf-signature.svg' alt='MF Rubric Signature' width={60} height={60} />
          <div className="flex items-center gap-4">
            <AnimatedThemeToggler />
          </div>
        </div>
      </Transmutation>
    </header>
  );
}
