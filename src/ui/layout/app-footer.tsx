import { Link } from "@/components/ui/link";
import { copyright } from "@/utils/functions/copyright";
import { mimic } from "@/lib/mimic";

export function AppFooter() {
  return (
    <footer className="w-full sm:mt-20 border-t border-border">
      <div className="container flex flex-col justify-center lg:justify-normal lg:flex-row w-full items-center py-8 mx-auto px-7 max-w-7xl">
        <Link
          href="/"
          className="h-5 !p-0 hover:bg-transparent bg-transparent text-base group relative z-30 items-center !gap-0 space-x-1.5 !text-primary font-semibold"
        >
          <span className="text-xl -translate-y-0.5 group-hover:-rotate-12 group-hover:scale-[1.2] ease-in-out duration-300">
            ✦
          </span>
          <span className="-translate-y-0.5 text-sm">Matheus Figueiredo</span>
        </Link>
        <div className="w-full h-[1px] max-w-10 my-2 lg:w-[1px] bg-border lg:min-h-4 mx-4" />
        <p className="text-muted-foreground/75">{copyright()}</p>
        <div className="flex flex-col lg:flex-row items-center space-y-4 mt-4 lg:mt-0 lg:space-y-0 lg:gap-2.5 ml-0 lg:ml-auto">
          <Link>Agende uma reunião</Link>

          <ul className="flex items-center gap-0.5">
            {mimic.socialLinks.map((link) => {
              const LottieIcon = link.element;
              return (
                <li key={link.id} className="pt-1">
                  <LottieIcon title={link.name} href={link.href} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
