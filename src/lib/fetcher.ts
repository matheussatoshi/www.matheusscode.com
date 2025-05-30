const isServer = typeof window === "undefined";

export async function fetcher<T = unknown>(
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<T> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${input}`,
    init,
  );

  const result = await response.json();

  return result as T;
}
