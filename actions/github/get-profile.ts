"use server";

import { fetcher } from "@/lib/fetcher";
import { GITHUB_URL } from "@/registry/registry-domains";
import { Github } from "./namespace";

export async function getProfile(): Promise<Github.Profile> {
  const response = await fetcher<Github.Profile>(
    `${GITHUB_URL}/users/${process.env.GITHUB_USERNAME}`,
    {
      cache: "force-cache",
      next: {
        tags: ["get-profile"],
      },
    },
  );

  return response;
}
