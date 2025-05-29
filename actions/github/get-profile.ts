"use server";

import { GITHUB_URL } from "@/registry/registry-domains";
import { Profile } from "./namespace";

export async function getProfile(): Promise<Profile> {
  const response = await fetch(
    `${GITHUB_URL}/users/${process.env.GITHUB_USERNAME}`,
    {
      cache: "force-cache",
      next: {
        tags: ["get-profile"],
      },
    },
  );

  return await response.json();
}
