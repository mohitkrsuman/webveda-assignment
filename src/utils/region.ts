import type { Region } from "../types/course.ts"

export function parseRegion(code: unknown): Region | null {
  if (code === "IN" || code === "US") return code
  return null
}

