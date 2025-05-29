"use server";

import { Repository } from "@/actions/github/namespace";
import { Card, CardTitle } from "@/components/ui/card";
import { truncate } from "@/utils/functions/truncate";
import Link from "next/link";

export async function ProjectCard({ data }: { data: Repository }) {
  return (
    <Card className="group/project gap-3 border-none bg-transparent p-0">
      <Link href={data?.html_url ?? ""}>
        <div className="bg-accent relative h-40 w-full overflow-hidden rounded-xl"></div>
        <CardTitle className="mt-2.5 text-sm font-medium">
          {truncate(data?.description, 70)}
        </CardTitle>
      </Link>
    </Card>
  );
}
