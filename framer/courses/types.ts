export type Region = "IN" | "US"
export type LoadStatus = "loading" | "error" | "empty" | "ready"

export type Course = {
  courseName: string
  courseCode: string
  description: string
  mainCategory: string
  pricePaise: number
  priceUsdCents: number
  mangoId: string
}

export type CountryPayload = {
  country_code?: string
}

export type CoursesSectionProps = {
  heading: string
  accentColor: string
}
