"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { mimic } from "@/lib/mimic";
import { Link } from "@/components/ui/link";
import { ChevronRightIcon } from "lucide-react";

export function MobileNav() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" className="inline-flex lg:hidden">
          <span className="text-xl bg-accent select-none px-1.5 rounded-sm">
            ✦
          </span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-full sm:max-w-sm">
          <DrawerHeader className="hidden">
            <DrawerTitle />
            <DrawerDescription />
          </DrawerHeader>
          <div className="p-4 w-full">
            <ul className="flex items-center gap-2 justify-center flex-col w-full text-sm">
              {mimic.navigationLinks.map((link) => (
                <li key={link.id} className="w-full">
                  <Link
                    variant="ghost"
                    href={link.href}
                    title={link.label}
                    className="rounded-sm !px-4 hover:bg-accent justify-start w-full h-9 !text-sm"
                  >
                    {link.label}
                    <ChevronRightIcon className="ml-auto" size={16} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
