import { Link } from "@/components/ui/link";
import { mimic } from "@/lib/mimic";
import { copyright } from "@/utils/functions/copyright";

export function AppFooter() {
  return (
    <footer className="border-border mt-auto w-full border-t">
      <div className="container mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-7 py-8 lg:flex-row lg:justify-normal">
        <Link
          href="/"
          className="group !text-primary relative z-30 h-5 items-center !gap-0 space-x-1.5 bg-transparent !p-0 text-base font-semibold hover:bg-transparent"
        >
          <span className="-translate-y-0.5 text-xl duration-300 ease-in-out group-hover:scale-[1.2] group-hover:-rotate-12">
            ✦
          </span>
          <span className="-translate-y-0.5 text-sm">Matheus Figueiredo</span>
        </Link>
        <div className="bg-border mx-4 my-2 h-[1px] w-full max-w-10 lg:min-h-4 lg:w-[1px]" />
        <p className="text-muted-foreground/75 text-xs">{copyright()}</p>
        <div className="mt-4 ml-0 flex flex-col items-center space-y-4 lg:mt-0 lg:ml-auto lg:flex-row lg:gap-2.5 lg:space-y-0">
          <Link> Schedule a meeting </Link>

          <ul className="flex items-center gap-1.5">
            {mimic.socialLinks.map((link) => {
              return (
                <li key={link.id} className="pt-1">
                  <Link
                    variant="ghost"
                    size="icon"
                    className="hover:bg-accent/35 transition-all"
                    title={link.name}
                    href={link.href}
                  >
                    <link.icon size={24} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
