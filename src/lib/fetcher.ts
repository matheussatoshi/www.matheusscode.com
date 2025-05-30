const isServer = typeof window === "undefined";

export async function fetcher<T = unknown>(
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<T> {
  const baseURL = isServer
    ? process.env.NEXT_PUBLIC_API_URL?.startsWith("http")
      ? process.env.NEXT_PUBLIC_API_URL
      : `https://www.matheussfigueiredo.com/api`
    : process.env.NEXT_PUBLIC_API_URL;

  const url = `${baseURL}${input}`;

  const response = await fetch(url, init);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const result = await response.json();

  return result as T;
}
