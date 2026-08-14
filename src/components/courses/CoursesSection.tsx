import { useEffect, useState, type CSSProperties } from "react"
import { addPropertyControls, ControlType } from "framer"
import {
  API_PATHS,
  DEFAULT_ACCENT,
  DEFAULT_HEADING,
  DEFAULT_REGION,
} from "../../env.ts"
import type {
  CountryPayload,
  Course,
  CoursesSectionProps,
  LoadStatus,
  Region,
} from "../../types/course.ts"
import { getJson } from "../../utils/api.ts"
import { parseRegion } from "../../utils/region.ts"
import CourseCard from "./CourseCard.tsx"
import styles from "./CoursesSection.module.css"
import LoadingGrid from "./LoadingGrid.tsx"
import StateCard from "./StateCard.tsx"

export default function CoursesSection(props: CoursesSectionProps) {
  const heading = props.heading ?? DEFAULT_HEADING
  const accentColor = props.accentColor ?? DEFAULT_ACCENT

  const [status, setStatus] = useState<LoadStatus>("loading")
  const [courses, setCourses] = useState<Course[]>([])
  const [region, setRegion] = useState<Region>(DEFAULT_REGION)
  const [regionGuessed, setRegionGuessed] = useState(false)
  const [errorMessage, setErrorMessage] = useState("Something went wrong.")
  const [reloadKey, setReloadKey] = useState(0)

  useEffect(() => {
    const controller = new AbortController()

    async function load() {
      setStatus("loading")
      setErrorMessage("Something went wrong.")
      setRegionGuessed(false)

      const [courseSettled, countrySettled] = await Promise.allSettled([
        getJson<Course[]>(API_PATHS.courses, controller.signal),
        getJson<CountryPayload>(API_PATHS.countryCode, controller.signal),
      ])

      if (controller.signal.aborted) return

      if (courseSettled.status === "rejected") {
        if (courseSettled.reason?.name === "AbortError") return
        setCourses([])
        setErrorMessage(
          "We couldn’t load courses. The catalog is being stubborn — try again.",
        )
        setStatus("error")
        return
      }

      const list = Array.isArray(courseSettled.value) ? courseSettled.value : []
      setCourses(list)

      if (countrySettled.status === "fulfilled") {
        const parsed = parseRegion(countrySettled.value?.country_code)
        setRegion(parsed ?? DEFAULT_REGION)
        setRegionGuessed(!parsed)
      } else {
        setRegion(DEFAULT_REGION)
        setRegionGuessed(true)
      }

      setStatus(list.length === 0 ? "empty" : "ready")
    }

    void load()
    return () => controller.abort()
  }, [reloadKey])

  const retry = () => setReloadKey((n) => n + 1)

  return (
    <div
      className={styles.root}
      style={{ ["--accent" as string]: accentColor } as CSSProperties}
    >
      <div className={styles.orbA} aria-hidden="true" />
      <div className={styles.orbB} aria-hidden="true" />
      <div className={styles.orbC} aria-hidden="true" />

      <div className={styles.header}>
        <h2 className={styles.heading}>{heading}</h2>
        {status === "ready" && regionGuessed ? (
          <p className={styles.note}>Showing USD while we confirm your region.</p>
        ) : null}
      </div>

      {status === "loading" ? <LoadingGrid /> : null}

      {status === "error" ? (
        <StateCard
          title="Courses didn’t load"
          body={errorMessage}
          actionLabel="Try again"
          onAction={retry}
        />
      ) : null}

      {status === "empty" ? (
        <StateCard
          title="Nothing on the shelf"
          body="The catalog came back empty. Check back in a bit, or retry now."
          actionLabel="Refresh"
          onAction={retry}
        />
      ) : null}

      {status === "ready" ? (
        <div className={styles.grid}>
          {courses.map((course) => (
            <CourseCard
              key={course.courseCode || course.mangoId}
              course={course}
              region={region}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}

addPropertyControls(CoursesSection, {
  heading: {
    type: ControlType.String,
    title: "Heading",
    defaultValue: DEFAULT_HEADING,
  },
  accentColor: {
    type: ControlType.Color,
    title: "Accent",
    defaultValue: DEFAULT_ACCENT,
  },
})
