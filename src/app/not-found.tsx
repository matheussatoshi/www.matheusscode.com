import { ArrowLeftIcon } from "lucide-react"
import { Link } from "@/components/ui/link"
import { PageLayout } from "@/ui/layout/page-layout"

export default function NotFound() {
  return (
    <PageLayout className="flex h-screen items-center justify-center space-y-4">
      <h1 className="font-bold text-7xl">404</h1>
      <h2 className="font-bold text-2xl">Page Not Found</h2>
      <p className="max-w-sm text-center text-base text-muted-foreground">
        Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
        moved.
      </p>
      <Link className="!gap-1 hover:!gap-2 transition-all">
        <ArrowLeftIcon />
        Back to Home
      </Link>
    </PageLayout>
  )
}
