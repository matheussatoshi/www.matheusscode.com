import { ModeToggle } from "@/components/mode-toggle";
import { mimic } from "@/lib/mimic";
import { getMyFusor } from "@/utils/functions/date";
import { ClockIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";
import { MobileNav } from "./mobile-nav";

export function AppNavBar() {
  return (
    <header className="top-0 flex w-full flex-row justify-between md:fixed md:z-20">
      <div className="flex w-full max-w-full items-center justify-between p-3 backdrop-blur-2xl transition-all md:p-5">
        <div className="flex w-full max-w-xs items-center justify-start gap-3">
          <MobileNav />
          <span className="bg-accent hidden rounded-sm px-1.5 text-xl select-none lg:block">
            ✦
          </span>
          <ModeToggle />
        </div>
        <nav className="hidden w-full justify-center lg:flex">
          <ul className="flex items-center space-x-6 text-sm">
            {mimic.navigationLinks.map((link) => (
              <li key={link.id} className="hover:underline">
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex w-full max-w-xs items-center justify-end gap-2">
          <span className="bg-accent flex h-7 items-center justify-center gap-1 rounded-sm px-2 py-1 text-xs opacity-100">
            <MapPinIcon size={14} />
            MANAUS
          </span>
          <span className="bg-accent flex h-7 items-center justify-center gap-1 rounded-sm px-2 py-1 text-xs opacity-100">
            <ClockIcon size={14} />
            {getMyFusor()}
          </span>
        </div>
      </div>
    </header>
  );
}
