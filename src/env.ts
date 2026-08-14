export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? "https://syncsphere-hiv6.onrender.com"

export const API_PATHS = {
  courses: "/assignment/course-data",
  countryCode: "/assignment/country-code",
} as const

export const DEFAULT_REGION = "US" as const
export const DEFAULT_HEADING = "Courses live right now"
export const DEFAULT_ACCENT = "#e8ff4d"
