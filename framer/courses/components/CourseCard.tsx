import { formatPrice } from "../formatPrice.ts"
import { styles } from "../styles.ts"
import type { Course, Region } from "../types.ts"

type Props = {
  course: Course
  region: Region
}

export default function CourseCard({ course, region }: Props) {
  return (
    <article className="skillpath-card skillpath-course" style={styles.glassCard}>
      <p style={styles.category}>{course.mainCategory}</p>
      <h3 className="skillpath-title" style={styles.title}>
        {course.courseName}
      </h3>
      <p style={styles.description}>{course.description}</p>
      <p style={styles.price}>{formatPrice(course, region)}</p>
    </article>
  )
}
