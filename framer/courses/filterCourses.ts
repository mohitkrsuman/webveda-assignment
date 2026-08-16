import type { Course, Region, SortKey } from "./types.ts"

function priceOf(course: Course, region: Region) {
  return region === "IN" ? course.pricePaise : course.priceUsdCents
}

export function filterAndSortCourses(
  courses: Course[],
  query: string,
  sort: SortKey,
  region: Region,
) {
  const needle = query.trim().toLowerCase()
  const filtered = needle
    ? courses.filter((course) =>
        [course.courseName, course.description, course.mainCategory, course.courseCode]
          .join(" ")
          .toLowerCase()
          .includes(needle),
      )
    : [...courses]

  const byName = (a: Course, b: Course) =>
    a.courseName.localeCompare(b.courseName, undefined, { sensitivity: "base" })

  switch (sort) {
    case "name-asc":
      return filtered.sort(byName)
    case "name-desc":
      return filtered.sort((a, b) => byName(b, a))
    case "price-asc":
      return filtered.sort((a, b) => priceOf(a, region) - priceOf(b, region))
    case "price-desc":
      return filtered.sort((a, b) => priceOf(b, region) - priceOf(a, region))
    default:
      return filtered
  }
}
