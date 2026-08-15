import type { Course, Region } from "./types.ts"

const inrWhole = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
})

const inrCents = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 2,
})

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
})

export function formatPrice(course: Course, region: Region) {
  if (region === "IN") {
    const rupees = course.pricePaise / 100
    return (rupees % 1 === 0 ? inrWhole : inrCents).format(rupees)
  }

  return usd.format(course.priceUsdCents / 100)
}
