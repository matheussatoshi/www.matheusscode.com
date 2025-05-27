import { getMyFusor } from "@/utils/functions/date";
import { ModeToggle } from "@/components/mode-toggle";
import { mimic } from "@/lib/mimic";
import Link from "next/link";
import { ClockIcon, MapPinIcon, PinIcon } from "lucide-react";
import { MobileNav } from "./mobile-nav";

export function AppNavBar() {
  return (
    <header className="w-full flex flex-row justify-between md:fixed md:z-20">
      <div className="p-3 md:p-5 max-w-full flex items-center justify-between w-full transition-all">
        <div className="flex max-w-xs w-full justify-start items-center gap-3">
          <MobileNav />
          <span className="hidden lg:block text-xl bg-accent select-none px-1.5 rounded-sm">
            ✦
          </span>
          <ModeToggle />
        </div>
        <nav className="w-full justify-center hidden lg:flex">
          <ul className="flex items-center text-sm space-x-6">
            {mimic.navigationLinks.map((link) => (
              <li key={link.id} className="hover:underline">
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex max-w-xs w-full items-center justify-end gap-2">
          <span className="opacity-100 bg-accent h-7 px-2 py-1 gap-1 rounded-sm flex items-center justify-center">
            <MapPinIcon size={14} />
            MANAUS
          </span>
          <span className="opacity-100 bg-accent h-7 px-2 py-1 gap-1 rounded-sm flex items-center justify-center">
            <ClockIcon size={14} />
            {getMyFusor()}
          </span>
        </div>
      </div>
    </header>
  );
}
