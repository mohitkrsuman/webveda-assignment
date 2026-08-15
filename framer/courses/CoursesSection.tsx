import { useEffect, useState, type CSSProperties } from "react"
import { addPropertyControls, ControlType } from "framer"
import { getJson, parseRegion } from "./api.ts"
import CourseCard from "./components/CourseCard.tsx"
import LoadingGrid from "./components/LoadingGrid.tsx"
import StateCard from "./components/StateCard.tsx"
import {
  API_PATHS,
  DEFAULT_ACCENT,
  DEFAULT_HEADING,
  DEFAULT_REGION,
} from "./constants.ts"
import { GRID_CSS, styles } from "./styles.ts"
import type {
  CountryPayload,
  Course,
  CoursesSectionProps,
  LoadStatus,
  Region,
} from "./types.ts"

export default function CoursesSection(props: CoursesSectionProps) {
  const heading = props.heading ?? DEFAULT_HEADING
  const accentColor = props.accentColor ?? DEFAULT_ACCENT

  const [status, setStatus] = useState<LoadStatus>("loading")
  const [courses, setCourses] = useState<Course[]>([])
  const [region, setRegion] = useState<Region>(DEFAULT_REGION)
  const [regionGuessed, setRegionGuessed] = useState(false)
  const [reloadKey, setReloadKey] = useState(0)

  useEffect(() => {
    const controller = new AbortController()

    async function load() {
      setStatus("loading")
      setRegionGuessed(false)

      const [courseSettled, countrySettled] = await Promise.allSettled([
        getJson<Course[]>(API_PATHS.courses, controller.signal),
        getJson<CountryPayload>(API_PATHS.countryCode, controller.signal),
      ])

      if (controller.signal.aborted) return

      if (courseSettled.status === "rejected") {
        if ((courseSettled.reason as { name?: string })?.name === "AbortError") {
          return
        }
        setCourses([])
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

  return (
    <div
      className="skillpath-root"
      style={{
        ...styles.root,
        ["--accent" as string]: accentColor,
      } as CSSProperties}
    >
      <style>{GRID_CSS}</style>
      <div style={styles.header}>
        <h2 className="skillpath-heading" style={styles.heading}>
          {heading}
        </h2>
        {status === "ready" && regionGuessed ? (
          <p style={styles.note}>Showing USD while we confirm your region.</p>
        ) : null}
      </div>

      {status === "loading" ? <LoadingGrid /> : null}

      {status === "error" ? (
        <StateCard
          title="Courses didn’t load"
          actionLabel="Try again"
          onAction={() => setReloadKey((n) => n + 1)}
        />
      ) : null}

      {status === "empty" ? (
        <StateCard
          title="Nothing on the shelf"
          actionLabel="Refresh"
          onAction={() => setReloadKey((n) => n + 1)}
        />
      ) : null}

      {status === "ready" ? (
        <div className="skillpath-grid">
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
