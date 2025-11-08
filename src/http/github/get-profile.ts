import { GITHUB_URL } from "@/registry/registry-domains"
import { revalidate } from "@/registry/registry-middleware"
import type { Github } from "./namespace"

export async function getProfile() {
  const response = await fetch(
    `${GITHUB_URL}/users/${process.env.GITHUB_USERNAME}`,
    {
      cache: "force-cache",
      next: {
        revalidate,
        tags: ["get-profile"],
      },
    }
  )

  const result = await response.json()

  return result as Github.Profile
}
