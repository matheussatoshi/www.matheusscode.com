import { Link } from "@/components/ui/link";
import { PageLayout } from "@/ui/layout/page-layout";
import { ArrowLeftIcon } from "lucide-react";

export default function NotFound() {
  return (
    <PageLayout className="flex h-screen items-center justify-center space-y-4">
      <h1 className="text-7xl font-bold">404</h1>
      <h2 className="text-2xl font-bold">Page Not Found</h2>
      <p className="text-muted-foreground max-w-sm text-center text-base">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <Link className="!gap-1 transition-all hover:!gap-2">
        <ArrowLeftIcon />
        Back to Home
      </Link>
    </PageLayout>
  );
}
