"use server";

export async function fetcher<T = unknown>(
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<T> {
  try {
    const url = input.toString().startsWith("http")
      ? input
      : `${process.env.NEXT_PUBLIC_API_URL}/api${input}`;

    const response = await fetch(url, init);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result as T;
  } catch (error) {
    console.error("Fetcher error:", error);
    throw error;
  }
}
