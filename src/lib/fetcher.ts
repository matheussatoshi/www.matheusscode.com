export async function fetcher<T = unknown>(
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<T> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api${input}`,
    init,
  );

  const result = await response.json();

  return result as T;
}
