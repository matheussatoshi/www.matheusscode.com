export async function fetcher<T = unknown>(
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<T> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api${input}`,
    init,
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const contentType = response.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    throw new Error(`Expected JSON response but got ${contentType}`);
  }

  try {
    const result = await response.json();
    return result as T;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to parse JSON response: ${error.message}`);
    }
    throw new Error("Failed to parse JSON response: Unknown error");
  }
}
