import { API_BASE } from "./constants.ts"

export async function getJson<T>(path: string, signal?: AbortSignal): Promise<T> {
  let lastError = new Error("Request failed")

  for (let attempt = 0; attempt < 2; attempt += 1) {
    const res = await fetch(`${API_BASE}${path}`, { method: "GET", signal })
    if (res.ok) return (await res.json()) as T
    lastError = new Error(`Request failed (${res.status})`)
  }

  throw lastError
}

export function parseRegion(code: unknown) {
  if (code === "IN" || code === "US") return code
  return null
}
