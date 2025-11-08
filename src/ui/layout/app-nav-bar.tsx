import { Brand } from "@/components/brand"
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler"
import { Transmutation } from "../../components/transmulation"

export function AppNavBar() {
  return (
    <header className="fixed top-0 z-50 w-full rounded-b-4xl backdrop-blur-sm md:backdrop-blur-none">
      <Transmutation>
        <div className="mx-auto flex w-full items-center justify-between px-6 py-3 transition-all md:py-4">
          <Brand className="text-primary" size={60} />
          <div className="flex items-center gap-4">
            <AnimatedThemeToggler />
          </div>
        </div>
      </Transmutation>
    </header>
  )
}
