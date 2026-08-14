import { API_BASE_URL } from "../env.ts"

const MAX_ATTEMPTS = 2

export async function getJson<T>(path: string, signal?: AbortSignal): Promise<T> {
  let lastError: Error = new Error("Request failed")

  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt += 1) {
    const res = await fetch(`${API_BASE_URL}${path}`, { method: "GET", signal })

    if (res.ok) {
      return (await res.json()) as T
    }

    lastError = new Error(`Request failed (${res.status})`)
  }

  throw lastError
}
