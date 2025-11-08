import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Open_Sans } from "next/font/google"
import { ThemeProvider } from "@/providers/theme-provider"
import { AppNavBar } from "@/ui/layout/app-nav-bar"
import { Footer } from "@/ui/layout/footer"
import "./globals.css"

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
})

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${openSans.className} antialiased`}>
        <ThemeProvider>
          <AppNavBar />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
