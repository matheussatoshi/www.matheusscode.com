export function getMyFusor(): string {
  const now = new Date()

  // Covert to UTC-4 (Manaus)
  const utc = now.getTime() + now.getTimezoneOffset() * 60_000

  const time = new Date(utc - 4 * 60 * 60_000) // UTC-4

  const hours = time.getHours().toString().padStart(2, "0")
  const minutes = time.getMinutes().toString().padStart(2, "0")

  return `${hours}:${minutes}`
}
