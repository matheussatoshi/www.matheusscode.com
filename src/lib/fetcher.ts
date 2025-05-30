export async function fetcher<T = unknown>(
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<T> {
const isFullUrl = typeof input === "string" && input.startsWith("http");

  const url = isFullUrl
    ? input
    : typeof window === "undefined"
      ? `/api${input}`
      : `${process.env.NEXT_PUBLIC_API_URL}/api${input}`;

  const response = await fetch(url, init);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const result = await response.json();

  return result.data as T;
}
