import { memo } from "react"
import type { Course, Region } from "../../types/course.ts"
import { formatPrice } from "../../utils/formatPrice.ts"
import styles from "./CourseCard.module.css"

type Props = {
  course: Course
  region: Region
}

function CourseCard({ course, region }: Props) {
  return (
    <article className={styles.card}>
      <p className={styles.category}>{course.mainCategory}</p>
      <h3 className={styles.title}>{course.courseName}</h3>
      <p className={styles.description}>{course.description}</p>
      <div className={styles.footer}>
        <span className={styles.price}>{formatPrice(course, region)}</span>
      </div>
    </article>
  )
}

export default memo(CourseCard)
