export async function fetcher<T = unknown>(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<T> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${input}`,
    init
  )

  if (!response.ok) {
    const text = await response.text()
    throw new Error(`Fetch error: ${response.status} - ${text}`)
  }

  const result = await response.json()

  return result as T
}
