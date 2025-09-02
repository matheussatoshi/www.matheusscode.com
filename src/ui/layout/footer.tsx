import { cn } from "@/lib/cn";
import { copyright } from "@/utils/functions/copyright";
import dynamic from "next/dynamic";
import { ComponentProps } from "react";

const DotPattern = dynamic(() => import('@/components/magicui/dot-pattern').then((mod) => mod.DotPattern));

export function Footer({ className, ...props }: ComponentProps<'footer'>) {
    return (
        <footer className={cn("overflow-hidden space-y-1.5 relative py-10 bg-accent/25 max-w-full border-t border-t-border flex items-center justify-center", className)} {...props}>
            <div className="absolute flex h-[100px] opacity-50 w-full flex-col items-center justify-center overflow-hidden">
                <DotPattern
                    glow={true}
                    className={cn(
                        "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                    )}
                />
            </div>
            <span className="text-muted-foreground">{copyright()}</span>
        </footer>
    )
}