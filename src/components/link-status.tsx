"use client"

import { useLinkStatus } from "next/link"
import { Spinner } from "./ui/spinner"

export default function LoadingIndicator() {
  const { pending } = useLinkStatus()
  return pending ? (
    <Spinner aria-label="Loading" className="mt-1 size-3" role="status" />
  ) : null
}
