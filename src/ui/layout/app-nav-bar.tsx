"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/cn";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Transmutation } from "../../components/transmulation";

export function AppNavBar() {
  const pathname = usePathname();

  const IS_HOME_PATH = pathname === "/";

  return (
    <header className="bg-background/50 fixed top-0 w-full backdrop-blur-xs md:z-20">
      <Transmutation>
        <div
          className={cn(
            "mx-auto flex w-full max-w-2xl items-center justify-between py-3 pr-2 pl-6 transition-all md:py-4",
            IS_HOME_PATH && "justify-end",
          )}
        >
          {!IS_HOME_PATH && (
            <Link
              href="/"
              className="flex items-center gap-1 transition-all hover:gap-1.5"
            >
              <ArrowLeftIcon size={16} /> Voltar ao início
            </Link>
          )}
          <ModeToggle />
        </div>
      </Transmutation>
    </header>
  );
}
